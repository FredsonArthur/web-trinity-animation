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

    // Efeito de Seleção (Clique) e Redirecionamento
    wrapper.addEventListener('click', () => {
        const techName = label.innerText.toUpperCase();

        // 1. Efeito de "Flash" na tela (Simula hardware antigo processando)
        document.body.style.backgroundColor = "#555";
        
        // 2. Pequeno tremor de câmera (Shake)
        const gameScreen = document.querySelector('.game-screen');
        gameScreen.style.transform = "translateX(5px)";
        
        // 3. Feedback de seleção no console
        console.warn(`[SELEÇÃO]: ${techName} foi escolhido pelo Player 1!`);

        // 4. Lógica de Redirecionamento após o efeito visual
        setTimeout(() => {
            // Reseta efeitos visuais antes de sair da página
            document.body.style.backgroundColor = "#000";
            gameScreen.style.transform = "translateX(0)";

            // Define o destino com base no texto do label
            if (techName.includes("HTML")) {
                window.location.href = "html_page.html";
            } else if (techName.includes("CSS")) {
                window.location.href = "css_page.html";
            } else if (techName.includes("JAVASCRIPT") || techName.includes("JS")) {
                window.location.href = "js_page.html";
            }
        }, 150); // Delay curto para o usuário ver o "Flash" de confirmação
    });
});

// Mensagem inicial no console ao carregar o projeto
console.log("%c PIXEL TRINITY LOADED ", "background: #00ff00; color: #000; font-weight: bold;");