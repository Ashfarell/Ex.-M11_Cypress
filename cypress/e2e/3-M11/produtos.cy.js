/// <reference types="cypress" />

describe('Funcionalidade: Produto', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()  // busca o primeiro na fila
        //.last()   // busca o último na fila
        //.eq(3)   // busca 3º na fila
        .contains('Abominable Hoodie')  // busca o nome exato
        .click()
    })

});