/// <reference types="cypress" />

describe('Load Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Displays Welcome Message', () => {
    cy.contains('Welcome to the GSMA Mobile Money API Developer Portal');
  });
});
