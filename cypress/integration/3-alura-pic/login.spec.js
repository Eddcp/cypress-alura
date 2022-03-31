describe('Login of users on alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    it.only('login with valid user', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', '(Logout').should('be.visible');
    })

    it.only('login with invalid user', () => {
        cy.login('jacqueline', '1234');
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })
    
})