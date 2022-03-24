describe('Login and signup of users on alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
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

    it.only('login with valid user', () => {
        cy.login('flavio', '123');
        cy.contains('a', '(Logout').should('be.visible');
    })

    it.only('login with invalid user', () => {
        cy.login('jacqueline', '1234');
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })
})