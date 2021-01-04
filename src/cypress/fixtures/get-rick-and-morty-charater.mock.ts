const characterCountAlias = 'characterCountQuery';
const characterCountOperationName = 'GetRickAndMortyCharacterCount';

const charactersByIdAlias = 'charactersByIdQuery';
const charactersByIdOperationName = 'GetRickAndMortyCharactersById';

const mockCharacterCountResponse = {
  data: { characters: { info: { count: 1 } } },
};

const mockCharacterData = {
  id: '1',
  name: 'Rick Sanchez',
  species: 'Human',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

const mockCharactersByIdResponse = {
  data: {
    charactersByIds: [mockCharacterData],
  },
};

const { id, name, species } = mockCharacterData;
const mockCharacterDescription = `${id} | ${name} | ${species}`;

export {
  characterCountAlias,
  characterCountOperationName,
  charactersByIdAlias,
  charactersByIdOperationName,
  mockCharacterData,
  mockCharacterCountResponse,
  mockCharactersByIdResponse,
  mockCharacterDescription,
};
