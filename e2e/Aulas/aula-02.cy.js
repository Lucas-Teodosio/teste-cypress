///<reference types="cypress" />
describe('Integração com select, radio e checks', () => {
    before(() => {
        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html") 
    });

    it('Dropdown Menus', () => {
        cy.get("#dropdowm-menu-1").select('c#')
        cy.get("#dropdowm-menu-2").select('junit')
        cy.get("#dropdowm-menu-3").select('javascript')
    })

    it('validando checkbox', () => {
        cy.get('[type="checkbox"]').check('option-1').should('be.checked')
        cy.get('[type="checkbox"]').first().check() 
        cy.get('[type="checkbox"]').uncheck('option-3').should('not.be.checked') 
    })

    it('validando buttons Radios', () => {
        cy.get('input[value=blue]').click()
        cy.get('input[value=yellow]').check()
        cy.get('input[value=blue]').should('not.be.checked')
    })

    it('validando selected & disable', () =>{
        cy.get('input[type="radio"]').check('cabbage', {force:true}).should('be.visible')
        cy.get('#fruit-selects').select('apple')
    })

})