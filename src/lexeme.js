/** @module sedra */
import { wordType as wt, vowel as v } from './common';

/**
 * Lexeme Grammatical Category enumeration
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
 * @const
 * @type { Array.<string> }
 */
export const lexemeSecondSuffix = Object.freeze(['', 'oTo)', 'iTto)']);

/**
 * Lexeme Third Suffix enumeration
 * @const
 * @type { Array.<string> }
 */
export const lexemeThirdSuffix = Object.freeze(['', 'wuto)', 'o)iTt']);

/**
 * Lexeme Prefix enumeration
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
 * @param { number } rootId Root Address, e.g. 2
 * @param { string } lexeme e.g. "ABA"
 * @param { number } morphologicalType 32-bit map
 * @param { number } attributes 16-bit map
 * @returns { Lexeme } Sedra Lexeme row
 */
export const getLexeme = (rootId, lexeme, morphologicalType, attributes) =>
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
 * @param { number } attributes Morphological Type 32-bit map
 * @returns { LexemeMorphologicalType } Lexeme Morphological Type object
 */
export const getLexemeMorphologicalType = attributes =>
  makeLexemeMorphologicalType(
    lexemeFirstSuffix[0xf & attributes], // 0-3 First SUFFIX
    lexemeSecondSuffix[(0x30 & attributes) >> 4], // 4-5 SECOND SUFFIX
    lexemeThirdSuffix[(0xc0 & attributes) >> 6], // 6-7 THIRD SUFFIX
    lexemePrefix[(0x300 & attributes) >> 8], // 8-9 PREFIX
    v[(0x1c00 & attributes) >> 10], // 10-12 FIRST VOWEL
    v[(0xe000 & attributes) >> 13], // 13-15 SECOND VOWEL
    v[(0x70000 & attributes) >> 16], // 16-18 THIRD VOWEL
    v[(0x380000 & attributes) >> 19], // 19-21 FOURTH VOWEL
    (0x1c00000 & attributes) >> 22, // 22-24 Total no of vowels in lexeme
    lexemeRadicalType[(0xe000000 & attributes) >> 25], // 25-27 RADICAL TYPE
    lexemeForm[(0xf0000000 & attributes) >> 28] // 28-31 FORM
  );
