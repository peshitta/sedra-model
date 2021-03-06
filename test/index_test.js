const test = require('assert');
const sut = require('../build/sedra-model');

describe('Sedra model', () => {
  const ubs = {
    52: {
      1: {
        1: [10762, 9144, 9568, 12523, 3245, 4227, 3245, 167],
        2: [165, 9084, 696, 690, 9084, 9371, 9370, 9084, 8941, 432],
        verses: 2,
        words: 18,
        rollupChapters: 0,
        rollupVerses: 0,
        rollupWords: 0
      },
      2: {
        1: [10762, 9144, 9568, 12523, 3245, 4227, 3245, 167],
        2: [165, 9084, 696, 690, 9084, 9371, 9370, 9084, 8941, 432],
        verses: 2,
        words: 18,
        rollupChapters: 1,
        rollupVerses: 2,
        rollupWords: 18
      },
      chapters: 2,
      verses: 4,
      words: 36,
      rollupBooks: 0,
      rollupChapters: 0,
      rollupVerses: 0,
      rollupWords: 0
    },
    53: {
      1: {
        1: [19959, 283, 9568, 12523, 3245, 914],
        verses: 1,
        words: 6,
        rollupChapters: 2,
        rollupVerses: 4,
        rollupWords: 36
      },
      chapters: 1,
      verses: 1,
      words: 6,
      rollupBooks: 1,
      rollupChapters: 2,
      rollupVerses: 4,
      rollupWords: 36
    },
    books: 2,
    chapters: 3,
    verses: 5,
    words: 42
  };
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
  it('Get Negative Root attributes', () => {
    let a = sut.getRootAttribute(-1094);
    test.strictEqual(a.seyame, false, 'seyame -1094');
    test.strictEqual(a.rootType, 'Parenthesized', 'rootType -1094');

    a = sut.getRootAttribute(-1096);
    test.strictEqual(a.seyame, false, 'seyame -1096');
    test.strictEqual(a.rootType, 'Normal', 'rootType -1096');
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
  it('Get NULL Root', () => {
    const f = sut.getRoot(10, null);
    test.strictEqual(10, f.id, 'root matching');
    test.strictEqual(null, f.root, 'root matching');
    test.strictEqual(null, f.sort, 'sort matching');
    test.strictEqual(null, f.seyame, 'seyame');
    test.strictEqual(null, f.rootType, 'Bracketed', 'root type');
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
  it('Get Negative Lexeme attribute', () => {
    let a = sut.getLexemeAttribute(-1264);
    test.strictEqual(a.seyame, false, 'seyame');
    test.strictEqual(a.wordType, 'Normal', 'wordType');
    test.strictEqual(a.grammaticalCategory, 'Noun', 'grammaticalCategory');
    test.strictEqual(a.listing, true, 'listing');

    a = sut.getLexemeAttribute(-1236);
    test.strictEqual(a.seyame, false, 'seyame');
    test.strictEqual(a.wordType, 'Normal', 'wordType');
    test.strictEqual(
      a.grammaticalCategory,
      'Adverb-)iTt',
      'grammaticalCategory'
    );
    test.strictEqual(a.listing, true, 'listing');

    a = sut.getLexemeAttribute(-1280);
    test.strictEqual(a.seyame, false, 'seyame');
    test.strictEqual(a.wordType, 'Normal', 'wordType');
    test.strictEqual(a.grammaticalCategory, 'Verb', 'grammaticalCategory');
    test.strictEqual(a.listing, true, 'listing');

    a = sut.getLexemeAttribute(-1231);
    test.strictEqual(a.seyame, true, 'seyame');
    test.strictEqual(a.wordType, 'Normal', 'wordType');
    test.strictEqual(
      a.grammaticalCategory,
      'AdjectiveOfPlace',
      'grammaticalCategory'
    );
    test.strictEqual(a.listing, true, 'listing');

    a = sut.getLexemeAttribute(-232);
    test.strictEqual(a.seyame, false, 'seyame');
    test.strictEqual(a.wordType, 'Normal', 'wordType');
    test.strictEqual(
      a.grammaticalCategory,
      'ProperNoun',
      'grammaticalCategory'
    );
    test.strictEqual(a.listing, true, 'listing');
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
  it('Get Another flat Lexeme', () => {
    const m = sut.makeLexeme(1733, 'MSRHBA', -1879048192, 4);
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
    test.strictEqual(t.form, 'Saphel', 'form');
  });
  it('Get Flat Lexeme with missing roots', () => {
    const m = sut.makeLexeme(55, 'AKOTA', 37749824, 16);
    const a = sut.getLexemeAttribute(m.attributes);
    const f = sut.getLexeme(2, m, []);
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
  it('Get Flat Lexeme using roots', () => {
    const m = sut.makeLexeme(55, 'AKOTA', 37749824, 16);
    const a = sut.getLexemeAttribute(m.attributes);
    const roots = [];
    roots[55] = { root: 'AKA' };
    const f = sut.getLexeme(2, m, roots);
    test.strictEqual(m.rootId, f.rootId, 'rootId matching');
    test.strictEqual(roots[55].root, f.root, 'root matching');
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
  it('Get NULL Lexeme', () => {
    const f = sut.getLexeme(20, null);
    test.strictEqual(null, f.rootId, 'rootId matching');
    test.strictEqual(null, f.lexeme, 'lexeme matching');
    test.strictEqual(20, f.id, 'id matching');

    test.strictEqual(null, f.seyame, 'seyame');
    test.strictEqual(null, f.wordType, 'wordType');
    test.strictEqual(null, f.grammaticalCategory, 'grammaticalCategory');
    test.strictEqual(null, f.listing, 'listing');

    test.strictEqual(null, f.firstSuffix, 'firstSuffix');
    test.strictEqual(null, f.secondSuffix, 'secondSuffix');
    test.strictEqual(null, f.thirdSuffix, 'thirdSuffix');
    test.strictEqual(null, f.prefix, 'prefix');
    test.strictEqual(null, f.firstVowel, 'firstVowel');
    test.strictEqual(null, f.secondVowel, 'secondVowel');

    test.strictEqual(null, f.thirdVowel, 'thirdVowel');
    test.strictEqual(null, f.fourthVowel, 'fourthVowel');
    test.strictEqual(null, f.vowelCount, 'vowelCount');
    test.strictEqual(null, f.radicalType, 'radicalType');
    test.strictEqual(null, f.form, 'form');
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
  it('Get Flatten Word with no lexeme', () => {
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
    test.strictEqual(a.lexeme, f.isLexeme, 'lexeme');

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
  it('Get Flatten Word with missing lexeme', () => {
    const m = sut.makeWord(55, 'MOBDO', "MaOB'oD,uO", 369098752, 128);
    const a = sut.getWordAttribute(m.attributes);
    const t = sut.getWordMorphologicalType(m.morphologicalType);
    const f = sut.getWord(3, m, []);

    test.strictEqual(m.lexemeId, f.lexemeId, 'lexemeId matching');
    test.strictEqual(m.word, f.word, 'word matching');
    test.strictEqual(m.vocalised, f.vocalised, 'vocalised matching');
    test.strictEqual(3, f.id, 'id matching');

    test.strictEqual(a.seyame, f.seyame, 'seyame');
    test.strictEqual(a.listing, f.listing, 'listing');
    test.strictEqual(a.enclitic, f.enclitic, 'enclitic');
    test.strictEqual(a.lexeme, f.isLexeme, 'lexeme');

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
  it('Get Flatten Word with existing lexeme', () => {
    const m = sut.makeWord(55, 'MOBDO', "MaOB'oD,uO", 369098752, 128);
    const a = sut.getWordAttribute(m.attributes);
    const t = sut.getWordMorphologicalType(m.morphologicalType);
    const lexemes = [];
    lexemes[55] = { lexeme: 'AORDEA' };
    const f = sut.getWord(3, m, lexemes);

    test.strictEqual(m.lexemeId, f.lexemeId, 'lexemeId matching');
    test.strictEqual('AORDEA', f.lexeme, 'lexeme matching');
    test.strictEqual(m.word, f.word, 'word matching');
    test.strictEqual(m.vocalised, f.vocalised, 'vocalised matching');
    test.strictEqual(3, f.id, 'id matching');

    test.strictEqual(a.seyame, f.seyame, 'seyame');
    test.strictEqual(a.listing, f.listing, 'listing');
    test.strictEqual(a.enclitic, f.enclitic, 'enclitic');
    test.strictEqual(a.lexeme, f.isLexeme, 'lexeme');

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
  it('Get NULL Word', () => {
    const NULL = null;
    const f = sut.getWord(33, NULL);

    test.strictEqual(NULL, f.lexemeId, 'lexemeId matching');
    test.strictEqual(NULL, f.word, 'word matching');
    test.strictEqual(NULL, f.vocalised, 'vocalised matching');
    test.strictEqual(33, f.id, 'id matching');

    test.strictEqual(NULL, f.seyame, 'seyame');
    test.strictEqual(NULL, f.listing, 'listing');
    test.strictEqual(NULL, f.enclitic, 'enclitic');
    test.strictEqual(NULL, f.lexeme, 'lexeme');

    test.strictEqual(NULL, f.suffixGender, 'suffixGender');
    test.strictEqual(NULL, f.suffixPerson, 'suffixPerson');
    test.strictEqual(NULL, f.suffixNumber, 'suffixNumber');
    test.strictEqual(NULL, f.suffixType, 'suffixType');
    test.strictEqual(NULL, f.prefixCode, 'prefixCode');
    test.strictEqual(NULL, f.gender, 'gender');

    test.strictEqual(NULL, f.person, 'person');
    test.strictEqual(NULL, f.number, 'number');
    test.strictEqual(NULL, f.state, 'state');
    test.strictEqual(NULL, f.tense, 'tense');
    test.strictEqual(NULL, f.form, 'form');
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
    test.strictEqual(a.commentPosition, 'BeforeWord', 'commentPosition');
    test.strictEqual(a.commentFont, 'Normal', 'commentFont');
    test.strictEqual(a.stringBeforeFont, 'Normal', 'stringBeforeFont');
    test.strictEqual(a.stringAfterFont, 'Normal', 'stringAfterFont');
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
  it('Get Flat English with missing lexeme', () => {
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
    const f = sut.getEnglish(5, m, []);

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
  it('Get Flat English with lexeme', () => {
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
    const lexemes = [];
    lexemes[71] = { lexeme: 'AKD' };
    const f = sut.getEnglish(5, m, lexemes);

    test.strictEqual(m.lexemeId, f.lexemeId, 'lexemeId matching');
    test.strictEqual('AKD', f.lexeme, 'lexeme matching');
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
  it('Get NULL English', () => {
    const f = sut.getEnglish(50, null);

    test.strictEqual(null, f.lexemeId, 'lexemeId matching');
    test.strictEqual(null, f.word, 'word matching');
    test.strictEqual(null, f.before, 'before matching');
    test.strictEqual(null, f.after, 'after matching');
    test.strictEqual(null, f.comment, 'comment matching');
    test.strictEqual(50, f.id, 'attributes matching');
    test.strictEqual(null, f.flag, 'flag matching');

    test.strictEqual(null, f.commentPosition, 'commentPosition');
    test.strictEqual(null, f.commentFont, 'commentFont');
    test.strictEqual(null, f.stringBeforeFont, 'stringBeforeFont');
    test.strictEqual(null, f.stringAfterFont, 'stringAfterFont');
    test.strictEqual(null, f.verbType, 'verbType');
    test.strictEqual(null, f.number, 'number');
    test.strictEqual(null, f.gender, 'gender');
    test.strictEqual(null, f.form, 'form');
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
  it('Get Flat Etymology', () => {
    const m = sut.makeEtymology(46, 'eu\\255jaristi\\256a', 5);
    const a = sut.getEtymologyAttribute(m.attributes);
    const f = sut.getEtymology(3, m);
    test.strictEqual(m.lexemeId, f.lexemeId, 'lexemeId matching');
    test.strictEqual(m.word, f.word, 'word matching');
    test.strictEqual(3, f.id, 'attributes matching');

    test.strictEqual(a.language, f.language, 'language');
    test.strictEqual(a.wordType, f.wordType, 'wordType');
  });
  it('Get Flat Etymology with missing lexeme', () => {
    const m = sut.makeEtymology(46, 'eu\\255jaristi\\256a', 5);
    const a = sut.getEtymologyAttribute(m.attributes);
    const f = sut.getEtymology(3, m, []);
    test.strictEqual(m.lexemeId, f.lexemeId, 'lexemeId matching');
    test.strictEqual(m.word, f.word, 'word matching');
    test.strictEqual(3, f.id, 'attributes matching');

    test.strictEqual(a.language, f.language, 'language');
    test.strictEqual(a.wordType, f.wordType, 'wordType');
  });
  it('Get Flat Etymology with lexemes', () => {
    const m = sut.makeEtymology(46, 'eu\\255jaristi\\256a', 5);
    const a = sut.getEtymologyAttribute(m.attributes);
    const lexemes = [];
    lexemes[46] = { lexeme: 'AOCRSY;A' };
    const f = sut.getEtymology(3, m, lexemes);
    test.strictEqual(m.lexemeId, f.lexemeId, 'lexemeId matching');
    test.strictEqual('AOCRSY;A', f.lexeme, 'lexeme matching');
    test.strictEqual(m.word, f.word, 'word matching');
    test.strictEqual(3, f.id, 'attributes matching');

    test.strictEqual(a.language, f.language, 'language');
    test.strictEqual(a.wordType, f.wordType, 'wordType');
  });
  it('Get NULL Etymology', () => {
    const f = sut.getEtymology(30, null);
    test.strictEqual(null, f.lexemeId, 'lexemeId matching');
    test.strictEqual(null, f.word, 'word matching');
    test.strictEqual(30, f.id, 'attributes matching');

    test.strictEqual(null, f.language, 'language');
    test.strictEqual(null, f.wordType, 'wordType');
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
  it('Get Books By English Names', () => {
    const bookNames = Object.keys(sut.getBooksByEnglish());
    test.strictEqual(bookNames.length, 221, 'books by English length');
  });
  it('Get Book By English Names', () => {
    let book = sut.getBookByEnglish('Matthew');
    test.strictEqual(book.englishName, 'Matthew', 'getBookByEnglish Matthew');
    book = sut.getBookByEnglish('III Joh');
    test.strictEqual(book.englishName, '3 John', 'getBookByEnglish 3 John');
    book = sut.getBookByEnglish(null);
    test.strictEqual(book, undefined, 'non-existent book');
  });
  it('Get Book English Names', () => {
    let englishNames = sut.getBookEnglishNames();
    test.strictEqual(
      englishNames.length,
      221,
      'getBookEnglishNames un-initialized'
    );
    englishNames = sut.getBookEnglishNames();
    test.strictEqual(
      englishNames[0],
      '1 Co',
      'getBookEnglishNames initialized'
    );
  });
  it('Make Group Book', () => {
    const m = sut.makeBookGroup(
      'western',
      'Western Five',
      Object.freeze(sut.peshittaBooks.slice(74, 79))
    );
    test.strictEqual(m.name, 'Western Five', 'makeBookGroup');
  });
  it('getVerseByIndex', () => {
    let verse = sut.getVerseByIndex(2, ubs);
    test.strictEqual(verse.book, 52, 'matthew book');
    test.strictEqual(verse.chapter, 1, 'matthew chapter 1');
    test.strictEqual(verse.verse, 2, 'matthew verse 1:2');

    verse = sut.getVerseByIndex(4, ubs);
    test.strictEqual(verse.book, 52, 'matthew book');
    test.strictEqual(verse.chapter, 2, 'matthew chapter 2');
    test.strictEqual(verse.verse, 2, 'matthew verse 2:2');

    verse = sut.getVerseByIndex(5, ubs);
    test.strictEqual(verse.book, 53, 'mark book');
    test.strictEqual(verse.chapter, 1, 'mark chapter');
    test.strictEqual(verse.verse, 1, 'mark verse');

    verse = sut.getVerseByIndex(6, ubs);
    test.strictEqual(verse, null, 'non-existent verse');
  });
  it('getIndexByVerseWoChapter', () => {
    let index = sut.getIndexByVerseWoChapter(
      { book: 52, chapter: 2, verse: 2 },
      ubs
    );
    test.strictEqual(index, 3, 'full reference');

    index = sut.getIndexByVerseWoChapter({ book: 53, chapter: 1 }, ubs);
    test.strictEqual(index, 4, 'missing verse reference');

    index = sut.getIndexByVerseWoChapter({ book: 52 }, ubs);
    test.strictEqual(index, 0, 'missing chapter reference, 52 book');

    index = sut.getIndexByVerseWoChapter({ book: 53 }, ubs);
    test.strictEqual(index, 4, 'missing chapter reference, 53 book');

    index = sut.getIndexByVerseWoChapter(
      { book: 54, chapter: 2, verse: 2 },
      ubs
    );
    test.strictEqual(index, 0, 'book 54');

    index = sut.getIndexByVerseWoChapter(
      { book: 52, chapter: 19, verse: 2 },
      ubs
    );
    test.strictEqual(index, 3, 'non-existent chapter 19');

    index = sut.getIndexByVerseWoChapter(
      { book: 52, chapter: 2, verse: 100 },
      ubs
    );
    test.strictEqual(index, 3, 'non-existent verse 100');
  });
  it('getIndexByVerse', () => {
    let index = sut.getIndexByVerse({ book: 52, chapter: 2, verse: 2 }, ubs);
    test.strictEqual(index, 5, 'full reference');

    index = sut.getIndexByVerse({ book: 53, chapter: 1 }, ubs);
    test.strictEqual(index, 6, 'missing verse reference');

    index = sut.getIndexByVerse({ book: 52 }, ubs);
    test.strictEqual(index, 0, 'missing chapter reference, 52 book');

    index = sut.getIndexByVerse({ book: 53 }, ubs);
    test.strictEqual(index, 6, 'missing chapter reference, 53 book');

    index = sut.getIndexByVerse({ book: 54, chapter: 2, verse: 2 }, ubs);
    test.strictEqual(index, 0, 'book 54');

    index = sut.getIndexByVerse({ book: 52, chapter: 19, verse: 2 }, ubs);
    test.strictEqual(index, 5, 'non-existent chapter 19');

    index = sut.getIndexByVerse({ book: 52, chapter: 2, verse: 100 }, ubs);
    test.strictEqual(index, 5, 'non-existent verse 100');
  });
  it('Get Named References', () => {
    const namedReference = sut.getNamedReferences();
    test.strictEqual(namedReference.length, 43796, 'length');
  });
});
