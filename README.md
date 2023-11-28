# Cucumber_Cypress
Testes com Cucumber e Cypress

- Usados para criar e executar testes automatizados baseados em especificações de comportamento escritas em Gherkin.

Instalações:
- npm install cypress --save-dev
- npm install --save-dev cypress cypress-cucumber-processor
- npx cypress@9.7.0 open

Adicione ao arquivo cypress/plugins/index.js:

{
    "scripts": {
        "test": "cypress run --browser chrome"
    },
    "cypress-cucumber-preprocessor": {
        "step_definitions": "cypress/support/steps"
    },
    "devDependencies": {
      "cypress": "^9.7.0",
      "cypress-cucumber-preprocessor": "^4.3.1"
    }
}

- Execução manual: npx cypress open
- Execução automatizada: npm test

Instalação do Xpath para Cypress:

- npm install -D cypress-xpath

Adicionar ao final do do arquivo cypress/support/index.js:
- require('cypress-xpath');

Quando for usar o xpath dentro das classes de Elementos:
- cy.xpath("//input[@id='wp-submit']")...

O Cypress fornece uma variedade de comandos que podem ser usados para interagir com elementos da página, fazer asserções, controlar a execução dos testes, entre outras tarefas relacionadas aos testes de automação. Aqui estão alguns dos comandos mais comuns do Cypress:

- cy.visit(url):
Utilizado para visitar uma URL específica.
ex: cy.visit('https://www.example.com')
- cy.get(selector):
Localiza um elemento na página com base em um seletor CSS.
ex: cy.get('.login-button')
- cy.click():
Clica em um elemento.
ex: cy.get('.login-button').click()
- cy.type(text):
Insere texto em um campo de input.
ex: cy.get('#username').type('john_doe')
- cy.contains(text):
Localiza um elemento que contém o texto especificado.
ex: cy.contains('Submit').click()
- cy.url():
Obtém a URL atual.
ex: cy.url().should('include', '/dashboard')
- cy.get().should('condition'):
Faz asserções sobre o estado de um elemento.
ex: cy.get('.message').should('be.visible')
- cy.wait(milliseconds):
Aguarda um determinado período de tempo.
ex: cy.wait(2000)
- cy.intercept(route, handler):
Interceptar chamadas de rede para simular ou controlar o comportamento do servidor.
ex: cy.intercept('GET', '/api/data', { fixture: 'example-data.json' })
- cy.fixture():
Carrega dados de um arquivo fixture.
ex: cy.fixture('example-data.json').as('data')
- cy.its(property):
Acessa uma propriedade específica de um objeto Cypress.
ex: cy.get('.user').its('length').should('be.gt', 0)
- cy.scrollTo(position):
Rola a página para uma posição específica.
ex: cy.scrollTo('bottom')



