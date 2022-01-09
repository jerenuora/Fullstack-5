describe('Blog app', function() {
  beforeEach(function() {
    cy.createUser({ name: 'Tero Testiuuseri', username: 'ttestter', password: 'passwords_123' })
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
  describe('When logged in', function() {
    beforeEach(function() {
      cy.get('#username').type('ttestter')
      cy.get('#password').type('passwords_123')
      cy.get('#login-butt').click()
      cy.contains('Tero Testiuuseri logged in')
    })

    it('A blog can be created', function() {
      cy.contains('Create Blog').click()
      cy.get('#title_id').type('A title')
      cy.get('#author_id').type('Some author ')
      cy.get('#url_id').type('www.smtns.something')
      cy.get('#submit-butt').click()
      cy.contains('A new blog \'A title\'\' by Some author was added')
      cy.contains('A title Some author')
    })

  })

})