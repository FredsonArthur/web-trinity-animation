// 1. Selecionamos todos os containers de tecnologia
const wrappers = document.querySelectorAll('.pixel-wrapper');

wrappers.forEach(wrapper => {
    const label = wrapper.querySelector('.label');

    // Efeito de Entrada (Hover)
    wrapper.addEventListener('mouseenter', () => {
        // Feedback visual no texto via JS (complementa o CSS)
        label.style.color = "#00ff00"; 
        label.style.textShadow = "2px 2px #005500";
        
        // Log de navegação para o console (estilo terminal de desenvolvedor)
        console.log(`[SYSTEM]: Navegando por ${label.innerText}...`);
    });

    // Efeito de Saída
    wrapper.addEventListener('mouseleave', () => {
        label.style.color = "#888";
        label.style.textShadow = "none";
    });

    // Efeito de Seleção (Clique)
    wrapper.addEventListener('click', () => {
        const techName = label.innerText;

        // 1. Efeito de "Flash" na tela (Simula hardware antigo processando)
        document.body.style.backgroundColor = "#555";
        
        // 2. Pequeno tremor de câmera (Shake)
        document.querySelector('.game-screen').style.transform = "translateX(5px)";
        
        setTimeout(() => {
            document.body.style.backgroundColor = "#000";
            document.querySelector('.game-screen').style.transform = "translateX(0)";
        }, 80);

        // 3. Feedback de seleção no console
        console.warn(`[SELEÇÃO]: ${techName} foi escolhido pelo Player 1!`);

        // 4. Alerta estilizado (opcional, você pode trocar por um som no futuro)
        // Usando um pequeno atraso para o alerta não travar a animação de flash
        setTimeout(() => {
            alert(`>> ${techName} SELECTED <<`);
        }, 150);
    });
});

// Mensagem inicial no console ao carregar o projeto
console.log("%c PIXEL TRINITY LOADED ", "background: #00ff00; color: #000; font-weight: bold;");