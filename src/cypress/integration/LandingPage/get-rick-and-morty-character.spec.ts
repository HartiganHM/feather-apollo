import {
  characterCountAlias,
  characterCountOperationName,
  charactersByIdAlias,
  charactersByIdOperationName,
  mockCharacterData,
  mockCharacterCountResponse,
  mockCharactersByIdResponse,
  mockCharacterDescription,
} from 'cypress/fixtures/get-rick-and-morty-charater.mock';
import { copyContent, endpoints } from 'shared/data';

const { getCharacterButton } = copyContent.landingPage;

describe('Get Rick and Morty Character', () => {
  before(() => {
    cy.intercept(endpoints.graphql, req => {
      const { operationName } = req.body;
      if (operationName === characterCountOperationName) {
        req.alias = characterCountAlias;
        req.reply(res => {
          res.body = mockCharacterCountResponse;
        });
      }

      if (operationName === charactersByIdOperationName) {
        req.alias = charactersByIdAlias;
        req.reply(res => {
          res.body = mockCharactersByIdResponse;
        });
      }
    });

    cy.visit('/');

    cy.wait(`@${characterCountAlias}`);
  });

  it('Should show a loading circle when the button is clicked', () => {
    cy.findByText(getCharacterButton).click();

    cy.get('.fd-circle-loader').should('exist');
  });

  it("Should show the character's number, name, species, and picture", () => {
    cy.findByText(mockCharacterDescription).should('exist');
  });

  it('Should show a picture of the character', () => {
    const characterImage = cy.findByAltText(mockCharacterData.name);

    characterImage.should('exist');
    characterImage.should('have.attr', 'src', mockCharacterData.image);
  });
});
