describe('Testing home page', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })
  
    it('verify messages on initial page', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');

    })

    it('verify enabled button on initial page', () => {
        cy.get('input[formcontrolname="userName"]').type('Jacqueline');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    it('verify application name on initial page', () => {
        cy.contains('a' ,' ALURAPIC ').should('be.visible');
    })

    it('verify clickable menu on initial page', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })
    
})