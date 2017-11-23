import { wordType as wt, vowel as v } from './common';

/**
 * Lexeme Grammatical Category enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const lexemeGrammaticalCategory = Object.freeze([
  'Verb',
  'ParticipleAdjective',
  'Denominative',
  'Substantive',
  'Noun',
  'Pronoun',
  'ProperNoun',
  'Numeral',
  'Adjective',
  'Particle',
  'Idiom',
  'Adverb-)iTt',
  'AdjectiveOfPlace',
  'Adverb'
]);

/**
 * Lexeme First Suffix enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const lexemeFirstSuffix = Object.freeze([
  '',
  'to)',
  'To)',
  'no)',
  'ono)',
  'iTno)',
  'wuno)',
  'tono)',
  'twuno)',
  'wuso)',
  'oro)',
  'qono)',
  'yin'
]);

/**
 * Second Second Suffix enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const lexemeSecondSuffix = Object.freeze(['', 'oTo)', 'iTto)']);

/**
 * Lexeme Third Suffix enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const lexemeThirdSuffix = Object.freeze(['', 'wuto)', 'o)iTt']);

/**
 * Lexeme Prefix enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const lexemePrefix = Object.freeze([
  '',
  'm',
  't',
  'b' // TODO verify
]);

/**
 * Lexeme Radical Type enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const lexemeRadicalType = Object.freeze([
  '',
  'Bi',
  'Tri',
  'FourRadical',
  'FiveRadical',
  'SixRadical',
  'Compound'
]);

/**
 * Lexeme Form enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const lexemeForm = Object.freeze([
  '',
  'Ethpeal',
  'Pael',
  'Ethpael',
  'Aphel',
  'Ettaphal',
  'Shaphel',
  'Eshtaphal',
  'Saphel',
  'Estaphal',
  'P',
  'Ethp',
  'Palpel',
  'Ethpalpal'
]);

/**
 * Lexeme records, e.g. 1:2,0:2,"ABA",41960448,16
 * Id is the position in the array so it is not stored
 *
 * @static
 * @param { number } rootId Root Address, e.g. 2
 * @param { string } lexeme e.g. "ABA"
 * @param { number } morphologicalType 32-bit map
 * @param { number } attributes 16-bit map
 * @returns { Lexeme } Sedra Lexeme row
 */
export const makeLexeme = (rootId, lexeme, morphologicalType, attributes) =>
  Object.freeze(
    Object.create(null, {
      rootId: { value: rootId, enumerable: true },
      lexeme: { value: lexeme, enumerable: true },
      morphologicalType: { value: morphologicalType, enumerable: true },
      attributes: { value: attributes, enumerable: true }
    })
  );

/**
 * Build Lexeme Attribute object
 * @static
 * @param { boolean } seyame true if root has seyame
 * @param { string } wordType word type enumeration
 * @param { string } grammaticalCategory grammatical category enumeration
 * @param { boolean } listing not clear yet what this is used for
 * @returns { LexemeAttribute } Lexeme Attribute object
 */
export const makeLexemeAttribute = (
  seyame,
  wordType,
  grammaticalCategory,
  listing
) =>
  Object.freeze(
    Object.create(null, {
      seyame: { value: seyame, enumerable: true },
      wordType: { value: wordType, enumerable: true },
      grammaticalCategory: { value: grammaticalCategory, enumerable: true },
      listing: { value: listing, enumerable: true } // TODO not documented, need to figure out
    })
  );

/**
 * Get Lexeme Attribute object from lexeme attribute bit map
 * @static
 * @param { number } attributes 16-bit map
 * @returns { LexemeAttribute } Lexeme Attribute object
 */
export const getLexemeAttribute = attributes =>
  // 0  SEYAME FLAG
  // 1-2 ROOT TYPE
  // 3-15 <RESERVED>
  makeLexemeAttribute(
    !!(0x1 & attributes), // 0  SEYAME FLAG
    wt[(0x2 & attributes) >> 1], // 1    WORD TYPE
    lexemeGrammaticalCategory[(0x3c & attributes) >> 2], // 2-5 GRAMMATICAL CATEGORY
    !!(0x40 & (attributes >> 6)) // 6 ?
  );

/**
 * Build Lexeme Morphological Type object
 * @static
 * @param { string } firstSuffix First suffix enumeration
 * @param { string } secondSuffix Second suffix enumeration
 * @param { string } thirdSuffix Third suffix enumeration
 * @param { string } prefix M, T, ? enumeration
 * @param { string } firstVowel First Vowel
 * @param { string } secondVowel Second Vowel
 * @param { string } thirdVowel Third Vowel
 * @param { string } fourthVowel Forth Vowel
 * @param { number } vowelCount Total no of vowels in lexeme
 * @param { string } radicalType Radical type enumeration
 * @param { string } form Word form enumeration
 * @returns { LexemeMorphologicalType } Lexeme Morphological Type object
 */
