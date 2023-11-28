Feature: Login no site Serasa

    Scenario: Visualizar opção de login
        Given fulano acessa o site do Serasa
        When ele clica no botão Ver ofertas
        Then ele deve visualizar o campo cpf e o botão Continuar