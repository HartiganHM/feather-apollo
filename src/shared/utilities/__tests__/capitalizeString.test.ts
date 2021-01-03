import capitalizeString from '../capitalizeString';

describe('capitalizeString Tests', () => {
  it('Should return a single word string with a capital letter', () => {
    const expected = 'Feather';

    const capitalizedWord = capitalizeString('feather');

    expect(capitalizedWord).toEqual(expected);
  });

  it('Should return a multi-word string with all words capitalized', () => {
    const expected = 'Featherweight Design === Pretty Neat';

    const capitalizedSentence = capitalizeString(
      'featherweight design === pretty neat'
    );

    expect(capitalizedSentence).toEqual(expected);
  });
});
