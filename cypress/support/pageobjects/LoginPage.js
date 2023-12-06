import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
//const url = Cypress.config("baseUrl")

class LoginPage {
     
    //Acessa o site que será testado
    acessarSite() {
        cy.visit('https://www.serasa.com.br/')
            }
        
    // Clica no botão que acessa a página de login do site
    clicarVerOfertasButton() {
        

       cy.xpath('//*[@id="__next"]/div/div[3]/div[1]/div/div[3]/button').click();
       
    }
    
    //Visualiza o campo CPF
    visualizarCampoCPF() {
    
        cy.get(loginElements.CampoCPF()).should("be.visible");
  
    }
    
    //Visualiza o botão continuar
    visualizarbotaoContinuar() {
        
        cy.get(loginElements.botaoContinuar()).should("be.visible");
            
    }     
    

}

export default LoginPage;


