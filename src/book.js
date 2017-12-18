const bookPrototype = Object.freeze(
  Object.create(null, {
    /**
     * Get book full English name
     * @alias module:sedraModel.Book#englishName
     * @returns { string } English full name
     */
    englishName: {
      enumerable: true,
      get() {
        return this.english[0];
      }
    },
    /**
     * Get book first abbreviated English name
     * @alias module:sedraModel.Book#englishShortName
     * @returns { string } English abbreviated name
     */
    englishShortName: {
      enumerable: true,
      get() {
        return this.english[1];
      }
    }
  })
);

/**
 * Build a Book object
 * @static
 * @param { number } id Book Id
 * @param { number } peshittaId Book Eastern Peshitta Id
 * @param { string } name Book Aramaic name
 * @param { string } vocalised Book vocalised Aramaic name
 * @param { Array.<string> } english Book English names: full name followed by abbreviations
 * @return { Book } Book object
 */
export const makeBook = (id, peshittaId, name, vocalised, english) =>
  Object.freeze(
    Object.create(bookPrototype, {
      id: { value: id, enumerable: true },
      peshittaId: { value: peshittaId, enumerable: true },
      name: { value: name, enumerable: true },
      vocalised: { value: vocalised, enumerable: true },
      english: { value: english, enumerable: true }
    })
  );

const m = makeBook;
/**
 * Peshitta books
 * @static
 * @const
 * @type { Array.<string> }
 */
