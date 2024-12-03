describe("Teste de Landing Page", () => {
  describe("Contains elements", () => {
    it('Pages open', () => {
      cy.visit('/')
    })
    it('Contains elements', () => {
      cy.get('.elementor-icon-wrapper').should('exist')
      cy.get('.elementor-icon-wrapper').should('be.visible')
      cy.get('.e-con-inner').should('exist')
      cy.get('.e-con-inner').should('be.visible')
      cy.get('.plyr__video-wrapper').should('exist')
      cy.get('.plyr__video-wrapper').should('be.visible')
      cy.get('.plyr__control.plyr__control--overlaid') ///Controle de play do vídeo
      .should('exist')       // Verifica que o elemento está visível
      .should('be.visible')       // Verifica que o elemento está visível
      .and('not.be.disabled')     // Verifica que o elemento não está desabilitado
      .click(); 
    })
  })
})