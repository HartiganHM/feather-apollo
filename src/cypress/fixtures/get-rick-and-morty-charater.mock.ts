import { mockCharacterData } from 'shared/mocks';

const characterCountAlias = 'characterCountQuery';
const characterCountOperationName = 'GetRickAndMortyCharacterCount';

const charactersByIdAlias = 'charactersByIdQuery';
const charactersByIdOperationName = 'GetRickAndMortyCharactersById';

const { id, name, species } = mockCharacterData;
const mockCharacterDescription = `${id} | ${name} | ${species}`;

export {
  characterCountAlias,
  characterCountOperationName,
  charactersByIdAlias,
  charactersByIdOperationName,
  mockCharacterData,
  mockCharacterDescription,
};
