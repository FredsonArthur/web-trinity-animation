# 🕹️ Pixel Trinity Selection

Uma interface de seleção de tecnologias inspirada na estética **Arcade/8-bits**. O projeto apresenta a "Trindade da Web" (HTML, CSS e JavaScript) através de um menu interativo onde as logos em Pixel Art são reveladas apenas sob interação.

## 🚀 Novas Tecnologias e Técnicas

* **Pixel Art Progressiva**: Logos desenhadas puramente com CSS utilizando a técnica de `box-shadow` em grade, sem o uso de imagens ou SVGs.
* **Animação Retro**: Uso de `steps()` no CSS para simular a movimentação "truncada" característica de hardwares antigos.
* **Feedback de Game**: Sistema de "Flash" e "Shake" via JavaScript para confirmar a seleção do usuário.
* **Fonte 8-bit**: Integração com a Google Font `Press Start 2P`.

## 🎨 O Projeto

Diferente de uma vitrine estática, este projeto funciona como uma tela de "Select Your Character":
- **Estado Inicial:** Apenas os nomes das tecnologias são visíveis em um menu sóbrio.
- **Hover:** Ao passar o mouse, a logo da respectiva tecnologia surge flutuando em tamanho gigante acima do nome, com cores vibrantes e animação de pulsação.
- **Clique:** Um efeito de flash branco e tremor de tela confirma a escolha do "Player 1".

## 🛠️ Como visualizar

1.  Clone este repositório usando o **GitHub Desktop**.
2.  Abra a pasta no **VS Code**.
3.  Certifique-se de ter a extensão **Live Server** instalada.
4.  Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

## 📂 Estrutura de Arquivos Atualizada

- `index.html`: Estrutura do menu de seleção e containers das logos.
- `style.css`: Contém toda a lógica de desenho das logos via pixels (box-shadow) e animações.
- `script.js`: Gerencia os efeitos de interação visual e logs de sistema.