export const books = [
  m(0, 0, '', '', ['Old Testament', 'OT']),
  m(1, 0, '', '', []),
  m(2, 0, '', '', []),
  m(3, 0, '', '', []),
  m(4, 0, '', '', []),
  m(5, 0, '', '', []),
  m(6, 0, '', '', []),
  m(7, 0, '', '', []),
  m(8, 0, '', '', []),
  m(9, 0, '', '', []),
  m(10, 0, '', '', []),
  m(11, 0, '', '', []),
  m(12, 0, '', '', []),
  m(13, 0, '', '', []),
  m(14, 0, '', '', []),
  m(15, 0, '', '', []),
  m(16, 0, '', '', []),
  m(17, 0, '', '', []),
  m(18, 0, '', '', []),
  m(19, 0, '', '', []),
  m(20, 0, '', '', []),
  m(21, 0, '', '', []),
  m(22, 0, '', '', []),
  m(23, 0, '', '', []),
  m(24, 0, '', '', []),
  m(25, 0, '', '', []),
  m(26, 0, '', '', []),
  m(27, 0, '', '', []),
  m(28, 0, '', '', []),
  m(29, 0, '', '', []),
  m(30, 0, '', '', []),
  m(31, 0, '', '', []),
  m(32, 0, '', '', []),
  m(33, 0, '', '', []),
  m(34, 0, '', '', []),
  m(35, 0, '', '', []),
  m(36, 0, '', '', []),
  m(37, 0, '', '', []),
  m(38, 0, '', '', []),
  m(39, 0, '', '', []),
  m(40, 0, '', '', []),
  m(41, 0, '', '', []),
  m(42, 0, '', '', []),
  m(43, 0, '', '', []),
  m(44, 0, '', '', []),
  m(45, 0, '', '', []),
  m(46, 0, '', '', []),
  m(47, 0, '', '', []),
  m(48, 0, '', '', []),
  m(49, 0, '', '', []),
  m(50, 50, '', '', []),
  m(51, 51, '', '', ['New Testament', 'NT']),
  m(52, 52, 'mty', "mat'ay", ['Matthew', 'Mt', 'Matt']),
  m(53, 53, 'mrqws', 'marqwUs', ['Mark', 'Mk', 'Mrk', 'Mr']),
  m(54, 54, 'lwq)', 'lwuqo)', ['Luke', 'Lk', 'Luk']),
  m(55, 55, 'ywxnn', 'ywuxanon', ['John', 'Jn', 'Jhn']),
  m(56, 56, 'prksys', 'praksyis', ['Acts of the Apostles', 'Acts', 'Ac']),
  m(57, 60, 'r*hwmy)', 'r*h_wumoye)', ['Romans', 'Rom', 'Ro', 'Rm']),
  m(58, 61, '). qwr*ynty)', '). qwUr*yint,oye)', [
    '1 Corinthians',
    '1Cor',
    '1 Cor',
    '1 Co',
    '1 Co',
    'I Co',
    '1Co',
    'I Cor',
    'I Corinthians',
    '1Corinthians',
    '1st Corinthians',
    'First Corinthians'
  ]),
  m(59, 62, 'b. qwr*ynty)', 'b. qwUr*yint,oye)', [
    '2 Corinthians',
    '2Cor',
    '2 Cor',
    '2 Co',
    'II Co',
    '2Co',
    'II Cor',
    'II Corinthians',
    '2Corinthians',
    '2nd Corinthians',
    'Second Corinthians'
  ]),
  m(60, 63, 'glTy*)', 'goloToy*e)', ['Galatians', 'Gal', 'Ga']),
  m(61, 64, ')psy*)', ')epEsy*e)', ['Ephesians', 'Eph', 'Ephes']),
  m(62, 65, 'pylypsy*)', 'pyilyipEsoy*e)', ['Philippians', 'Phil', 'Php']),
  m(63, 66, 'qwl*sy)', 'qwl*sy)', ['Colossians', 'Col']),
  m(64, 67, '). tsl*wnyqy)', "). t'esol*wUnyiqoye)", [
    '1 Thessalonians',
    '1Thes',
    '1 Thes',
    '1 Thess',
    '1 Th',
    'I Th',
    '1Th',
    'I Thes',
    'I Thess',
    '1Thess',
    'I Thessalonians',
    '1Thessalonians',
    '1st Thessalonians',
    'First Thessalonians'
  ]),
  m(65, 68, 'b. tsl*wnyqy)', "b. t'esol*wUnyiqoye)", [
    '2 Thessalonians',
    '2Thes',
    '2 Thes',
    '2 Thess',
    '2 Th',
    'II Th',
    '2Th',
    'II Thes',
    'II Thess',
    '2Thess',
    'II Thessalonians',
    '2Thessalonians',
    '2nd Thessalonians',
    'Second Thessalonians'
  ]),
  m(66, 69, '). Tymt)ws', '). Tyimote)wUs', [
    '1 Timothy',
    '1Tim',
    '1 Tim',
    '1 Ti',
    'I Ti',
    '1Ti',
    'I Tim',
    'I Timothy',
    '1Timothy',
    '1st Timothy',
    'First Timothy'
  ]),
  m(67, 70, 'b. Tymt)ws', 'b. Tyimote)wUs', [
    '2 Timothy',
    '2Tim',
    '2 Tim',
    '2 Ti',
    'II Ti',
    '2Ti',
    'II Tim',
    'II Timothy',
    '2Timothy',
    '2nd Timothy',
    'Second Timothy'
  ]),
  m(68, 71, 'TTws', 'TETwUs', ['Titus', 'Tit']),
  m(69, 72, 'pylmwn', 'pyilemwUn', ['Philemon', 'Philem', 'Phm']),
  m(70, 73, '(br*y)', '(eb,r*oye)', ['Hebrews', 'Heb']),
  m(71, 57, 'y(qwb', 'ya(qwUb,', ['James', 'Jas', 'Jm']),
  m(72, 58, '). k)p)', "). k'e)p,o)", [
    '1 Peter',
    '1Pet',
    '1 Pet',
    '1 Pe',
    'I Pe',
    '1Pe',
    'I Pet',
    'I Pt',
    '1 Pt',
    '1Pt',
    'I Peter',
    '1Peter',
    '1st Peter',
    'First Peter'
  ]),
  m(73, 74, 'b. k)p)', "b. k'e)p,o)", [
    '2 Peter',
    '2Pet',
    '2 Pet',
    '2 Pe',
    'II Pe',
    '2Pe',
    'II Pet',
    'II Pt',
    '2 Pt',
    '2Pt',
    'II Peter',
    '2Peter',
    '2nd Peter',
    'Second Peter'
  ]),
  m(74, 59, '). ywxnn', '). ywuxanon', [
    '1 John',
    '1Jn',
    '1 Jn',
    'I Jn',
    'I Jo',
    '1Jo',
    'I Joh',
    '1Joh',
    'I Jhn',
    '1 Jhn',
    '1Jhn',
    'I John',
    '1John',
    '1st John',
    'First John'
  ]),
  m(75, 75, 'b. ywxnn', 'b. ywuxanon', [
    '2 John',
    '2Jn',
    '2 Jn',
    'II Jn',
    'II Jo',
    '2Jo',
    'II Joh',
    '2Joh',
    'II Jhn',
    '2 Jhn',
    '2Jhn',
    'II John',
    '2John',
    '2nd John',
    'Second John'
  ]),
  m(76, 76, 'g. ywxnn', 'g. ywuxanon', [
    '3 John',
    '3Jn',
    '3 Jn',
    'III Jn',
    'III Jo',
    '3Jo',
    'III Joh',
    '3Joh',
    'III Jhn',
    '3 Jhn',
    '3Jhn',
    'III John',
    '3John',
    '3rd John',
    'Third John'
  ]),
  m(77, 77, 'yhwd)', 'yihwudo)', ['Jude', 'Jude', 'Jud']),
  m(78, 78, 'glyn)', "g'Elyono)", [
    'Revelation',
    'Rev',
    'Re',
    'The Revelation',
    'Apocalypse',
    'Apoc'
  ])
];

