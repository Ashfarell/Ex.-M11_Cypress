/// <reference types="cypress" />
beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});
describe('Funcionalidade: login', () => {

    it('Deve realizar o login', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('jean.teste@teste.com.br')
        cy.get('#password').type('Jlb@1988')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, jean.teste (não é jean.teste? Sair)')
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
    });
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('jean.teste@teste.com.')
        cy.get('#password').type('Jlb@1988')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro')
        cy.get('.woocommerce-error > li').should('exist')
    })
    it('Deve exibir mensagem de erro de senha', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('jean.teste@teste.com.br')
        cy.get('#password').type('Jlb@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'A senha')
        cy.get('.woocommerce-error > li').should('exist')
    })


});