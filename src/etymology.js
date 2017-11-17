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
export const makeEtymology = (lexemeId, word, attributes) =>
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

/**
 * Return flatten etymology object with parsed attribute values
 * @static
 * @param { number } id the id of current etymology object
 * @param { Etymology } etymology etymology raw object
 * @returns { FlatEtymology } the flatten etymology model
 */
export const getEtymology = (id, etymology) => {
  if (etymology) {
    const attributes = getEtymologyAttribute(etymology.attributes);
    return Object.freeze(
      Object.create(null, {
        id: { value: id, enumerable: true },
        lexemeId: { value: etymology.lexemeId, enumerable: true },
        word: { value: etymology.word, enumerable: true },
        language: { value: attributes.language, enumerable: true },
        wordType: { value: attributes.wordType, enumerable: true }
      })
    );
  }
  return Object.freeze(
    Object.create(null, {
      id: { value: id, enumerable: true },
      lexemeId: { value: null, enumerable: true },
      word: { value: null, enumerable: true },
      language: { value: null, enumerable: true },
      wordType: { value: null, enumerable: true }
    })
  );
};
