import { wordType } from './common';

/**
 * Root records, e.g. 0:2,"AB","ab           |A",0
 * Id is the position in the containing array so it is not stored
 *
 * @static
 * @param { string } root e.g. "AB"
 * @param { string } sort e.g. "ab          |A"
 * @param { number } attributes 16-bit map
 * @returns { Root } Sedra Root row
 */
export const makeRoot = (root, sort, attributes) =>
  Object.freeze(
    Object.create(null, {
      root: { value: root, enumerable: true },
      sort: { value: sort, enumerable: true },
      attributes: { value: attributes, enumerable: true }
    })
  );

/**
 * Build Root Attribute object
 * @static
 * @param { boolean } seyame true if root has seyame
 * @param { string } rootType word type enumeration
 * @returns { RootAttribute } Root Attribute object
 */
export const makeRootAttribute = (seyame, rootType) =>
  Object.freeze(
    Object.create(null, {
      seyame: { value: seyame, enumerable: true },
      rootType: { value: rootType, enumerable: true }
    })
  );

/**
 * Get Root Attribute object from root attribute bit map
 * @static
 * @param { number } attributes 16-bit map
 * @returns { RootAttribute } Root Attribute object
 */
export const getRootAttribute = attributes =>
  // 0  SEYAME FLAG
  // 1-2 ROOT TYPE
  // 3-15 <RESERVED>
  makeRootAttribute(
    !!(0x1 & attributes), // 0  SEYAME FLAG
    wordType[(0x6 & attributes) >> 1] // 1-2 ROOT TYPE
  );

/**
 * Return flatten root object with parsed attribute values
 * @static
 * @param { number } id the id of current root object
 * @param { Root } root root raw object
 * @returns { FlatRoot } the flatten root model
 */
export const getRoot = (id, root) => {
  if (root) {
    const attributes = getRootAttribute(root.attributes);
    return Object.freeze(
      Object.create(null, {
        id: { value: id, enumerable: true },
        root: { value: root.root, enumerable: true },
        sort: { value: root.sort, enumerable: true },
        seyame: { value: attributes.seyame, enumerable: true },
        rootType: { value: attributes.rootType, enumerable: true }
      })
    );
  }
  return Object.freeze(
    Object.create(null, {
      id: { value: id, enumerable: true },
      root: { value: null, enumerable: true },
      sort: { value: null, enumerable: true },
      seyame: { value: null, enumerable: true },
      rootType: { value: null, enumerable: true }
    })
  );
};