/**
 * Callback to sort books by Eastern Peshitta ordering
 * @static
 * @param { Book } a a book
 * @param { Book } b another book
 * @returns { number } sort order
 */
export const sorter = (a, b) => a.peshittaId - b.peshittaId;

/**
 * Peshitta books sorted according to Eastern Peshitta ordering
 * @static
 * @const
 * @type { Array.<Book> }
 */
export const peshittaBooks = books.slice(0).sort(sorter);
Object.freeze(books);

/**
 * Get book record with the given id from books array
 * @static
 * @param { number } id Book id
 * @returns { Book } Book object from books array
 */
export const getBook = id => books[id];

/**
 * Build a BookGroup object - a grouping of Peshitta books
 * @static
 * @param { number|string } id Book Group assigned Id
 * @param { string } name Book Group name
 * @param { Array.<Book> } bookSet Book subset from books array
 * @returns { BookGroup } A Book Group object
 */
export const makeBookGroup = (id, name, bookSet) =>
  Object.freeze(
    Object.create(null, {
      id: { value: id, enumerable: true },
      name: { value: name, enumerable: true },
      books: { value: bookSet, enumerable: true }
    })
  );

/**
 * Eastern New Testament Peshitta book groups
 * @static
 * @const
 * @type { Object }
 */
export const bookGroups = Object.freeze(
  Object.create(null, {
    gospels: makeBookGroup(
      'gospels',
      'Gospels',
      Object.freeze(peshittaBooks.slice(52, 56))
    ),
    general: makeBookGroup(
      'general',
      'General',
      Object.freeze(peshittaBooks.slice(56, 60))
    ),
    paulines: makeBookGroup(
      'paulines',
      'Paulines',
      Object.freeze(peshittaBooks.slice(60, 74))
    ),
    western: makeBookGroup(
      'western',
      'Western Five',
      Object.freeze(peshittaBooks.slice(74, 79))
    )
  })
);

/**
 * Get a verse by its index inside the whole of NT Peshitta
 * @static
 * @param { number } index verse index overall NT Peshitta
 * @param { object } ubs NT Peshitta object hash
 * @returns { object } a hash with verse content, verse, chapter and book number
 */
export const getVerseByIndex = (index, ubs) => {
  const firstBook = 52;
  const lastBook = firstBook + (ubs.books - 1);
  for (let book = firstBook; book <= lastBook; book++) {
    const b = ubs[book];
    if (index >= b.rollupVerses && index <= b.rollupVerses + b.verses) {
      for (let chapter = 1; chapter <= b.chapters; chapter++) {
        const c = ubs[book][chapter];
        if (index >= c.rollupVerses && index <= c.rollupVerses + c.verses) {
          const verse = index - c.rollupVerses;
          return Object.freeze(
            Object.create(null, {
              content: { value: c[verse], enumerable: true },
              verse: { value: verse, enumerable: true },
              chapter: { value: chapter, enumerable: true },
              book: { value: book, enumerable: true },
              rollupBooks: { value: b.rollupBooks, enumerable: true },
              rollupChapters: { value: c.rollupChapters, enumerable: true },
              rollupVerses: { value: c.rollupVerses, enumerable: true },
              rollupWords: { value: c.rollupWords, enumerable: true }
            })
          );
        }
      }
    }
  }
  return null;
};
