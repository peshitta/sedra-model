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
  it('Get Flatten Root', () => {
    let m = sut.makeRoot('AGORSA', 'acto         |0', 4);
    let a = sut.getRootAttribute(m.attributes);
    let f = sut.getRoot(1, m);
    test.strictEqual(m.root, f.root, 'root matching');
    test.strictEqual(m.sort, f.sort, 'sort matching');
    test.strictEqual(a.seyame, f.seyame, 'seyame');
    test.strictEqual(a.rootType, f.rootType, 'Bracketed', 'root type');
    m = sut.makeRoot('MTR;A', 'mvt          |0', 5);
    a = sut.getRootAttribute(m.attributes);
    f = sut.getRoot(1, m);
    test.strictEqual(a.seyame, f.seyame, 'seyame');
    test.strictEqual(a.rootType, f.rootType, 'root type');
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
  it('Get Flat Lexeme', () => {
    const m = sut.makeLexeme(55, 'AKOTA', 37749824, 16);
    const a = sut.getLexemeAttribute(m.attributes);
    const f = sut.getLexeme(2, m);
    test.strictEqual(m.rootId, f.rootId, 'rootId matching');
    test.strictEqual(m.lexeme, f.lexeme, 'lexeme matching');
    test.strictEqual(2, f.id, 'id matching');

    test.strictEqual(a.seyame, f.seyame, 'seyame');
    test.strictEqual(a.wordType, f.wordType, 'wordType');
    test.strictEqual(
      a.grammaticalCategory,
      f.grammaticalCategory,
      'grammaticalCategory'
    );
    test.strictEqual(a.listing, f.listing, 'listing');

    const t = sut.getLexemeMorphologicalType(m.morphologicalType);
    test.strictEqual(t.firstSuffix, f.firstSuffix, 'firstSuffix');
    test.strictEqual(t.secondSuffix, f.secondSuffix, 'secondSuffix');
    test.strictEqual(t.thirdSuffix, f.thirdSuffix, 'thirdSuffix');
    test.strictEqual(t.prefix, f.prefix, 'prefix');
    test.strictEqual(t.firstVowel, f.firstVowel, 'firstVowel');
    test.strictEqual(t.secondVowel, f.secondVowel, 'secondVowel');

    test.strictEqual(t.thirdVowel, f.thirdVowel, 'thirdVowel');
    test.strictEqual(t.fourthVowel, f.fourthVowel, 'fourthVowel');
    test.strictEqual(t.vowelCount, f.vowelCount, 'vowelCount');
    test.strictEqual(t.radicalType, f.radicalType, 'radicalType');
    test.strictEqual(t.form, f.form, 'form');
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
  it('Get Flatten Word', () => {
    const m = sut.makeWord(55, 'MOBDO', "MaOB'oD,uO", 369098752, 128);
    const a = sut.getWordAttribute(m.attributes);
    const t = sut.getWordMorphologicalType(m.morphologicalType);
    const f = sut.getWord(3, m);

    test.strictEqual(m.lexemeId, f.lexemeId, 'lexemeId matching');
    test.strictEqual(m.word, f.word, 'word matching');
    test.strictEqual(m.vocalised, f.vocalised, 'vocalised matching');
    test.strictEqual(3, f.id, 'id matching');

    test.strictEqual(a.seyame, f.seyame, 'seyame');
    test.strictEqual(a.listing, f.listing, 'listing');
    test.strictEqual(a.enclitic, f.enclitic, 'enclitic');
    test.strictEqual(a.lexeme, f.lexeme, 'lexeme');

    test.strictEqual(t.suffixGender, f.suffixGender, 'suffixGender');
    test.strictEqual(t.suffixPerson, f.suffixPerson, 'suffixPerson');
    test.strictEqual(t.suffixNumber, f.suffixNumber, 'suffixNumber');
    test.strictEqual(t.suffixType, f.suffixType, 'suffixType');
    test.strictEqual(t.prefixCode, f.prefixCode, 'prefixCode');
    test.strictEqual(t.gender, f.gender, 'gender');

    test.strictEqual(t.person, f.person, 'person');
    test.strictEqual(t.number, f.number, 'number');
    test.strictEqual(t.state, f.state, 'state');
    test.strictEqual(t.tense, f.tense, 'tense');
    test.strictEqual(t.form, f.form, 'form');
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
  it('Get Flat English', () => {
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
    const f = sut.getEnglish(5, m);

    test.strictEqual(m.lexemeId, f.lexemeId, 'lexemeId matching');
    test.strictEqual(m.word, f.word, 'word matching');
    test.strictEqual(m.before, f.before, 'before matching');
    test.strictEqual(m.after, f.after, 'after matching');
    test.strictEqual(m.comment, f.comment, 'comment matching');
    test.strictEqual(5, f.id, 'attributes matching');
    test.strictEqual(m.flag, f.flag, 'flag matching');

    test.strictEqual(a.commentPosition, f.commentPosition, 'commentPosition');
    test.strictEqual(a.commentFont, f.commentFont, 'commentFont');
    test.strictEqual(
      a.stringBeforeFont,
      f.stringBeforeFont,
      'stringBeforeFont'
    );
    test.strictEqual(a.stringAfterFont, f.stringAfterFont, 'stringAfterFont');
    test.strictEqual(a.verbType, f.verbType, 'verbType');
    test.strictEqual(a.number, f.number, 'number');
    test.strictEqual(a.gender, f.gender, 'gender');
    test.strictEqual(a.form, f.form, 'form');
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
  it('Get Etymology', () => {
    const m = sut.makeEtymology(46, 'eu\\255jaristi\\256a', 5);
    const a = sut.getEtymologyAttribute(m.attributes);
    const f = sut.getEtymology(3, m);
    test.strictEqual(m.lexemeId, f.lexemeId, 'lexemeId matching');
    test.strictEqual(m.word, f.word, 'word matching');
    test.strictEqual(3, f.id, 'attributes matching');

    test.strictEqual(a.language, f.language, 'language');
    test.strictEqual(a.wordType, f.wordType, 'wordType');
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
