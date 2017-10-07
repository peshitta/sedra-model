/**
 * Word Type enumeration
 * @const
 * @type { Array.<string> }
 */
export const wordType = Object.freeze([
  'Normal',
  'Parenthesized',
  'Bracketed',
  'HighFrequency' // e.g. propositions
]);

/**
 * Vowel enumeration
 * @const
 * @type { Array.<string> }
 */
export const vowel = Object.freeze(['', 'a', 'o', 'e', 'i', 'u']);

/**
 * Word Number enumeration
 * @const
 * @type { Array.<string> }
 */
export const wordNumber = Object.freeze(['', 'Singular', 'Plural']);

/**
 * Word Gender enumeration
 * @const
 * @type { Array.<string> }
 */
export const wordGender = Object.freeze([
  '',
  'Common',
  'Masculine',
  'Feminine'
]);

/**
 * Word Form enumeration
 * @const
 * @type { Array.<string> }
 */
export const wordForm = Object.freeze([
  '',
  'Peal',
  'Ethpeal',
  'Pael',
  'Ethpael',
  'Aphel',
  'Ettaphal',
  'Shaphel',
  'Eshtaphal',
  'Saphel',
  'Estaphal',
  'Pauel',
  'Ethpaual',
  'Paiel',
  'Ethpaial',
  'Palpal',
  'Ethpalpal',
  'Palpel',
  'Ethpalpal1',
  'Pamel',
  'Ethpamal',
  'Parel',
  'Ethparal',
  'Pali',
  'Ethpali',
  'Pahli',
  'Ethpahli',
  'Taphel',
  'Ethaphal'
]);
