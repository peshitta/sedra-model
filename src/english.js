import { wordNumber, wordGender, wordForm } from './common';

/**
 * Text position enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const textPosition = Object.freeze(['Before Meaning', 'After Meaning']);

/**
 * Font type enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const fontType = Object.freeze(['Normal', 'Italic']);

/**
 * Verb type enumeration
 * @const
 * @static
 * @type { Array.<string> }
 */
export const verbType = Object.freeze(['None', 'Transitive', 'Intransitive']);

/**
 * English meaning, e.g. 3:165,1:97,"cause","without","","",0,0
 * Id is the position in the database array so it is not stored
 *
 * @static
 * @param { number } lexemeId Lexeme address, e.g. 97
 * @param { string } word Meaning, e.g. "cause"
 * @param { string } before String before meaning, e.g. "without" (i.e. without cause)
 * @param { number } after String after meaning, e.g. ""
 * @param { number } comment Comment, e.g. ""
 * @param { number } attributes 16-bit map
 * @param { number } flag 1 bit flag
 * @returns { English } Sedra English row
 */
export const makeEnglish = (
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
 * Build English Attribute object
 * @static
 * @param { string } commentPosition Comment before or after word meaning
 * @param { string } commentFont Normal or Italic
 * @param { string } stringBeforeFont Normal or Italic string before text font
 * @param { string } stringAfterFont Normal or Italic string after text font
 * @param { string } verb None, Transitive or Intransitive
 * @param { string } number Word Number enumeration
 * @param { string } gender Word Gender enumeration
 * @param { string } form Word Form enumeration
 * @returns { EnglishAttribute } English Attribute object
 */
export const makeEnglishAttribute = (
  commentPosition,
  commentFont,
  stringBeforeFont,
  stringAfterFont,
  verb,
  number,
  gender,
  form
) =>
  Object.freeze(
    Object.create(null, {
      commentPosition: { value: commentPosition, enumerable: true },
      commentFont: { value: commentFont, enumerable: true },
      stringBeforeFont: { value: stringBeforeFont, enumerable: true },
      stringAfterFont: { value: stringAfterFont, enumerable: true },
      verbType: { value: verb, enumerable: true },
      number: { value: number, enumerable: true },
      gender: { value: gender, enumerable: true },
      form: { value: form, enumerable: true }
    })
  );

/**
* Get English Attribute object from english attribute bit map
* @static
* @param { number } attributes 16-bit map
* @returns { EnglishAttribute } English Attribute object
*/
export const getEnglishAttribute = attributes =>
  makeEnglishAttribute(
    // 0 <RESERVED>
    textPosition[(0x2 & attributes) >> 1], // 1   COMMENT POSITION
    fontType[(0x4 & attributes) >> 2], // 2   COMMENT FONT
    textPosition[(0x8 & attributes) >> 3], // 3   STRING BEFORE FONT
    textPosition[(0x10 & attributes) >> 4], // 4   STRING AFTER FONT
    verbType[(0x60 & attributes) >> 5], // 5-6 VERB TYPE
    wordNumber[(0x180 & attributes) >> 7], // 7-8  NUMBER
    wordGender[(0x600 & attributes) >> 9], // 9-10 GENDER
    wordForm[(0xf800 & attributes) >> 11] // 11-15 FORM
  );

/**
 * Return flatten english object with parsed attribute values
 * @static
 * @param { number } id the id of current english object
 * @param { English } english english raw object
 * @returns { FlatEnglish } the flatten english model
 */
export const getEnglish = (id, english) => {
  const attributes = getEnglishAttribute(english.attributes);
  return Object.freeze(
    Object.create(null, {
      id: { value: id, enumerable: true },
      lexemeId: { value: english.lexemeId, enumerable: true },
      word: { value: english.word, enumerable: true },
      before: { value: english.before, enumerable: true },
      after: { value: english.after, enumerable: true },
      comment: { value: english.comment, enumerable: true },
      commentPosition: { value: attributes.commentPosition, enumerable: true },
      commentFont: { value: attributes.commentFont, enumerable: true },
      stringBeforeFont: {
        value: attributes.stringBeforeFont,
        enumerable: true
      },
      stringAfterFont: { value: attributes.stringAfterFont, enumerable: true },
      verbType: { value: attributes.verbType, enumerable: true },
      number: { value: attributes.number, enumerable: true },
      gender: { value: attributes.gender, enumerable: true },
      form: { value: attributes.form, enumerable: true },
      flag: { value: english.flag, enumerable: true }
    })
  );
};
