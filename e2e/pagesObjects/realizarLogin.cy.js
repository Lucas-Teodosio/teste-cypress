///<reference types='cypress' />
import login from '../../support/Pages/login';
import produtos from '../../support/Pages/products'
describe("Realizar Login", () => {

    it("Realizar Login com sucesso", () => {
        login.logar("standard_user","secret_sauce" )
        produtos.validarTitulo()
    })
})