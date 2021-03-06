describe('Singup of users on alura pic', () => {
    beforeEach(() => {
        cy.visit('/');
    })


    it('verify validation messages', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verify invalid email message', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('eduardo');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })
    
    it('verify minimun 8 length password', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verify username lower case', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('TEST');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    const users = require('../../fixtures/users.json');
    
    users.forEach((user) => {
        it.only(`register new user ${user.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(user.email);
            cy.get('input[formcontrolname="userName"]').type(user.userName);
            cy.get('input[formcontrolname="fullName"]').type(user.fullName);
            cy.get('input[formcontrolname="password"]').type(user.password);
            cy.contains('button', 'Register').click();
        })
    })
    
})