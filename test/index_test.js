const test = require('assert');
const sut = require('../build/sedra-model');

describe('Sedra model', () => {
  it('Make Root', () => {
    const m = sut.makeRoot('ABOBA', 'abb          |0', 2);
    test.strictEqual(m.root, 'ABOBA', 'root matching');
    test.strictEqual(m.sort, 'abb          |0', 'sort matching');
    test.strictEqual(m.attributes, 2, 'attributes matching');
  });
  it('Get Root parsed row', () => {
    let m = sut.makeRoot('AGORSA', 'acto         |0', 4);
    let a = sut.getRootAttribute(m.attributes);
    test.strictEqual(a.seyame, false, 'seyame');
    test.strictEqual(a.rootType, 'Bracketed', 'root type');
    m = sut.makeRoot('MTR;A', 'mvt          |0', 5);
    a = sut.getRootAttribute(m.attributes);
    test.strictEqual(a.seyame, true, 'seyame');
    test.strictEqual(a.rootType, 'Bracketed', 'root type');
  });
  it('Get Lexeme', () => {
    const m = sut.makeLexeme(55, 'AKOTA', 37749824, 16);
    test.strictEqual(m.rootId, 55, 'rootId matching');
    test.strictEqual(m.lexeme, 'AKOTA', 'lexeme matching');
    test.strictEqual(
      m.morphologicalType,
      37749824,
      'morphologicalType matching'
    );
    test.strictEqual(m.attributes, 16, 'attributes matching');
  });
  it('Get Lexeme attribute', () => {
    const m = sut.makeLexeme(55, 'AKOTA', 37749824, 16);
    const a = sut.getLexemeAttribute(m.attributes);
    test.strictEqual(a.seyame, false, 'seyame');
    test.strictEqual(a.wordType, 'Normal', 'wordType');
    test.strictEqual(a.grammaticalCategory, 'Noun', 'grammaticalCategory');
    test.strictEqual(a.listing, false, 'listing');
  });
  it('Get Lexeme MorphologicalType', () => {
    const m = sut.makeLexeme(55, 'AKOTA', 37749824, 16);
    const a = sut.getLexemeMorphologicalType(m.morphologicalType);
    test.strictEqual(a.firstSuffix, '', 'firstSuffix');
    test.strictEqual(a.secondSuffix, '', 'secondSuffix');
    test.strictEqual(a.thirdSuffix, 'wuto)', 'thirdSuffix');
    test.strictEqual(a.prefix, '', 'prefix');
    test.strictEqual(a.firstVowel, 'a', 'firstVowel');
    test.strictEqual(a.secondVowel, '', 'secondVowel');

    test.strictEqual(a.thirdVowel, '', 'thirdVowel');
    test.strictEqual(a.fourthVowel, '', 'fourthVowel');
    test.strictEqual(a.vowelCount, 1, 'vowelCount');
    test.strictEqual(a.radicalType, 'Bi', 'radicalType');
    test.strictEqual(a.form, '', 'form');
  });
  it('Get Word', () => {
    const m = sut.makeWord(55, 'MOBDO', "MaOB'oD,uO", 369098752, 128);
    test.strictEqual(m.lexemeId, 55, 'lexemeId matching');
    test.strictEqual(m.word, 'MOBDO', 'word matching');
    test.strictEqual(m.vocalised, "MaOB'oD,uO", 'vocalised matching');
    test.strictEqual(
      m.morphologicalType,
      369098752,
      'morphologicalType matching'
    );
    test.strictEqual(m.attributes, 128, 'attributes matching');
  });
  it('Get Word Attributes', () => {
    const m = sut.makeWord(55, 'MOBDO', "MaOB'oD,uO", 369098752, 128);
    const a = sut.getWordAttribute(m.attributes);
    test.strictEqual(a.seyame, false, 'seyame');
    test.strictEqual(a.listing, 0, 'listing');
    test.strictEqual(a.enclitic, false, 'enclitic');
    test.strictEqual(a.lexeme, false, 'lexeme');
  });
  it('Get Word MorphologicalType', () => {
    const m = sut.makeWord(55, 'MOBDO', "MaOB'oD,uO", 369098752, 128);
    const a = sut.getWordMorphologicalType(m.morphologicalType);
    test.strictEqual(a.suffixGender, 'CommonOrNone', 'suffixGender');
    test.strictEqual(a.suffixPerson, '', 'suffixPerson');
    test.strictEqual(a.suffixNumber, 'SingularOrNone', 'suffixNumber');
    test.strictEqual(a.suffixType, '', 'suffixType');
    test.strictEqual(a.prefixCode, 0, 'prefixCode');
    test.strictEqual(a.gender, '', 'gender');

    test.strictEqual(a.person, '', 'person');
    test.strictEqual(a.number, '', 'number');
    test.strictEqual(a.state, '', 'state');
    test.strictEqual(a.tense, 'Infinitive', 'tense');
    test.strictEqual(a.form, 'Aphel', 'form');
  });
  it('Get English', () => {
    const m = sut.makeEnglish(
      71,
      'kindle',
      'make',
      '(in Egypt)',
      'w/ &NuORoA& ',
      10240,
      1
    );
    test.strictEqual(m.lexemeId, 71, 'lexemeId matching');
    test.strictEqual(m.word, 'kindle', 'word matching');
    test.strictEqual(m.before, 'make', 'before matching');
    test.strictEqual(m.after, '(in Egypt)', 'after matching');
    test.strictEqual(m.comment, 'w/ &NuORoA& ', 'comment matching');
    test.strictEqual(m.attributes, 10240, 'attributes matching');
    test.strictEqual(m.flag, 1, 'flag matching');
  });
  it('Get English Attributes', () => {
    const m = sut.makeEnglish(
      71,
      'kindle',
      'make',
      '(in Egypt)',
      'w/ &NuORoA& ',
      10240,
      1
    );
    const a = sut.getEnglishAttribute(m.attributes);
    test.strictEqual(a.commentPosition, 'Before Meaning', 'commentPosition');
    test.strictEqual(a.commentFont, 'Normal', 'commentFont');
    test.strictEqual(a.stringBeforeFont, 'Before Meaning', 'stringBeforeFont');
    test.strictEqual(a.stringAfterFont, 'Before Meaning', 'stringAfterFont');
    test.strictEqual(a.verbType, 'None', 'verbType');
    test.strictEqual(a.number, '', 'number');
    test.strictEqual(a.gender, '', 'gender');
    test.strictEqual(a.form, 'Aphel', 'form');
  });
  it('Get Etymology', () => {
    const m = sut.makeEtymology(46, 'eu\\255jaristi\\256a', 5);
    test.strictEqual(m.lexemeId, 46, 'lexemeId matching');
    test.strictEqual(m.word, 'eu\\255jaristi\\256a', 'word matching');
    test.strictEqual(m.attributes, 5, 'attributes matching');
  });
  it('Get Etymology Attributes', () => {
    const m = sut.makeEtymology(46, 'eu\\255jaristi\\256a', 5);
    const a = sut.getEtymologyAttribute(m.attributes);
    test.strictEqual(a.language, 'Greek', 'language');
    test.strictEqual(a.wordType, 'Normal', 'wordType');
  });
  it('Make Book', () => {
    const m = sut.makeBook(59, 62, 'b. qwr*ynty)', 'b. qwUr*yint,oye)', [
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
    ]);
    test.strictEqual(m.englishName, '2 Corinthians', 'englishName');
    test.strictEqual(m.englishShortName, '2Cor', 'englishShortName');
    test.strictEqual(m.id, 59, 'id');
    test.strictEqual(m.peshittaId, 62, 'peshittaId');
  });
  it('Peshitta Books', () => {
    const m = sut.peshittaBooks;
    test.strictEqual(m[57].englishName, 'James', 'englishName');
  });
  it('Get Book', () => {
    const m = sut.getBook(77);
    test.strictEqual(m.englishName, 'Jude', 'getBook');
  });
  it('Make Group Book', () => {
    const m = sut.makeBookGroup(
      'western',
      'Western Five',
      Object.freeze(sut.peshittaBooks.slice(74, 79))
    );
    test.strictEqual(m.name, 'Western Five', 'makeBookGroup');
  });
});
