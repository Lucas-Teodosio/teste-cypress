const el = require('./elements').ELEMENTS

class produtos{
    validarTitulo(){
        cy.get(el.titulo).should("be.visible")
    }

}

export default new produtos()