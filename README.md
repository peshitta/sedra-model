# sedra-model

[![npm version](https://badge.fury.io/js/sedra-model.svg)](https://badge.fury.io/js/sedra-model)
[![npm module downloads](http://img.shields.io/npm/dt/sedra-model.svg)](https://www.npmjs.org/package/sedra-model)
[![Build Status](https://travis-ci.org/peshitta/sedra-model.svg?branch=master)](https://travis-ci.org/peshitta/sedra-model)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/sedra-model/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/sedra-model.svg)](https://david-dm.org/peshitta/sedra-model)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/sedra-model/badge.svg?branch=master)](https://coveralls.io/github/peshitta/sedra-model?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Sedra models and related utility functions

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install sedra-model --save
```

Following bundles are available:
* `sedra-model.js` - UMD ES5 version for use in browser, node, etc.
* `sedra-model.min.js` - minified version of `sedra-model.js`
* `sedra-model.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/sedra-model/-/sedra-model-1.1.3.tgz](https://registry.npmjs.org/sedra-model/-/sedra-model-1.1.3.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/sedra-model/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/sedra-model/issues).

To read quick updates about Peshitta app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [sedraModel](#module_sedraModel)
    * [.wordType](#module_sedraModel.wordType) : <code>Array.&lt;string&gt;</code>
    * [.vowel](#module_sedraModel.vowel) : <code>Array.&lt;string&gt;</code>
    * [.wordNumber](#module_sedraModel.wordNumber) : <code>Array.&lt;string&gt;</code>
    * [.wordGender](#module_sedraModel.wordGender) : <code>Array.&lt;string&gt;</code>
    * [.wordForm](#module_sedraModel.wordForm) : <code>Array.&lt;string&gt;</code>
    * [.lexemeGrammaticalCategory](#module_sedraModel.lexemeGrammaticalCategory) : <code>Array.&lt;string&gt;</code>
    * [.lexemeFirstSuffix](#module_sedraModel.lexemeFirstSuffix) : <code>Array.&lt;string&gt;</code>
    * [.lexemeSecondSuffix](#module_sedraModel.lexemeSecondSuffix) : <code>Array.&lt;string&gt;</code>
    * [.lexemeThirdSuffix](#module_sedraModel.lexemeThirdSuffix) : <code>Array.&lt;string&gt;</code>
    * [.lexemePrefix](#module_sedraModel.lexemePrefix) : <code>Array.&lt;string&gt;</code>
    * [.lexemeRadicalType](#module_sedraModel.lexemeRadicalType) : <code>Array.&lt;string&gt;</code>
    * [.lexemeForm](#module_sedraModel.lexemeForm) : <code>Array.&lt;string&gt;</code>
    * [.wordSuffixGender](#module_sedraModel.wordSuffixGender) : <code>Array.&lt;string&gt;</code>
    * [.wordSuffixPerson](#module_sedraModel.wordSuffixPerson) : <code>Array.&lt;string&gt;</code>
    * [.wordSuffixNumber](#module_sedraModel.wordSuffixNumber) : <code>Array.&lt;string&gt;</code>
    * [.wordSuffixType](#module_sedraModel.wordSuffixType) : <code>Array.&lt;string&gt;</code>
    * [.wordPerson](#module_sedraModel.wordPerson) : <code>Array.&lt;string&gt;</code>
    * [.wordState](#module_sedraModel.wordState) : <code>Array.&lt;string&gt;</code>
    * [.wordTense](#module_sedraModel.wordTense) : <code>Array.&lt;string&gt;</code>
    * [.textPosition](#module_sedraModel.textPosition) : <code>Array.&lt;string&gt;</code>
    * [.fontType](#module_sedraModel.fontType) : <code>Array.&lt;string&gt;</code>
    * [.verbType](#module_sedraModel.verbType) : <code>Array.&lt;string&gt;</code>
    * [.etymologyLanguage](#module_sedraModel.etymologyLanguage) : <code>Array.&lt;string&gt;</code>
    * [.books](#module_sedraModel.books) : <code>Array.&lt;string&gt;</code>
    * [.peshittaBooks](#module_sedraModel.peshittaBooks) : <code>Array.&lt;Book&gt;</code>
    * [.bookGroups](#module_sedraModel.bookGroups) : <code>Object</code>
    * [.makeRoot(root, sort, attributes)](#module_sedraModel.makeRoot) ⇒ <code>Root</code>
    * [.makeRootAttribute(seyame, rootType)](#module_sedraModel.makeRootAttribute) ⇒ <code>RootAttribute</code>
    * [.getRootAttribute(attributes)](#module_sedraModel.getRootAttribute) ⇒ <code>RootAttribute</code>
    * [.getRoot(id, root)](#module_sedraModel.getRoot) ⇒ <code>FlatRoot</code>
    * [.makeLexeme(rootId, lexeme, morphologicalType, attributes)](#module_sedraModel.makeLexeme) ⇒ <code>Lexeme</code>
    * [.makeLexemeAttribute(seyame, wordType, grammaticalCategory, listing)](#module_sedraModel.makeLexemeAttribute) ⇒ <code>LexemeAttribute</code>
    * [.getLexemeAttribute(attributes)](#module_sedraModel.getLexemeAttribute) ⇒ <code>LexemeAttribute</code>
    * [.makeLexemeMorphologicalType(firstSuffix, secondSuffix, thirdSuffix, prefix, firstVowel, secondVowel, thirdVowel, fourthVowel, vowelCount, radicalType, form)](#module_sedraModel.makeLexemeMorphologicalType) ⇒ <code>LexemeMorphologicalType</code>
    * [.getLexemeMorphologicalType(morphologicalType)](#module_sedraModel.getLexemeMorphologicalType) ⇒ <code>LexemeMorphologicalType</code>
    * [.getLexeme(id, lexeme, roots)](#module_sedraModel.getLexeme) ⇒ <code>FlatLexeme</code>
    * [.makeWord(lexemeId, word, vocalised, morphologicalType, attributes)](#module_sedraModel.makeWord) ⇒ <code>Word</code>
    * [.makeWordAttribute(seyame, listing, enclitic, lexeme)](#module_sedraModel.makeWordAttribute) ⇒ <code>WordAttribute</code>
    * [.getWordAttribute(attributes)](#module_sedraModel.getWordAttribute) ⇒ <code>WordAttribute</code>
    * [.makeWordMorphologicalType(suffixGender, suffixPerson, suffixNumber, suffixType, prefixCode, gender, person, number, state, tense, form)](#module_sedraModel.makeWordMorphologicalType) ⇒ <code>WordMorphologicalType</code>
    * [.getWordMorphologicalType(attributes)](#module_sedraModel.getWordMorphologicalType) ⇒ <code>WordMorphologicalType</code>
    * [.getWord(id, lexeme, lexemes)](#module_sedraModel.getWord) ⇒ <code>FlatWord</code>
    * [.makeEnglish(lexemeId, word, before, after, comment, attributes, flag)](#module_sedraModel.makeEnglish) ⇒ <code>English</code>
    * [.makeEnglishAttribute(commentPosition, commentFont, stringBeforeFont, stringAfterFont, verb, number, gender, form)](#module_sedraModel.makeEnglishAttribute) ⇒ <code>EnglishAttribute</code>
    * [.getEnglishAttribute(attributes)](#module_sedraModel.getEnglishAttribute) ⇒ <code>EnglishAttribute</code>
    * [.getEnglish(id, english, lexemes)](#module_sedraModel.getEnglish) ⇒ <code>FlatEnglish</code>
    * [.makeEtymology(lexemeId, word, attributes)](#module_sedraModel.makeEtymology) ⇒ <code>Etymology</code>
    * [.makeEtymologyAttribute(language, type)](#module_sedraModel.makeEtymologyAttribute) ⇒ <code>EtymologyAttribute</code>
    * [.getEtymologyAttribute(attributes)](#module_sedraModel.getEtymologyAttribute) ⇒ <code>EtymologyAttribute</code>
    * [.getEtymology(id, etymology, lexemes)](#module_sedraModel.getEtymology) ⇒ <code>FlatEtymology</code>
    * [.makeBook(id, peshittaId, name, vocalised, english)](#module_sedraModel.makeBook) ⇒ <code>Book</code>
    * [.sorter(a, b)](#module_sedraModel.sorter) ⇒ <code>number</code>
    * [.getBook(id)](#module_sedraModel.getBook) ⇒ <code>Book</code>
    * [.makeBookGroup(id, name, bookSet)](#module_sedraModel.makeBookGroup) ⇒ <code>BookGroup</code>
    * [.getVerseByIndex(index, ubs)](#module_sedraModel.getVerseByIndex) ⇒ <code>object</code>

<a name="module_sedraModel.wordType"></a>

### sedraModel.wordType : <code>Array.&lt;string&gt;</code>
Word Type enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.vowel"></a>

### sedraModel.vowel : <code>Array.&lt;string&gt;</code>
Vowel enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.wordNumber"></a>

### sedraModel.wordNumber : <code>Array.&lt;string&gt;</code>
Word Number enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.wordGender"></a>

### sedraModel.wordGender : <code>Array.&lt;string&gt;</code>
Word Gender enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.wordForm"></a>

### sedraModel.wordForm : <code>Array.&lt;string&gt;</code>
Word Form enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.lexemeGrammaticalCategory"></a>

### sedraModel.lexemeGrammaticalCategory : <code>Array.&lt;string&gt;</code>
Lexeme Grammatical Category enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.lexemeFirstSuffix"></a>

### sedraModel.lexemeFirstSuffix : <code>Array.&lt;string&gt;</code>
Lexeme First Suffix enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.lexemeSecondSuffix"></a>

### sedraModel.lexemeSecondSuffix : <code>Array.&lt;string&gt;</code>
Second Second Suffix enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.lexemeThirdSuffix"></a>

### sedraModel.lexemeThirdSuffix : <code>Array.&lt;string&gt;</code>
Lexeme Third Suffix enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.lexemePrefix"></a>

### sedraModel.lexemePrefix : <code>Array.&lt;string&gt;</code>
Lexeme Prefix enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.lexemeRadicalType"></a>

### sedraModel.lexemeRadicalType : <code>Array.&lt;string&gt;</code>
Lexeme Radical Type enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.lexemeForm"></a>

### sedraModel.lexemeForm : <code>Array.&lt;string&gt;</code>
Lexeme Form enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.wordSuffixGender"></a>

### sedraModel.wordSuffixGender : <code>Array.&lt;string&gt;</code>
Word Suffix Gender enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.wordSuffixPerson"></a>

### sedraModel.wordSuffixPerson : <code>Array.&lt;string&gt;</code>
Word Suffix Person enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.wordSuffixNumber"></a>

### sedraModel.wordSuffixNumber : <code>Array.&lt;string&gt;</code>
Word Suffix Number enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.wordSuffixType"></a>

### sedraModel.wordSuffixType : <code>Array.&lt;string&gt;</code>
Word Suffix Type enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.wordPerson"></a>

### sedraModel.wordPerson : <code>Array.&lt;string&gt;</code>
Word Person enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.wordState"></a>

### sedraModel.wordState : <code>Array.&lt;string&gt;</code>
Word State enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.wordTense"></a>

### sedraModel.wordTense : <code>Array.&lt;string&gt;</code>
Word Tense enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.textPosition"></a>

### sedraModel.textPosition : <code>Array.&lt;string&gt;</code>
Text position enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.fontType"></a>

### sedraModel.fontType : <code>Array.&lt;string&gt;</code>
Font type enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.verbType"></a>

### sedraModel.verbType : <code>Array.&lt;string&gt;</code>
Verb type enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.etymologyLanguage"></a>

### sedraModel.etymologyLanguage : <code>Array.&lt;string&gt;</code>
Etymology Language enumeration

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.books"></a>

### sedraModel.books : <code>Array.&lt;string&gt;</code>
Peshitta books

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.peshittaBooks"></a>

### sedraModel.peshittaBooks : <code>Array.&lt;Book&gt;</code>
Peshitta books sorted according to Eastern Peshitta ordering

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.bookGroups"></a>

### sedraModel.bookGroups : <code>Object</code>
Eastern New Testament Peshitta book groups

**Kind**: static constant of [<code>sedraModel</code>](#module_sedraModel)  
<a name="module_sedraModel.makeRoot"></a>

### sedraModel.makeRoot(root, sort, attributes) ⇒ <code>Root</code>
Root records, e.g. 0:2,"AB","ab           |A",0
Id is the position in the containing array so it is not stored

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>Root</code> - Sedra Root row  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | e.g. "AB" |
| sort | <code>string</code> | e.g. "ab          |A" |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedraModel.makeRootAttribute"></a>

### sedraModel.makeRootAttribute(seyame, rootType) ⇒ <code>RootAttribute</code>
Build Root Attribute object

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>RootAttribute</code> - Root Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| seyame | <code>boolean</code> | true if root has seyame |
| rootType | <code>string</code> | word type enumeration |

<a name="module_sedraModel.getRootAttribute"></a>

### sedraModel.getRootAttribute(attributes) ⇒ <code>RootAttribute</code>
Get Root Attribute object from root attribute bit map

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>RootAttribute</code> - Root Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedraModel.getRoot"></a>

### sedraModel.getRoot(id, root) ⇒ <code>FlatRoot</code>
Return flatten root object with parsed attribute values

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>FlatRoot</code> - the flatten root model  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | the id of current root object |
| root | <code>Root</code> | root raw object |

<a name="module_sedraModel.makeLexeme"></a>

### sedraModel.makeLexeme(rootId, lexeme, morphologicalType, attributes) ⇒ <code>Lexeme</code>
Lexeme records, e.g. 1:2,0:2,"ABA",41960448,16
Id is the position in the array so it is not stored

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>Lexeme</code> - Sedra Lexeme row  

| Param | Type | Description |
| --- | --- | --- |
| rootId | <code>number</code> | Root Address, e.g. 2 |
| lexeme | <code>string</code> | e.g. "ABA" |
| morphologicalType | <code>number</code> | 32-bit map |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedraModel.makeLexemeAttribute"></a>

### sedraModel.makeLexemeAttribute(seyame, wordType, grammaticalCategory, listing) ⇒ <code>LexemeAttribute</code>
Build Lexeme Attribute object

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>LexemeAttribute</code> - Lexeme Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| seyame | <code>boolean</code> | true if lexeme has seyame |
| wordType | <code>string</code> | word type enumeration |
| grammaticalCategory | <code>string</code> | grammatical category enumeration |
| listing | <code>boolean</code> | not clear yet what this is used for |

<a name="module_sedraModel.getLexemeAttribute"></a>

### sedraModel.getLexemeAttribute(attributes) ⇒ <code>LexemeAttribute</code>
Get Lexeme Attribute object from lexeme attribute bit map

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>LexemeAttribute</code> - Lexeme Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedraModel.makeLexemeMorphologicalType"></a>

### sedraModel.makeLexemeMorphologicalType(firstSuffix, secondSuffix, thirdSuffix, prefix, firstVowel, secondVowel, thirdVowel, fourthVowel, vowelCount, radicalType, form) ⇒ <code>LexemeMorphologicalType</code>
Build Lexeme Morphological Type object

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>LexemeMorphologicalType</code> - Lexeme Morphological Type object  

| Param | Type | Description |
| --- | --- | --- |
| firstSuffix | <code>string</code> | First suffix enumeration |
| secondSuffix | <code>string</code> | Second suffix enumeration |
| thirdSuffix | <code>string</code> | Third suffix enumeration |
| prefix | <code>string</code> | M, T, ? enumeration |
| firstVowel | <code>string</code> | First Vowel |
| secondVowel | <code>string</code> | Second Vowel |
| thirdVowel | <code>string</code> | Third Vowel |
| fourthVowel | <code>string</code> | Forth Vowel |
| vowelCount | <code>number</code> | Total no of vowels in lexeme |
| radicalType | <code>string</code> | Radical type enumeration |
| form | <code>string</code> | Word form enumeration |

<a name="module_sedraModel.getLexemeMorphologicalType"></a>

### sedraModel.getLexemeMorphologicalType(morphologicalType) ⇒ <code>LexemeMorphologicalType</code>
Get Lexeme Morphological Type object from lexeme bit map

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>LexemeMorphologicalType</code> - Lexeme Morphological Type object  

| Param | Type | Description |
| --- | --- | --- |
| morphologicalType | <code>number</code> | Morphological Type 32-bit map |

<a name="module_sedraModel.getLexeme"></a>

### sedraModel.getLexeme(id, lexeme, roots) ⇒ <code>FlatLexeme</code>
Return flatten lexeme object with parsed attribute and morphological values

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>FlatLexeme</code> - the flatten lexeme model  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | the id of current lexeme object |
| lexeme | <code>Lexeme</code> | lexeme raw object |
| roots | <code>Array.&lt;Root&gt;</code> | root list |

<a name="module_sedraModel.makeWord"></a>

### sedraModel.makeWord(lexemeId, word, vocalised, morphologicalType, attributes) ⇒ <code>Word</code>
Word records, e.g. 2:8,1:2,"ABHOH;","AaB,oHaOH_;",7405716,129
Id is the position in the array so it is not stored

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>Word</code> - Sedra Word row  

| Param | Type | Description |
| --- | --- | --- |
| lexemeId | <code>number</code> | Lexeme Address, e.g. 2 |
| word | <code>string</code> | Word, e.g. "ABHOH;" |
| vocalised | <code>string</code> | Vocalised Word, e.g. "AaB,oHaOH_;" |
| morphologicalType | <code>number</code> | 32-bit map |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedraModel.makeWordAttribute"></a>

### sedraModel.makeWordAttribute(seyame, listing, enclitic, lexeme) ⇒ <code>WordAttribute</code>
Build Word Attribute object

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>WordAttribute</code> - Word Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| seyame | <code>boolean</code> | true if word has seyame |
| listing | <code>number</code> | Undocumented |
| enclitic | <code>boolean</code> | true if word has enclitics |
| lexeme | <code>boolean</code> | true if current word is lexeme |

<a name="module_sedraModel.getWordAttribute"></a>

### sedraModel.getWordAttribute(attributes) ⇒ <code>WordAttribute</code>
Get Word Attribute object from word attribute bit map

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>WordAttribute</code> - Word Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedraModel.makeWordMorphologicalType"></a>

### sedraModel.makeWordMorphologicalType(suffixGender, suffixPerson, suffixNumber, suffixType, prefixCode, gender, person, number, state, tense, form) ⇒ <code>WordMorphologicalType</code>
Build Word Morphological Type object

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>WordMorphologicalType</code> - Word Morphological Type object  

| Param | Type | Description |
| --- | --- | --- |
| suffixGender | <code>string</code> | Word Suffix Gender enumeration |
| suffixPerson | <code>string</code> | Word Suffix Person enumeration |
| suffixNumber | <code>string</code> | Word Suffix Number enumeration |
| suffixType | <code>string</code> | Word Suffix Type enumeration |
| prefixCode | <code>number</code> | Word Prefix Code |
| gender | <code>string</code> | Word Gender enumeration |
| person | <code>string</code> | Word Person enumeration |
| number | <code>string</code> | Word Number enumeration |
| state | <code>string</code> | Word State enumeration |
| tense | <code>string</code> | Word Tense enumeration |
| form | <code>string</code> | Word Form enumeration |

<a name="module_sedraModel.getWordMorphologicalType"></a>

### sedraModel.getWordMorphologicalType(attributes) ⇒ <code>WordMorphologicalType</code>
Get Word Morphological Type object from word bit map

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>WordMorphologicalType</code> - Word Morphological Type object  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>number</code> | Morphological Type 32-bit map |

<a name="module_sedraModel.getWord"></a>

### sedraModel.getWord(id, lexeme, lexemes) ⇒ <code>FlatWord</code>
Return flatten word object with parsed attribute and morphological values

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>FlatWord</code> - the flatten word model  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | the id of current word object |
| lexeme | <code>Word</code> | word raw object |
| lexemes | <code>Array.&lt;Lexeme&gt;</code> | lexeme list |

<a name="module_sedraModel.makeEnglish"></a>

### sedraModel.makeEnglish(lexemeId, word, before, after, comment, attributes, flag) ⇒ <code>English</code>
English meaning, e.g. 3:165,1:97,"cause","without","","",0,0
Id is the position in the database array so it is not stored

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>English</code> - Sedra English row  

| Param | Type | Description |
| --- | --- | --- |
| lexemeId | <code>number</code> | Lexeme address, e.g. 97 |
| word | <code>string</code> | Meaning, e.g. "cause" |
| before | <code>string</code> | String before meaning, e.g. "without" (i.e. without cause) |
| after | <code>number</code> | String after meaning, e.g. "" |
| comment | <code>number</code> | Comment, e.g. "" |
| attributes | <code>number</code> | 16-bit map |
| flag | <code>number</code> | 1 bit flag |

<a name="module_sedraModel.makeEnglishAttribute"></a>

### sedraModel.makeEnglishAttribute(commentPosition, commentFont, stringBeforeFont, stringAfterFont, verb, number, gender, form) ⇒ <code>EnglishAttribute</code>
Build English Attribute object

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>EnglishAttribute</code> - English Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| commentPosition | <code>string</code> | Comment before or after word meaning |
| commentFont | <code>string</code> | Normal or Italic |
| stringBeforeFont | <code>string</code> | Normal or Italic string before text font |
| stringAfterFont | <code>string</code> | Normal or Italic string after text font |
| verb | <code>string</code> | None, Transitive or Intransitive |
| number | <code>string</code> | Word Number enumeration |
| gender | <code>string</code> | Word Gender enumeration |
| form | <code>string</code> | Word Form enumeration |

<a name="module_sedraModel.getEnglishAttribute"></a>

### sedraModel.getEnglishAttribute(attributes) ⇒ <code>EnglishAttribute</code>
Get English Attribute object from english attribute bit map

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>EnglishAttribute</code> - English Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedraModel.getEnglish"></a>

### sedraModel.getEnglish(id, english, lexemes) ⇒ <code>FlatEnglish</code>
Return flatten english object with parsed attribute values

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>FlatEnglish</code> - the flatten english model  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | the id of current english object |
| english | <code>English</code> | english raw object |
| lexemes | <code>Array.&lt;Lexeme&gt;</code> | lexeme list |

<a name="module_sedraModel.makeEtymology"></a>

### sedraModel.makeEtymology(lexemeId, word, attributes) ⇒ <code>Etymology</code>
Etymology records, e.g. 4:1,1:1,"a\255h\256r",5
Id is the position in the array so it is not stored

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>Etymology</code> - Sedra Etymology row  

| Param | Type | Description |
| --- | --- | --- |
| lexemeId | <code>number</code> | Lexeme address, e.g. 1 |
| word | <code>string</code> | Word Origin, e.g. "a\255h\256r" |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedraModel.makeEtymologyAttribute"></a>

### sedraModel.makeEtymologyAttribute(language, type) ⇒ <code>EtymologyAttribute</code>
Build Etymology Attribute object

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>EtymologyAttribute</code> - Etymology Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| language | <code>string</code> | the source language |
| type | <code>string</code> | word type enumeration |

<a name="module_sedraModel.getEtymologyAttribute"></a>

### sedraModel.getEtymologyAttribute(attributes) ⇒ <code>EtymologyAttribute</code>
Get Etymology Attribute object from etymology attribute bit map

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>EtymologyAttribute</code> - Etymology Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedraModel.getEtymology"></a>

### sedraModel.getEtymology(id, etymology, lexemes) ⇒ <code>FlatEtymology</code>
Return flatten etymology object with parsed attribute values

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>FlatEtymology</code> - the flatten etymology model  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | the id of current etymology object |
| etymology | <code>Etymology</code> | etymology raw object |
| lexemes | <code>Array.&lt;Lexeme&gt;</code> | lexeme list |

<a name="module_sedraModel.makeBook"></a>

### sedraModel.makeBook(id, peshittaId, name, vocalised, english) ⇒ <code>Book</code>
Build a Book object

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>Book</code> - Book object  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Book Id |
| peshittaId | <code>number</code> | Book Eastern Peshitta Id |
| name | <code>string</code> | Book Aramaic name |
| vocalised | <code>string</code> | Book vocalised Aramaic name |
| english | <code>Array.&lt;string&gt;</code> | Book English names: full name followed by abbreviations |

<a name="module_sedraModel.sorter"></a>

### sedraModel.sorter(a, b) ⇒ <code>number</code>
Callback to sort books by Eastern Peshitta ordering

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>number</code> - sort order  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Book</code> | a book |
| b | <code>Book</code> | another book |

<a name="module_sedraModel.getBook"></a>

### sedraModel.getBook(id) ⇒ <code>Book</code>
Get book record with the given id from books array

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>Book</code> - Book object from books array  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Book id |

<a name="module_sedraModel.makeBookGroup"></a>

### sedraModel.makeBookGroup(id, name, bookSet) ⇒ <code>BookGroup</code>
Build a BookGroup object - a grouping of Peshitta books

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>BookGroup</code> - A Book Group object  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> \| <code>string</code> | Book Group assigned Id |
| name | <code>string</code> | Book Group name |
| bookSet | <code>Array.&lt;Book&gt;</code> | Book subset from books array |

<a name="module_sedraModel.getVerseByIndex"></a>

### sedraModel.getVerseByIndex(index, ubs) ⇒ <code>object</code>
Get a verse by its index inside the whole of NT Peshitta

**Kind**: static method of [<code>sedraModel</code>](#module_sedraModel)  
**Returns**: <code>object</code> - a hash with verse content, verse, chapter and book number  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | verse index overall NT Peshitta |
| ubs | <code>object</code> | NT Peshitta object hash |

