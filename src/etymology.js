import { wordType } from './common';

/**
 * Etymology Language enumeration
 * @static
 * @const
 * @type { Array.<string> }
 */
export const etymologyLanguage = Object.freeze([
  'Syriac',
  'Akkadian',
  'Aramaic',
  'Arabic',
  'Armenian',
  'Greek',
  'Hebrew',
  'Latin',
  'Persian',
  'Sanskrit'
]);

/**
 * Etymology records, e.g. 4:1,1:1,"a\255h\256r",5
 * Id is the position in the array so it is not stored
 *
 * @static
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

/**
 * Build Etymology Attribute object
 * @static
 * @param { string } language true if root has seyame
 * @param { string } type word type enumeration
 * @returns { EtymologyAttribute } Etymology Attribute object
 */
export const makeEtymologyAttribute = (language, type) =>
  Object.freeze(
    Object.create(null, {
      language: { value: language, enumerable: true },
      wordType: { value: type, enumerable: true }
    })
  );

/**
* Get Etymology Attribute object from etymology attribute bit map
* @static
* @param { number } attributes 16-bit map
* @returns { EtymologyAttribute } Etymology Attribute object
*/
export const getEtymologyAttribute = attributes =>
  // 0  SEYAME FLAG
  // 1-2 ROOT TYPE
  // 3-15 <RESERVED>
  makeEtymologyAttribute(
    etymologyLanguage[0xf & attributes], // 0-3 LANGUAGE
    wordType[(0x10 & attributes) >> 4] // 4 TYPE
  );
