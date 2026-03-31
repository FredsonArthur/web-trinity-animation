# 🕹️ Pixel Trinity Selection & Portal

Uma interface de seleção de tecnologias inspirada na estética **Arcade/8-bits**. O projeto evoluiu de uma simples vitrine para um portal interativo onde cada tecnologia selecionada leva o usuário a um módulo de aprendizado exclusivo com estatísticas de progresso.

## 🚀 Novas Tecnologias e Técnicas

* **Navegação Dinâmica**: Sistema de redirecionamento via JavaScript que conecta a seleção do "Player 1" a páginas de conteúdo específicas.
* **Layout Centralizado**: Uso de Flexbox avançado para garantir que os módulos de conteúdo fiquem perfeitamente centralizados em qualquer resolução.
* **Pixel Art Progressiva**: Logos desenhadas puramente com CSS utilizando `box-shadow`, sem o uso de imagens.
* **Feedback de Game**: Sistema de "Flash" e "Shake" via JavaScript para confirmar a transição de nível.

## 🎨 O Projeto

O sistema funciona como uma tela de "Select Your Character" conectada a um RPG de estudos:
- **Menu Principal:** O usuário escolhe entre HTML, CSS ou JavaScript.
- **Transição:** Ao clicar, ocorre um flash visual simulando o carregamento de um "novo nível".
- **Módulos de Conteúdo:** Cada página (`html_page`, `css_page`, `js_page`) exibe informações da tecnologia e uma barra de maestria customizada.

## 🛠️ Como visualizar

1.  Clone este repositório usando o **GitHub Desktop**.
2.  Abra a pasta no **VS Code**.
3.  Certifique-se de ter a extensão **Live Server** instalada.
4.  Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

## 📂 Estrutura de Arquivos Expandida

- `index.html`: Menu de seleção principal.
- `style.css`: Estilização global e desenhos das logos em pixel art.
- `script.js`: Lógica de transição e redirecionamento dinâmico.
- `html_page.html`: Módulo de aprendizado de HTML5.
- `css_page.html`: Módulo de aprendizado de CSS3.
- `js_page.html`: Módulo de aprendizado de JavaScript.