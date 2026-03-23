describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('[name="username"]').type("tomsmith")
    cy.get('[name="password"]').type("SuperSecretPassword!")
    cy.get('.fa') .click()
    cy.get('#flash').contains("You logged into a secure area!")
  })
})