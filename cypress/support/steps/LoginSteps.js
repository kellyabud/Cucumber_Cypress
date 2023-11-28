/* global Given, Then, When */


import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("fulano acessa o site do Serasa", () => {
    loginPage.acessarSite();
    
})

When('ele clica no botão Ver ofertas', () => {
    loginPage.clicarVerOfertasButton();
  });

Then("ele deve visualizar o campo cpf e o botão Continuar", () => {
    loginPage.visualizarCampoCPF();
    loginPage.visualizarbotaoContinuar();
    

})