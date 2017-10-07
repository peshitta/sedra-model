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

export {
  etymologyLanguage,
  getEtymology,
  makeEtymologyAttribute,
  getEtymologyAttribute
} from './etymology';
