/** @module sedra */

/**
 * Root records, e.g. 0:2,"AB","ab           |A",0
 * Id is the position in the array so it is not stored
 *
 * @param { string } root e.g. "AB"
 * @param { string } sort e.g. "ab          |A"
 * @param { number } attributes 16-bit map
 */
export const getRoot = (root, sort, attributes) =>
  Object.freeze(
    Object.create(null, {
      root: { value: root, enumerable: true },
      sort: { value: sort, enumerable: true },
      attributes: { value: attributes, enumerable: true }
    })
  );

/**
 * Lexeme records, e.g. 1:2,0:2,"ABA",41960448,16
 * Id is the position in the array so it is not stored
 *
 * @param { number } rootId Root Address, e.g. 2
 * @param { string } lexeme e.g. "ABA"
 * @param { number } morphologicalType 32-bit map
 * @param { number } attributes 16-bit map
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
 * Word records, e.g. 2:8,1:2,"ABHOH;","AaB,oHaOH_;",7405716,129
 * Id is the position in the array so it is not stored
 *
 * @param { number } lexemeId Lexeme Address, e.g. 2
 * @param { string } word Word, e.g. "ABHOH;"
 * @param { string } vocalised Vocalised Word, e.g. "AaB,oHaOH_;"
 * @param { number } morphologicalType 32-bit map
 * @param { number } attributes 16-bit map
 */
export const getWord = (
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
 */
export const getEtymology = (lexemeId, word, attributes) =>
  Object.freeze(
    Object.create(null, {
      lexemeId: { value: lexemeId, enumerable: true },
      word: { value: word, enumerable: true },
      attributes: { value: attributes, enumerable: true }
    })
  );
