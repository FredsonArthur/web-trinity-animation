// 1. Configuração Global da Web Audio API para sons 8-bit
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playPixelSound(type) {
    // Retoma o contexto de áudio se estiver suspenso (exigência de segurança dos navegadores)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'hover') {
        // Som de "Blip" curto e agudo para navegação
        oscillator.type = 'square'; // Onda quadrada para estética retro
        oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); 
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05);
        oscillator.stop(audioCtx.currentTime + 0.05);
    } 
    else if (type === 'select') {
        // Som de "Power Up" ascendente para confirmação
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
        oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

// 2. Lógica para o Menu Principal (index.html)
const wrappers = document.querySelectorAll('.pixel-wrapper');

wrappers.forEach(wrapper => {
    const label = wrapper.querySelector('.label');

    // Efeito de Entrada (Hover)
    wrapper.addEventListener('mouseenter', () => {
        playPixelSound('hover');
        label.style.color = "#00ff00"; 
        label.style.textShadow = "2px 2px #005500";
    });

    // Efeito de Saída
    wrapper.addEventListener('mouseleave', () => {
        label.style.color = "#888";
        label.style.textShadow = "none";
    });

    // Efeito de Seleção (Clique) e Redirecionamento
    wrapper.addEventListener('click', () => {
        const techName = label.innerText.toUpperCase();
        playPixelSound('select');

        // Efeito visual de "Flash" e tremor
        document.body.style.backgroundColor = "#555";
        const gameScreen = document.querySelector('.game-screen');
        if (gameScreen) gameScreen.style.transform = "translateX(5px)";
        
        setTimeout(() => {
            document.body.style.backgroundColor = "#000";
            if (gameScreen) gameScreen.style.transform = "translateX(0)";

            // Redirecionamento dinâmico
            if (techName.includes("HTML")) {
                window.location.href = "html_page.html";
            } else if (techName.includes("CSS")) {
                window.location.href = "css_page.html";
            } else if (techName.includes("JAVASCRIPT") || techName.includes("JS")) {
                window.location.href = "js_page.html";
            }
        }, 150);
    });
});

// 3. Lógica para as Páginas Internas (Botão de Voltar)
const backLink = document.querySelector('.back-link');

if (backLink) {
    // Som ao passar o mouse no link de retorno
    backLink.addEventListener('mouseenter', () => playPixelSound('hover'));

    // Som e delay ao clicar para voltar
    backLink.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o navegador de mudar de página antes do som tocar
        playPixelSound('select');

        setTimeout(() => {
            window.location.href = backLink.getAttribute('href');
        }, 200); // Tempo para o som de confirmação ser ouvido
    });
}

// Mensagem de inicialização no console
console.log("%c PIXEL TRINITY LOADED ", "background: #00ff00; color: #000; font-weight: bold;");