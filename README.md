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
    * [.getRoot](#module_sedra.getRoot)
    * [.getLexeme](#module_sedra.getLexeme)
    * [.getWord](#module_sedra.getWord)
    * [.getEnglish](#module_sedra.getEnglish)
    * [.getEtymology](#module_sedra.getEtymology)

<a name="module_sedra.getRoot"></a>

### sedra.getRoot
Root records, e.g. 0:2,"AB","ab           |A",0
Id is the position in the array so it is not stored

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | e.g. "AB" |
| sort | <code>string</code> | e.g. "ab          |A" |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedra.getLexeme"></a>

### sedra.getLexeme
Lexeme records, e.g. 1:2,0:2,"ABA",41960448,16
Id is the position in the array so it is not stored

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  

| Param | Type | Description |
| --- | --- | --- |
| rootId | <code>number</code> | Root Address, e.g. 2 |
| lexeme | <code>string</code> | e.g. "ABA" |
| morphologicalType | <code>number</code> | 32-bit map |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedra.getWord"></a>

### sedra.getWord
Word records, e.g. 2:8,1:2,"ABHOH;","AaB,oHaOH_;",7405716,129
Id is the position in the array so it is not stored

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  

| Param | Type | Description |
| --- | --- | --- |
| lexemeId | <code>number</code> | Lexeme Address, e.g. 2 |
| word | <code>string</code> | Word, e.g. "ABHOH;" |
| vocalised | <code>string</code> | Vocalised Word, e.g. "AaB,oHaOH_;" |
| morphologicalType | <code>number</code> | 32-bit map |
| attributes | <code>number</code> | 16-bit map |

<a name="module_sedra.getEnglish"></a>

### sedra.getEnglish
English meaning, e.g. 3:165,1:97,"cause","without","","",0,0
Id is the position in the array so it is not stored

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  

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

### sedra.getEtymology
Etymology records, e.g. 4:1,1:1,"a\255h\256r",5
Id is the position in the array so it is not stored

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  

| Param | Type | Description |
| --- | --- | --- |
| lexemeId | <code>number</code> | Lexeme address, e.g. 1 |
| word | <code>string</code> | Word Origin, e.g. "a\255h\256r" |
| attributes | <code>number</code> | 16-bit map |

