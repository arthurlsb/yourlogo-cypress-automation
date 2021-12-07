/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()
describe('Registration', () => {
    it('When the user accesses the registration page, fills in the data and finishes, then the registration must be performed successfully', () => {
        
        var email = chance.email()
        var firstname = chance.first()
        var lastname = chance.last()
        
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a.login').contains('Sign in')
        cy.get('a.login').click()
        cy.get('input#email_create').type(email)
        cy.get('button#SubmitCreate').click()
        cy.get('input#id_gender1').check()
        cy.get('input#customer_firstname').type(firstname)
        cy.get('input#customer_lastname').type(lastname)
        cy.get('input#passwd').type('12345')
        cy.get('select#days').select('26')
        cy.get('select#months').select('12')
        cy.get('select#years').select('1999')
        cy.get('input#newsletter').check()
        cy.get('input#firstname').type(firstname)
        cy.get('input#lastname').type(lastname)
        cy.get('input#company').type('ywSoftware')
        cy.get('input#address1').type(chance.address())
        cy.get('input#address2').type(chance.address())
        cy.get('input#city').type(chance.city())
        cy.get('select#id_country').select('United States')
        cy.get('select#id_state').select('Arizona')
        cy.get('input#postcode').type('88050')
        cy.get('textarea#other').type(chance.sentence())
        cy.get('input#phone').type(chance.phone())
        cy.get('input#phone_mobile').type(chance.phone())
        cy.get('input#alias').type(chance.address())
        cy.get('button#submitAccount').click()
        cy.url().should('contain', 'index.php?controller=my-account')
        
    });
});