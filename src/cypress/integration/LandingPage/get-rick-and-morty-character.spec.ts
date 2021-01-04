import {
  characterCountAlias,
  characterCountOperationName,
  charactersByIdAlias,
  charactersByIdOperationName,
} from 'cypress/fixtures/get-rick-and-morty-charater.mock';
import { copyContent, endpoints } from 'shared/data';

const { getCharacterButton } = copyContent.landingPage;

describe('Get Rick and Morty Character', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.intercept(endpoints.graphql, req => {
      const { operationName } = req.body;
      if (operationName === characterCountOperationName) {
        req.alias = characterCountAlias;
      }

      if (operationName === charactersByIdOperationName) {
        req.alias = charactersByIdAlias;
      }
    });
  });

  it('Should show a loading circle when the button is clicked', () => {
    cy.wait(`@${characterCountAlias}`);
    cy.findByText(getCharacterButton).click();
  });

  it("Should show the character's number, name, species, and picture", () => {
    cy.wait(`@${charactersByIdAlias}`).then(({ response }) => {
      const { id, name, species } = response?.body?.data?.charactersByIds[0];
      const expectedString = `${id} | ${name} | ${species}`;

      cy.findByText(expectedString).should('exist');
      cy.findByAltText(name).should('exist');
    });
  });
});
