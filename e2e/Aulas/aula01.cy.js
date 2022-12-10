///<reference types='cypress' />
describe("Minha primeira suite de teste", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.get("#user-name").type('standard_user')
		cy.get("#password").type('secret_sauce')
		cy.get("#login-button").click()
		cy.get(".app_logo").should("be.visible")
	})


	it("validar compra", () => {

		cy.get(".app_logo").should("be.visible")
		cy.get("#add-to-cart-sauce-labs-backpack").click()
		cy.get('#remove-sauce-labs-backpack').should("have.text", "Remove")
		cy.get('.shopping_cart_link').click()
		cy.get('.shopping_cart_link').should("be.visible")
	});

});
