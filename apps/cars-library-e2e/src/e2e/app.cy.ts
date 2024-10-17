import { getGreeting } from '../support/app.po';

describe('cars-library-e2e', () => {
  it('created cars should appear on list', () => {
    cy.visit('/');
    cy.get('[data-cy=AddCar]').click();
    cy.get('[data-cy=Brand]').select('BMW');
    cy.get('[data-cy=Model]').type('Some random model name');
    cy.get('[data-cy=Submit]').click();
    cy.get('[data-cy=List]').should('be.visible');
    cy.get('[data-cy=Row]').eq(0).should('contain.text', 'BMW');
    cy.get('[data-cy=Row]')
      .eq(0)
      .should('contain.text', 'Some random model name');
  });
});
