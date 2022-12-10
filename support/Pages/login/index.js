//metodos de ações na pagina
const el = require('./elements').ELEMENTS

class login{
    logar(username, password){
        cy.visit(el.url),
        cy.get(el.campoUsername).type(username)
        cy.get(el.campoPassword).type(password)
        cy.get(el.botaologin).click()
    }

}

export default new login()