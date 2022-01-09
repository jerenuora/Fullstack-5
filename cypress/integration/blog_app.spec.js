describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Tero Testiuuseri',
      username: 'ttestter',
      password: 'passwords_123'
    }
    cy.request('POST', 'http://localhost:3000/api/users/', user)

    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('username')
    cy.contains('password')
    cy.contains('login')

  })
  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.get('#username').type('ttestter')
      cy.get('#password').type('passwords_123')
      cy.get('#login-butt').click()
      cy.contains('Tero Testiuuseri logged in')
    })

    it('fails with wrong credentials', function() {
      cy.get('#username').type('WRONG')
      cy.get('#password').type('not_right')
      cy.get('#login-butt').click()
      cy.contains('wrong username or password')

    })
  })
})