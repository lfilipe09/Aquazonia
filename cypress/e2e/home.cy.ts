/// <reference path="../support/index.d.ts" />

describe('empty spec', () => {
  it('should scroll as you click', () => {
    //visitar a página
    //A barra acessa o baseURl configurado no cypress.json
    cy.visit('/')
    cy.wait(3000)
    cy.get('[data-testid="hamburger-menu-button"]').click()
    cy.wait(3000)
    cy.get('[data-testid="link-menu"] > ul > [href="/#intensity-aquazonia"] > li > p').click()
    cy.wait(3000)
    cy.get('#intensity-aquazonia > .styles_section___YU5L > .styles_text-content__section__5DDdb > h2')
  })

  it('should open secondary menu', () => {
    //visitar a página
    //A barra acessa o baseURl configurado no cypress.json
    cy.visit('/')
    cy.wait(3000)
    cy.get('[data-testid="hamburger-menu-button"]').click()
    cy.wait(3000)
    cy.get('ul > button.styles_link__kb7Tl > span').click()
    cy.wait(3000)
    cy.get('ul > :nth-child(1) > a')
  })
})
