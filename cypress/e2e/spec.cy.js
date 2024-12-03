import 'cypress-iframe'

describe("Teste de vídeo em iframe", () => {
  it("Verifica se o botão de play/pause funciona corretamente", () => {
    // Visita a página onde o iframe está localizado
    cy.visit('https://lp.teacherpoli.com/teacher-poli-apa-mt-depoimento/');

    // Espera o iframe ser carregado
    cy.frameLoaded('iframe'); // Comando do cypress-iframe

    // Acessa o conteúdo dentro do iframe
    cy.iframe('iframe[src*="pandavideo.com.br"]')
  .find('.plyr__control') // Encontrar o botão de play/pause
  .should('exist')
  .and('be.visible')
  .click()
  .should('have.class', 'plyr__control--paused');

  });
});
