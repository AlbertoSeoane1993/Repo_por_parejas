describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('[name="username"]').type("AlbertoSeoane1993")
    cy.get('[name="password"]').type("Alberto")
    cy.get('.fa') .click()
  })
})