export const makeLexemeMorphologicalType = (
  firstSuffix,
  secondSuffix,
  thirdSuffix,
  prefix,
  firstVowel,
  secondVowel,
  thirdVowel,
  fourthVowel,
  vowelCount,
  radicalType,
  form
) =>
  Object.freeze(
    Object.create(null, {
      firstSuffix: { value: firstSuffix, enumerable: true },
      secondSuffix: { value: secondSuffix, enumerable: true },
      thirdSuffix: { value: thirdSuffix, enumerable: true },
      prefix: { value: prefix, enumerable: true },
      firstVowel: { value: firstVowel, enumerable: true },
      secondVowel: { value: secondVowel, enumerable: true },
      thirdVowel: { value: thirdVowel, enumerable: true },
      fourthVowel: { value: fourthVowel, enumerable: true },
      vowelCount: { value: vowelCount, enumerable: true },
      radicalType: { value: radicalType, enumerable: true },
      form: { value: form, enumerable: true }
    })
  );

/**
 * Get Lexeme Morphological Type object from lexeme bit map
 * @static
 * @param { number } morphologicalType Morphological Type 32-bit map
 * @returns { LexemeMorphologicalType } Lexeme Morphological Type object
 */
export const getLexemeMorphologicalType = morphologicalType =>
  makeLexemeMorphologicalType(
    lexemeFirstSuffix[0xf & morphologicalType], // 0-3 First SUFFIX
    lexemeSecondSuffix[(0x30 & morphologicalType) >> 4], // 4-5 SECOND SUFFIX
    lexemeThirdSuffix[(0xc0 & morphologicalType) >> 6], // 6-7 THIRD SUFFIX
    lexemePrefix[(0x300 & morphologicalType) >> 8], // 8-9 PREFIX
    v[(0x1c00 & morphologicalType) >> 10], // 10-12 FIRST VOWEL
    v[(0xe000 & morphologicalType) >> 13], // 13-15 SECOND VOWEL
    v[(0x70000 & morphologicalType) >> 16], // 16-18 THIRD VOWEL
    v[(0x380000 & morphologicalType) >> 19], // 19-21 FOURTH VOWEL
    (0x1c00000 & morphologicalType) >> 22, // 22-24 Total no of vowels in lexeme
    lexemeRadicalType[(0xe000000 & morphologicalType) >> 25], // 25-27 RADICAL TYPE
    lexemeForm[(0xf0000000 & morphologicalType) >> 28] // 28-31 FORM
  );

/**
 * Return flatten lexeme object with parsed attribute and morphological values
 * @static
 * @param { number } id the id of current lexeme object
 * @param { Lexeme } lexeme lexeme raw object
 * @param { Array.<Root> } roots root list
 * @returns { FlatLexeme } the flatten lexeme model
 */
export const getLexeme = (id, lexeme, roots) => {
  if (lexeme) {
    const attributes = getLexemeAttribute(lexeme.attributes);
    const morphologicalType = getLexemeMorphologicalType(
      lexeme.morphologicalType
    );
    return Object.freeze(
      Object.create(null, {
        id: { value: id, enumerable: true },
        rootId: { value: lexeme.rootId, enumerable: true },
        root: {
          value:
            roots && roots[lexeme.rootId] ? roots[lexeme.rootId].root : null,
          enumerable: true
        },
        lexeme: { value: lexeme.lexeme, enumerable: true },
        firstSuffix: { value: morphologicalType.firstSuffix, enumerable: true },
        secondSuffix: {
          value: morphologicalType.secondSuffix,
          enumerable: true
        },
        thirdSuffix: { value: morphologicalType.thirdSuffix, enumerable: true },
        prefix: { value: morphologicalType.prefix, enumerable: true },
        firstVowel: { value: morphologicalType.firstVowel, enumerable: true },
        secondVowel: { value: morphologicalType.secondVowel, enumerable: true },
        thirdVowel: { value: morphologicalType.thirdVowel, enumerable: true },
        fourthVowel: { value: morphologicalType.fourthVowel, enumerable: true },
        vowelCount: { value: morphologicalType.vowelCount, enumerable: true },
        radicalType: { value: morphologicalType.radicalType, enumerable: true },
        form: { value: morphologicalType.form, enumerable: true },
        seyame: { value: attributes.seyame, enumerable: true },
        wordType: { value: attributes.wordType, enumerable: true },
        grammaticalCategory: {
          value: attributes.grammaticalCategory,
          enumerable: true
        },
        listing: { value: attributes.listing, enumerable: true }
      })
    );
  }
  return Object.freeze(
    Object.create(null, {
      id: { value: id, enumerable: true },
      rootId: { value: null, enumerable: true },
      root: { value: null, enumerable: true },
      lexeme: { value: null, enumerable: true },
      firstSuffix: { value: null, enumerable: true },
      secondSuffix: { value: null, enumerable: true },
      thirdSuffix: { value: null, enumerable: true },
      prefix: { value: null, enumerable: true },
      firstVowel: { value: null, enumerable: true },
      secondVowel: { value: null, enumerable: true },
      thirdVowel: { value: null, enumerable: true },
      fourthVowel: { value: null, enumerable: true },
      vowelCount: { value: null, enumerable: true },
      radicalType: { value: null, enumerable: true },
      form: { value: null, enumerable: true },
      seyame: { value: null, enumerable: true },
      wordType: { value: null, enumerable: true },
      grammaticalCategory: { value: null, enumerable: true },
      listing: { value: null, enumerable: true }
    })
  );
};
