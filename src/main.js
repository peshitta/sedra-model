/** @module sedra */

/**
 * Etymology records, e.g. 4:1,1:1,"a\255h\256r",5
 * Id is the position in the array so it is not stored
 *
 * @param { number } lexemeId Lexeme address, e.g. 1
 * @param { string } word Word Origin, e.g. "a\255h\256r"
 * @param { number } attributes 16-bit map
 * @returns { Etymology } Sedra Etymology row
 */
export const getEtymology = (lexemeId, word, attributes) =>
  Object.freeze(
    Object.create(null, {
      lexemeId: { value: lexemeId, enumerable: true },
      word: { value: word, enumerable: true },
      attributes: { value: attributes, enumerable: true }
    })
  );

export { getRoot, makeRootAttribute, getRootAttribute } from './root';

export {
  lexemeGrammaticalCategory,
  lexemeFirstSuffix,
  lexemeSecondSuffix,
  lexemeThirdSuffix,
  lexemePrefix,
  lexemeRadicalType,
  lexemeForm,
  getLexeme,
  makeLexemeAttribute,
  getLexemeAttribute,
  makeLexemeMorphologicalType,
  getLexemeMorphologicalType
} from './lexeme';

export {
  wordSuffixGender,
  wordSuffixPerson,
  wordSuffixNumber,
  wordSuffixType,
  wordPerson,
  wordState,
  wordTense,
  getWord,
  makeWordAttribute,
  getWordAttribute,
  makeWordMorphologicalType,
  getWordMorphologicalType
} from './word';

export {
  textPosition,
  fontType,
  verbType,
  getEnglish,
  makeEnglishAttribute,
  getEnglishAttribute
} from './english';
