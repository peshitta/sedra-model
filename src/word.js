import { wordGender, wordNumber, wordForm } from './common';

/**
 * Word Suffix Gender enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const wordSuffixGender = Object.freeze([
  'CommonOrNone',
  'Masculine',
  'Feminine'
]);

/**
 * Word Suffix Person enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const wordSuffixPerson = Object.freeze(['', 'Third', 'Second', 'First']);

/**
 * Word Suffix Number enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const wordSuffixNumber = Object.freeze(['SingularOrNone', 'Plural']);

/**
 * Word Suffix Type enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const wordSuffixType = Object.freeze(['', 'Suffix', 'Contraction']);

/**
 * Word Person enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const wordPerson = Object.freeze(['', 'Third', 'Second', 'First']);

/**
 * Word State enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const wordState = Object.freeze([
  '',
  'Absolute',
  'Construct',
  'Emphatic'
]);

/**
 * Word Tense enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const wordTense = Object.freeze([
  '',
  'Perfect',
  'Imperfect',
  'Imperative',
  'Infinitive',
  'ActiveParticiple',
  'PassiveParticiple',
  'Participles'
]);

/**
 * Word records, e.g. 2:8,1:2,"ABHOH;","AaB,oHaOH_;",7405716,129
 * Id is the position in the array so it is not stored
 *
 * @static
 * @param { number } lexemeId Lexeme Address, e.g. 2
 * @param { string } word Word, e.g. "ABHOH;"
 * @param { string } vocalised Vocalised Word, e.g. "AaB,oHaOH_;"
 * @param { number } morphologicalType 32-bit map
 * @param { number } attributes 16-bit map
 * @returns { Word } Sedra Word row
 */
export const makeWord = (
  lexemeId,
  word,
  vocalised,
  morphologicalType,
  attributes
) =>
  Object.freeze(
    Object.create(null, {
      lexemeId: { value: lexemeId, enumerable: true },
      word: { value: word, enumerable: true },
      vocalised: { value: vocalised, enumerable: true },
      morphologicalType: { value: morphologicalType, enumerable: true },
      attributes: { value: attributes, enumerable: true }
    })
  );

/**
 * Build Word Attribute object
 * @static
 * @param { boolean } seyame true if word has seyame
 * @param { number } listing Undocumented
 * @param { boolean } enclitic true if word has enclitics
 * @param { boolean } lexeme true if current word is lexeme
 * @returns { WordAttribute } Word Attribute object
 */
export const makeWordAttribute = (seyame, listing, enclitic, lexeme) =>
  Object.freeze(
    Object.create(null, {
      seyame: { value: seyame, enumerable: true },
      listing: { value: listing, enumerable: true }, // TODO not documented, need to figure out
      enclitic: { value: enclitic, enumerable: true },
      lexeme: { value: lexeme, enumerable: true }
    })
  );

/**
 * Get Word Attribute object from word attribute bit map
 * @static
 * @param { number } attributes 16-bit map
 * @returns { WordAttribute } Word Attribute object
 */
export const getWordAttribute = attributes =>
  makeWordAttribute(
    !!(0x1 & attributes), // 0 SEYAME FLAG
    (0x1e & attributes) >> 1, // 1-4 ignore
    !!(0x20 & attributes), // 5 ENCLITIC FLAG
    !!(0x40 & attributes) // 6 LEXEME FLAG
  );

/**
 * Build Word Morphological Type object
 * @static
 * @param { string } suffixGender Word Suffix Gender enumeration
 * @param { string } suffixPerson Word Suffix Person enumeration
 * @param { string } suffixNumber Word Suffix Number enumeration
 * @param { string } suffixType Word Suffix Type enumeration
 * @param { number } prefixCode Word Prefix Code
 * @param { string } gender Word Gender enumeration
 * @param { string } person Word Person enumeration
 * @param { string } number Word Number enumeration
 * @param { string } state Word State enumeration
 * @param { string } tense Word Tense enumeration
 * @param { string } form Word Form enumeration
 * @returns { WordMorphologicalType } Word Morphological Type object
 */
