// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/   ')
    });

    it('Deve criar usuário', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#reg_email').type(faker.internet.email())
       cy.get('#reg_password').type(faker.internet.password())
       cy.get(':nth-child(4) > .button').click()
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá,')
       cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
       cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
       cy.get('.form-row-first > label').type(faker.person.firstName())
       cy.get('#account_last_name').type(faker.person.lastName())
       cy.get('.woocommerce-Button').click()
       cy.get('.woocommerce-message').should('exist')
       cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.' )
    });

it('Deve completar o cadastro com sucesso usando variáveis', () => { 
    var email = faker.internet.email()
    var senha = faker.internet.password()
    var nome = faker.person.firstName()
    var sobrenome = faker.person.lastName()

    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá,')
    cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()

});
    
})