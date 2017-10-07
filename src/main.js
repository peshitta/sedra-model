/** @module sedra */

/**
 * English meaning, e.g. 3:165,1:97,"cause","without","","",0,0
 * Id is the position in the array so it is not stored
 *
 * @param { number } lexemeId Lexeme address, e.g. 97
 * @param { string } word Meaning, e.g. "cause"
 * @param { string } before String before meaning, e.g. "without" (i.e. without cause)
 * @param { number } after String after meaning, e.g. ""
 * @param { number } comment Comment, e.g. ""
 * @param { number } attributes 16-bit map
 * @param { number } flag 1 bit flag
 * @returns { English } Sedra English row
 */
export const getEnglish = (
  lexemeId,
  word,
  before,
  after,
  comment,
  attributes,
  flag
) =>
  Object.freeze(
    Object.create(null, {
      lexemeId: { value: lexemeId, enumerable: true },
      word: { value: word, enumerable: true },
      before: { value: before, enumerable: true },
      after: { value: after, enumerable: true },
      comment: { value: comment, enumerable: true },
      attributes: { value: attributes, enumerable: true },
      flag: { value: flag, enumerable: true }
    })
  );

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
  wordGender,
  wordPerson,
  wordNumber,
  wordState,
  wordTense,
  wordForm,
  getWord,
  makeWordAttribute,
  getWordAttribute,
  makeWordMorphologicalType,
  getWordMorphologicalType
} from './word';