export const makeWordMorphologicalType = (
  suffixGender,
  suffixPerson,
  suffixNumber,
  suffixType,
  prefixCode,
  gender,
  person,
  number,
  state,
  tense,
  form
) =>
  Object.freeze(
    Object.create(null, {
      suffixGender: { value: suffixGender, enumerable: true },
      suffixPerson: { value: suffixPerson, enumerable: true },
      suffixNumber: { value: suffixNumber, enumerable: true },
      suffixType: { value: suffixType, enumerable: true },
      prefixCode: { value: prefixCode, enumerable: true },
      gender: { value: gender, enumerable: true },
      person: { value: person, enumerable: true },
      number: { value: number, enumerable: true },
      state: { value: state, enumerable: true },
      tense: { value: tense, enumerable: true },
      form: { value: form, enumerable: true }
    })
  );

/**
 * Get Word Morphological Type object from word bit map
 * @static
 * @param { number } attributes Morphological Type 32-bit map
 * @returns { WordMorphologicalType } Word Morphological Type object
 */
export const getWordMorphologicalType = attributes =>
  makeWordMorphologicalType(
    // 0-1 <RESERVED>
    wordSuffixGender[(0xc & attributes) >> 2], // 2-3 SUFFIX GENDER
    wordSuffixPerson[(0x30 & attributes) >> 4], // 4-5 SUFFIX PERSON
    wordSuffixNumber[(0x40 & attributes) >> 6], // 6 SUFFIX NUMBER
    wordSuffixType[(0x180 & attributes) >> 7], // 7-8 SUFFIX/CONTRACTION
    (0x7e00 & attributes) >> 9, // 9-14 PREFIX CODE
    wordGender[(0x18000 & attributes) >> 15], // 15-16 GENDER
    wordPerson[(0x60000 & attributes) >> 17], // 17-18 PERSON
    wordNumber[(0x180000 & attributes) >> 19], // 19-20 NUMBER
    wordState[(0x600000 & attributes) >> 21], // 21-22 STATE
    wordTense[(0x3800000 & attributes) >> 23], // 23-25 TENSE
    wordForm[(0xfc000000 & attributes) >> 26] // 26-31 FORM
  );

/**
 * Return flatten word object with parsed attribute and morphological values
 * @param { number } id the id of current word object
 * @param { Word } lexeme word raw object
 * @returns { FlatWord } the flatten word model
 */
export const getWord = (id, word) => {
  const attributes = getWordAttribute(word.attributes);
  const morphologicalType = getWordMorphologicalType(word.morphologicalType);
  return Object.freeze(
    Object.create(null, {
      id: { value: id, enumerable: true },
      lexemeId: { value: word.lexemeId, enumerable: true },
      word: { value: word.word, enumerable: true },
      vocalised: { value: word.vocalised, enumerable: true },
      suffixGender: { value: morphologicalType.suffixGender, enumerable: true },
      suffixPerson: { value: morphologicalType.suffixPerson, enumerable: true },
      suffixNumber: { value: morphologicalType.suffixNumber, enumerable: true },
      suffixType: { value: morphologicalType.suffixType, enumerable: true },
      prefixCode: { value: morphologicalType.prefixCode, enumerable: true },
      gender: { value: morphologicalType.gender, enumerable: true },
      person: { value: morphologicalType.person, enumerable: true },
      number: { value: morphologicalType.number, enumerable: true },
      state: { value: morphologicalType.state, enumerable: true },
      tense: { value: morphologicalType.tense, enumerable: true },
      form: { value: morphologicalType.form, enumerable: true },
      seyame: { value: attributes.seyame, enumerable: true },
      listing: { value: attributes.listing, enumerable: true },
      enclitic: { value: attributes.enclitic, enumerable: true },
      lexeme: { value: attributes.lexeme, enumerable: true }
    })
  );
};
