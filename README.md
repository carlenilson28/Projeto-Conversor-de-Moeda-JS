
# 💰 Simple Currency Converter

Este é um projeto de conversor de moedas simples e interativo, desenvolvido para praticar e consolidar conhecimentos em HTML, CSS e JavaScript puro (Vanilla JS). Ele permite ao usuário converter valores entre diferentes moedas em tempo real.

---

## ✨ Funcionalidades

*   **Seleção Dinâmica de Moedas:** Escolha a moeda de origem ("Converter de") e a moeda de destino ("Converter para") através de menus dropdown.

*   **Conversão em Tempo Real:** Os valores são atualizados instantaneamente no display assim que o usuário digita no campo de input ou altera qualquer uma das moedas.

*   **Feedback Visual:** Os nomes das moedas e suas respectivas imagens (bandeiras/logos) são atualizados automaticamente na interface.

*   **Múltiplas Moedas Suportadas:** Inclui Real (BRL), Dólar Americano (USD), Euro (EUR), Libra Esterlina (GBP) e Bitcoin (BTC).

*   **Tratamento de Input:** Aceita valores com vírgula (ex: "1.000,50") e trata entradas inválidas ou vazias, exibindo "0,00".

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica da página.

*   **CSS3:** Estilização e layout responsivo.

*   **JavaScript (Vanilla JS):**
    *   Manipulação do DOM (Document Object Model) para interagir com os elementos HTML.
    *   `Event Listeners` para detectar interações do usuário (cliques, mudanças nos selects, digitação).
    *   `parseFloat()` e `.replace()` para tratamento de entrada numérica.
    *   `isNaN()` para validação de números.
    *   `Intl.NumberFormat` para formatação de valores monetários de acordo com a localidade e moeda.
    *   Lógica de programação com `if/else if` e `switch` statements para controle de fluxo.

---

## 🚀 Como Usar

Para rodar este projeto em seu ambiente local:

1.  **Clone o repositório** (se estiver no GitHub) ou baixe os arquivos diretamente.
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd simple-currency-converter
    ```
    *(Substitua `<URL_DO_SEU_REPOSITORIO>` pelo link do seu projeto no GitHub, se você for publicá-lo lá.)*

2.  **Abra o arquivo `index.html`** em seu navegador web preferido (Google Chrome, Firefox, Edge, etc.).

3.  **Interaja com o conversor:**
    *   Selecione a moeda de origem no menu "Converter **de**".
    *   Selecione a moeda de destino no menu "Converter **para**".
    *   Digite um valor no campo "Valor".
    *   Observe a conversão automática e a atualização das imagens e nomes das moedas. Você também pode clicar no botão "Converter".

---

## 💡 Próximas Melhorias (Ideias para Evoluir o Projeto)

*   **Integração com API de Câmbio:** Atualmente, as taxas de câmbio são fixas. Uma melhoria significativa seria buscar as taxas em tempo real de uma API externa.

*   **Adicionar Mais Moedas:** Expandir a lista de moedas disponíveis para conversão.

*   **Botão de Inversão:** Adicionar um botão para rapidamente trocar as mo moedas de origem e destino.

*   **Validação Avançada de Input:** Implementar validações mais robustas, como impedir números negativos.

*   **Responsividade Aprimorada:** Otimizar o layout para diferentes tamanhos de tela.

---

## 🤝 Autor

*   **[Seu Nome Completo]** ou **[Seu Nome de Usuário no GitHub]**

*   Projeto desenvolvido como parte do aprendizado na plataforma **DevClub**.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Sinta-se à vontade para usar, modificar e distribuir.
