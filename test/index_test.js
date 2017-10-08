const test = require('assert');
const sut = require('../build/sedra-model');

describe('Sedra model', () => {
  it('Get Root', () => {
    const m = sut.makeRoot('ABOBA', 'abb          |0', 2);
    test.strictEqual(m.root, 'ABOBA', 'root matching');
    test.strictEqual(m.sort, 'abb          |0', 'sort matching');
    test.strictEqual(m.attributes, 2, 'attributes matching');
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
  it('Get Etymology', () => {
    const m = sut.makeEtymology(46, 'eu\\255jaristi\\256a', 5);
    test.strictEqual(m.lexemeId, 46, 'lexemeId matching');
    test.strictEqual(m.word, 'eu\\255jaristi\\256a', 'word matching');
    test.strictEqual(m.attributes, 5, 'attributes matching');
  });
});
