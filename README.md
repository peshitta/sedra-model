# sedra-model

[![npm version](https://badge.fury.io/js/sedra-model.svg)](https://badge.fury.io/js/sedra-model)
[![npm module downloads](http://img.shields.io/npm/dt/sedra-model.svg)](https://www.npmjs.org/package/sedra-model)
[![Build Status](https://travis-ci.org/peshitta/sedra-model.svg?branch=master)](https://travis-ci.org/peshitta/sedra-model)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/sedra-model/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/sedra-model.svg)](https://david-dm.org/peshitta/sedra-model)
[![devDependencies Status](https://david-dm.org/peshitta/sedra-model/dev-status.svg)](https://david-dm.org/peshitta/sedra-model?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/sedra-model/badge.svg?branch=master)](https://coveralls.io/github/peshitta/sedra-model?branch=master)

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
[https://registry.npmjs.org/sedra-model/-/sedra-model-1.0.0.tgz](https://registry.npmjs.org/sedra-model/-/sedra-model-1.0.0.tgz)

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
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [sedra](#module_sedra)
    * [.lexemeGrammaticalCategory](#module_sedra.lexemeGrammaticalCategory) : <code>Array.&lt;string&gt;</code>
    * [.lexemeFirstSuffix](#module_sedra.lexemeFirstSuffix) : <code>Array.&lt;string&gt;</code>
    * [.lexemeSecondSuffix](#module_sedra.lexemeSecondSuffix) : <code>Array.&lt;string&gt;</code>
    * [.lexemeThirdSuffix](#module_sedra.lexemeThirdSuffix) : <code>Array.&lt;string&gt;</code>
    * [.lexemePrefix](#module_sedra.lexemePrefix) : <code>Array.&lt;string&gt;</code>
    * [.lexemeRadicalType](#module_sedra.lexemeRadicalType) : <code>Array.&lt;string&gt;</code>
    * [.lexemeForm](#module_sedra.lexemeForm) : <code>Array.&lt;string&gt;</code>
    * [.getLexeme](#module_sedra.getLexeme) ⇒ <code>Lexeme</code>
    * [.makeLexemeAttribute](#module_sedra.makeLexemeAttribute) ⇒ <code>LexemeAttribute</code>
    * [.getLexemeAttribute](#module_sedra.getLexemeAttribute) ⇒ <code>LexemeAttribute</code>
    * [.makeLexemeMorphologicalType](#module_sedra.makeLexemeMorphologicalType) ⇒ <code>LexemeMorphologicalType</code>
    * [.getLexemeMorphologicalType](#module_sedra.getLexemeMorphologicalType) ⇒ <code>LexemeMorphologicalType</code>
    * [.getEnglish](#module_sedra.getEnglish) ⇒ <code>English</code>
    * [.getEtymology](#module_sedra.getEtymology) ⇒ <code>Etymology</code>
    * [.getRoot](#module_sedra.getRoot) ⇒ <code>Root</code>
    * [.makeRootAttribute](#module_sedra.makeRootAttribute) ⇒ <code>RootAttribute</code>
    * [.getRootAttribute](#module_sedra.getRootAttribute) ⇒ <code>RootAttribute</code>
    * [.wordSuffixGender](#module_sedra.wordSuffixGender) : <code>Array.&lt;string&gt;</code>
    * [.wordSuffixPerson](#module_sedra.wordSuffixPerson) : <code>Array.&lt;string&gt;</code>
    * [.wordSuffixNumber](#module_sedra.wordSuffixNumber) : <code>Array.&lt;string&gt;</code>
    * [.wordSuffixType](#module_sedra.wordSuffixType) : <code>Array.&lt;string&gt;</code>
    * [.wordGender](#module_sedra.wordGender) : <code>Array.&lt;string&gt;</code>
    * [.wordPerson](#module_sedra.wordPerson) : <code>Array.&lt;string&gt;</code>
    * [.wordNumber](#module_sedra.wordNumber) : <code>Array.&lt;string&gt;</code>
    * [.wordState](#module_sedra.wordState) : <code>Array.&lt;string&gt;</code>
    * [.wordTense](#module_sedra.wordTense) : <code>Array.&lt;string&gt;</code>
    * [.wordForm](#module_sedra.wordForm) : <code>Array.&lt;string&gt;</code>
    * [.getWord](#module_sedra.getWord) ⇒ <code>Word</code>
    * [.makeWordAttribute](#module_sedra.makeWordAttribute) ⇒ <code>WordAttribute</code>
    * [.getWordAttribute](#module_sedra.getWordAttribute) ⇒ <code>WordAttribute</code>
    * [.makeWordMorphologicalType](#module_sedra.makeWordMorphologicalType) ⇒ <code>WordMorphologicalType</code>
    * [.getWordMorphologicalType](#module_sedra.getWordMorphologicalType) ⇒ <code>WordMorphologicalType</code>

<a name="module_sedra.lexemeGrammaticalCategory"></a>

### sedra.lexemeGrammaticalCategory : <code>Array.&lt;string&gt;</code>
Lexeme Grammatical Category enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.lexemeFirstSuffix"></a>

### sedra.lexemeFirstSuffix : <code>Array.&lt;string&gt;</code>
Lexeme First Suffix enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.lexemeSecondSuffix"></a>

### sedra.lexemeSecondSuffix : <code>Array.&lt;string&gt;</code>
Second Second Suffix enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.lexemeThirdSuffix"></a>

### sedra.lexemeThirdSuffix : <code>Array.&lt;string&gt;</code>
Lexeme Third Suffix enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.lexemePrefix"></a>

### sedra.lexemePrefix : <code>Array.&lt;string&gt;</code>
Lexeme Prefix enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.lexemeRadicalType"></a>

### sedra.lexemeRadicalType : <code>Array.&lt;string&gt;</code>
Lexeme Radical Type enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.lexemeForm"></a>

### sedra.lexemeForm : <code>Array.&lt;string&gt;</code>
Lexeme Form enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.getLexeme"></a>

### sedra.getLexeme ⇒ <code>Lexeme</code>
Lexeme records, e.g. 1:2,0:2,"ABA",41960448,16
Id is the position in the array so it is not stored

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>Lexeme</code> - Sedra Lexeme row  

| Param | Type | Description |
| --- | --- | --- |
| rootId | <code>number</code> | Root Address, e.g. 2 |
| lexeme | <code>string</code> | e.g. "ABA" |
| morphologicalType | <code>number</code> | 32-bit map |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedra.makeLexemeAttribute"></a>

### sedra.makeLexemeAttribute ⇒ <code>LexemeAttribute</code>
Build Lexeme Attribute object

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>LexemeAttribute</code> - Lexeme Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| seyame | <code>boolean</code> | true if root has seyame |
| wordType | <code>string</code> | word type enumeration |
| grammaticalCategory | <code>string</code> | grammatical category enumeration |
| listing | <code>boolean</code> | not clear yet what this is used for |

<a name="module_sedra.getLexemeAttribute"></a>

### sedra.getLexemeAttribute ⇒ <code>LexemeAttribute</code>
Get Lexeme Attribute object from lexeme attribute bit map

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>LexemeAttribute</code> - Lexeme Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedra.makeLexemeMorphologicalType"></a>

### sedra.makeLexemeMorphologicalType ⇒ <code>LexemeMorphologicalType</code>
Build Lexeme Morphological Type object

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
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

<a name="module_sedra.getLexemeMorphologicalType"></a>

### sedra.getLexemeMorphologicalType ⇒ <code>LexemeMorphologicalType</code>
Get Lexeme Morphological Type object from lexeme bit map

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>LexemeMorphologicalType</code> - Lexeme Morphological Type object  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>number</code> | Morphological Type 32-bit map |

<a name="module_sedra.getEnglish"></a>

### sedra.getEnglish ⇒ <code>English</code>
English meaning, e.g. 3:165,1:97,"cause","without","","",0,0
Id is the position in the array so it is not stored

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
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

<a name="module_sedra.getEtymology"></a>

### sedra.getEtymology ⇒ <code>Etymology</code>
Etymology records, e.g. 4:1,1:1,"a\255h\256r",5
Id is the position in the array so it is not stored

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>Etymology</code> - Sedra Etymology row  

| Param | Type | Description |
| --- | --- | --- |
| lexemeId | <code>number</code> | Lexeme address, e.g. 1 |
| word | <code>string</code> | Word Origin, e.g. "a\255h\256r" |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedra.getRoot"></a>

### sedra.getRoot ⇒ <code>Root</code>
Root records, e.g. 0:2,"AB","ab           |A",0
Id is the position in the containing array so it is not stored

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>Root</code> - Sedra Root row  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | e.g. "AB" |
| sort | <code>string</code> | e.g. "ab          |A" |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedra.makeRootAttribute"></a>

### sedra.makeRootAttribute ⇒ <code>RootAttribute</code>
Build Root Attribute object

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>RootAttribute</code> - Root Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| seyame | <code>boolean</code> | true if root has seyame |
| rootType | <code>string</code> | word type enumeration |

<a name="module_sedra.getRootAttribute"></a>

### sedra.getRootAttribute ⇒ <code>RootAttribute</code>
Get Root Attribute object from root attribute bit map

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>RootAttribute</code> - Root Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedra.wordSuffixGender"></a>

### sedra.wordSuffixGender : <code>Array.&lt;string&gt;</code>
Word Suffix Gender enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.wordSuffixPerson"></a>

### sedra.wordSuffixPerson : <code>Array.&lt;string&gt;</code>
Word Suffix Person enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.wordSuffixNumber"></a>

### sedra.wordSuffixNumber : <code>Array.&lt;string&gt;</code>
Word Suffix Number enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.wordSuffixType"></a>

### sedra.wordSuffixType : <code>Array.&lt;string&gt;</code>
Word Suffix Type enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.wordGender"></a>

### sedra.wordGender : <code>Array.&lt;string&gt;</code>
Word Gender enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.wordPerson"></a>

### sedra.wordPerson : <code>Array.&lt;string&gt;</code>
Word Person enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.wordNumber"></a>

### sedra.wordNumber : <code>Array.&lt;string&gt;</code>
Word Number enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.wordState"></a>

### sedra.wordState : <code>Array.&lt;string&gt;</code>
Word State enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.wordTense"></a>

### sedra.wordTense : <code>Array.&lt;string&gt;</code>
Word Tense enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.wordForm"></a>

### sedra.wordForm : <code>Array.&lt;string&gt;</code>
Word Form enumeration

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.getWord"></a>

### sedra.getWord ⇒ <code>Word</code>
Word records, e.g. 2:8,1:2,"ABHOH;","AaB,oHaOH_;",7405716,129
Id is the position in the array so it is not stored

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>Word</code> - Sedra Word row  

| Param | Type | Description |
| --- | --- | --- |
| lexemeId | <code>number</code> | Lexeme Address, e.g. 2 |
| word | <code>string</code> | Word, e.g. "ABHOH;" |
| vocalised | <code>string</code> | Vocalised Word, e.g. "AaB,oHaOH_;" |
| morphologicalType | <code>number</code> | 32-bit map |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedra.makeWordAttribute"></a>

### sedra.makeWordAttribute ⇒ <code>WordAttribute</code>
Build Word Attribute object

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>WordAttribute</code> - Word Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| seyame | <code>boolean</code> | true if word has seyame |
| listing | <code>number</code> | Undocumented |
| enclitic | <code>\*</code> | true if word has enclitics |
| lexeme | <code>boolean</code> | true if current word is lexeme |

<a name="module_sedra.getWordAttribute"></a>

### sedra.getWordAttribute ⇒ <code>WordAttribute</code>
Get Word Attribute object from word attribute bit map

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>WordAttribute</code> - Word Attribute object  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedra.makeWordMorphologicalType"></a>

### sedra.makeWordMorphologicalType ⇒ <code>WordMorphologicalType</code>
Build Word Morphological Type object

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
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

<a name="module_sedra.getWordMorphologicalType"></a>

### sedra.getWordMorphologicalType ⇒ <code>WordMorphologicalType</code>
Get Word Morphological Type object from word bit map

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>WordMorphologicalType</code> - Word Morphological Type object  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>number</code> | Morphological Type 32-bit map |

