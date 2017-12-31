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
 * @param { object } stats Book statistics { chapters, verses, words }
 * @return { Book } Book object
 */
export const makeBook = (id, peshittaId, name, vocalised, english, stats) =>
  Object.freeze(
    Object.create(bookPrototype, {
      id: { value: id, enumerable: true },
      peshittaId: { value: peshittaId, enumerable: true },
      name: { value: name, enumerable: true },
      vocalised: { value: vocalised, enumerable: true },
      english: { value: english, enumerable: true },
      stats: { value: stats, enumerable: true }
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
  m(51, 51, '', '', ['New Testament', 'NT'], {
    books: 27,
    chapters: 260,
    verses: 7958,
    words: 109654
  }),
  m(52, 52, 'mty', "mat'ay", ['Matthew', 'Mt', 'Matt', 'Mat'], {
    chapters: 28,
    verses: 1071,
    words: 13980,
    chapter: {
      1: { verses: 25, words: 290 },
      2: {
        verses: 23,
        words: 335
      },
      3: {
        verses: 17,
        words: 239
      },
      4: {
        verses: 25,
        words: 317
      },
      5: {
        verses: 48,
        words: 621
      },
      6: {
        verses: 34,
        words: 486
      },
      7: {
        verses: 29,
        words: 365
      },
      8: {
        verses: 34,
        words: 451
      },
      9: {
        verses: 38,
        words: 470
      },
      10: {
        verses: 42,
        words: 547
      },
      11: {
        verses: 30,
        words: 379
      },
      12: {
        verses: 50,
        words: 675
      },
      13: {
        verses: 58,
        words: 788
      },
      14: {
        verses: 36,
        words: 428
      },
      15: {
        verses: 39,
        words: 490
      },
      16: {
        verses: 28,
        words: 397
      },
      17: {
        verses: 27,
        words: 389
      },
      18: {
        verses: 35,
        words: 513
      },
      19: {
        verses: 30,
        words: 453
      },
      20: {
        verses: 34,
        words: 440
      },
      21: {
        verses: 46,
        words: 672
      },
      22: {
        verses: 46,
        words: 490
      },
      23: {
        verses: 39,
        words: 513
      },
      24: {
        verses: 51,
        words: 595
      },
      25: {
        verses: 46,
        words: 589
      },
      26: {
        verses: 75,
        words: 983
      },
      27: {
        verses: 66,
        words: 799
      },
      28: {
        verses: 20,
        words: 266
      }
    }
  }),
  m(53, 53, 'mrqws', 'marqwOs', ['Mark', 'Mk', 'Mrk', 'Mar', 'Mr'], {
    chapters: 16,
    verses: 678,
    words: 8793,
    chapter: {
      1: {
        verses: 45,
        words: 511
      },
      2: {
        verses: 28,
        words: 400
      },
      3: {
        verses: 35,
        words: 380
      },
      4: {
        verses: 41,
        words: 517
      },
      5: {
        verses: 43,
        words: 531
      },
      6: {
        verses: 56,
        words: 766
      },
      7: {
        verses: 37,
        words: 476
      },
      8: {
        verses: 38,
        words: 494
      },
      9: {
        verses: 50,
        words: 695
      },
      10: {
        verses: 52,
        words: 702
      },
      11: {
        verses: 33,
        words: 467
      },
      12: {
        verses: 44,
        words: 628
      },
      13: {
        verses: 37,
        words: 485
      },
      14: {
        verses: 72,
        words: 945
      },
      15: {
        verses: 47,
        words: 546
      },
      16: {
        verses: 20,
        words: 250
      }
    }
  }),
  m(54, 54, 'lwq)', 'lwuqo)', ['Luke', 'Lk', 'Luk'], {
    chapters: 24,
    verses: 1151,
    words: 15234,
    chapter: {
      1: {
        verses: 80,
        words: 831
      },
      2: {
        verses: 52,
        words: 625
      },
      3: {
        verses: 38,
        words: 494
      },
      4: {
        verses: 44,
        words: 582
      },
      5: {
        verses: 39,
        words: 567
      },
      6: {
        verses: 49,
        words: 703
      },
      7: {
        verses: 50,
        words: 716
      },
      8: {
        verses: 56,
        words: 866
      },
      9: {
        verses: 62,
        words: 877
      },
      10: {
        verses: 42,
        words: 606
      },
      11: {
        verses: 54,
        words: 797
      },
      12: {
        verses: 59,
        words: 825
      },
      13: {
        verses: 35,
        words: 510
      },
      14: {
        verses: 35,
        words: 484
      },
      15: {
        verses: 32,
        words: 424
      },
      16: {
        verses: 31,
        words: 477
      },
      17: {
        verses: 37,
        words: 460
      },
      18: {
        verses: 43,
        words: 579
      },
      19: {
        verses: 48,
        words: 600
      },
      20: {
        verses: 47,
        words: 563
      },
      21: {
        verses: 38,
        words: 452
      },
      22: {
        verses: 71,
        words: 853
      },
      23: {
        verses: 56,
        words: 714
      },
      24: {
        verses: 53,
        words: 629
      }
    }
  }),
  m(55, 55, 'ywxnn', 'ywuxanon', ['John', 'Jn', 'Joh', 'Jhn'], {
    chapters: 21,
    verses: 879,
    words: 12409,
    chapter: {
      1: {
        verses: 51,
        words: 629
      },
      2: {
        verses: 25,
        words: 311
      },
      3: {
        verses: 36,
        words: 533
      },
      4: {
        verses: 54,
        words: 734
      },
      5: {
        verses: 47,
        words: 675
      },
      6: {
        verses: 71,
        words: 947
      },
      7: {
        verses: 53,
        words: 700
      },
      8: {
        verses: 59,
        words: 887
      },
      9: {
        verses: 41,
        words: 575
      },
      10: {
        verses: 42,
        words: 564
      },
      11: {
        verses: 57,
        words: 734
      },
      12: {
        verses: 50,
        words: 680
      },
      13: {
        verses: 38,
        words: 583
      },
      14: {
        verses: 31,
        words: 444
      },
      15: {
        verses: 27,
        words: 368
      },
      16: {
        verses: 33,
        words: 455
      },
      17: {
        verses: 26,
        words: 376
      },
      18: {
        verses: 40,
        words: 633
      },
      19: {
        verses: 42,
        words: 640
      },
      20: {
        verses: 31,
        words: 452
      },
      21: {
        verses: 25,
        words: 489
      }
    }
  }),
  m(56, 56, 'prksys', 'praksyis', ['Acts', 'Ac', 'Act'], {
    chapters: 28,
    verses: 1007,
    words: 15385,
    chapter: {
      1: {
        verses: 26,
        words: 414
      },
      2: {
        verses: 47,
        words: 633
      },
      3: {
        verses: 26,
        words: 378
      },
      4: {
        verses: 37,
        words: 544
      },
      5: {
        verses: 42,
        words: 646
      },
      6: {
        verses: 15,
        words: 213
      },
      7: {
        verses: 60,
        words: 862
      },
      8: {
        verses: 40,
        words: 590
      },
      9: {
        verses: 43,
        words: 670
      },
      10: {
        verses: 48,
        words: 712
      },
      11: {
        verses: 30,
        words: 416
      },
      12: {
        verses: 25,
        words: 412
      },
      13: {
        verses: 52,
        words: 744
      },
      14: {
        verses: 28,
        words: 420
      },
      15: {
        verses: 41,
        words: 565
      },
      16: {
        verses: 40,
        words: 620
      },
      17: {
        verses: 34,
        words: 609
      },
      18: {
        verses: 28,
        words: 457
      },
      19: {
        verses: 41,
        words: 672
      },
      20: {
        verses: 38,
        words: 558
      },
      21: {
        verses: 40,
        words: 651
      },
      22: {
        verses: 30,
        words: 471
      },
      23: {
        verses: 35,
        words: 541
      },
      24: {
        verses: 27,
        words: 421
      },
      25: {
        verses: 27,
        words: 450
      },
      26: {
        verses: 32,
        words: 522
      },
      27: {
        verses: 44,
        words: 676
      },
      28: {
        verses: 31,
        words: 518
      }
    }
  }),
  m(57, 60, 'r*hwmy)', 'r*h_wumoye)', ['Romans', 'Ro', 'Rom', 'Rm'], {
    chapters: 16,
    verses: 433,
    words: 5768,
    chapter: {
      1: {
        verses: 32,
        words: 424
      },
      2: {
        verses: 29,
        words: 407
      },
      3: {
        verses: 31,
        words: 324
      },
      4: {
        verses: 25,
        words: 326
      },
      5: {
        verses: 21,
        words: 317
      },
      6: {
        verses: 23,
        words: 293
      },
      7: {
        verses: 25,
        words: 390
      },
      8: {
        verses: 39,
        words: 518
      },
      9: {
        verses: 33,
        words: 432
      },
      10: {
        verses: 21,
        words: 260
      },
      11: {
        verses: 36,
        words: 501
      },
      12: {
        verses: 21,
        words: 271
      },
      13: {
        verses: 14,
        words: 234
      },
      14: {
        verses: 23,
        words: 336
      },
      15: {
        verses: 33,
        words: 412
      },
      16: {
        verses: 27,
        words: 323
      }
    }
  }),
  m(
    58,
    61,
    '). qwr*ynty)',
    '). qwOr*yint,oye)',
    [
      '1 Corinthians',
      '1Co',
      '1 Cor',
      '1 Co',
      'I Co',
      'I Cor',
      'I Corinthians',
      '1Cor',
      '1Corinthians',
      '1st Corinthians',
      'First Corinthians'
    ],
    {
      chapters: 16,
      verses: 437,
      words: 5987,
      chapter: {
        1: {
          verses: 31,
          words: 382
        },
        2: {
          verses: 16,
          words: 224
        },
        3: {
          verses: 23,
          words: 309
        },
        4: {
          verses: 21,
          words: 301
        },
        5: {
          verses: 13,
          words: 200
        },
        6: {
          verses: 20,
          words: 293
        },
        7: {
          verses: 40,
          words: 619
        },
        8: {
          verses: 13,
          words: 190
        },
        9: {
          verses: 27,
          words: 422
        },
        10: {
          verses: 33,
          words: 420
        },
        11: {
          verses: 34,
          words: 471
        },
        12: {
          verses: 31,
          words: 425
        },
        13: {
          verses: 13,
          words: 185
        },
        14: {
          verses: 40,
          words: 565
        },
        15: {
          verses: 58,
          words: 703
        },
        16: {
          verses: 24,
          words: 278
        }
      }
    }
  ),
  m(
    59,
    62,
    'b. qwr*ynty)',
    'b. qwOr*yint,oye)',
    [
      '2 Corinthians',
      '2Co',
      '2 Cor',
      '2 Co',
      'II Co',
      'II Cor',
      'II Corinthians',
      '2Cor',
      '2Corinthians',
      '2nd Corinthians',
      'Second Corinthians'
    ],
    {
      chapters: 13,
      verses: 257,
      words: 3737,
      chapter: {
        1: {
          verses: 24,
          words: 356
        },
        2: {
          verses: 17,
          words: 230
        },
        3: {
          verses: 18,
          words: 248
        },
        4: {
          verses: 18,
          words: 259
        },
        5: {
          verses: 21,
          words: 286
        },
        6: {
          verses: 18,
          words: 221
        },
        7: {
          verses: 16,
          words: 275
        },
        8: {
          verses: 24,
          words: 316
        },
        9: {
          verses: 15,
          words: 223
        },
        10: {
          verses: 18,
          words: 273
        },
        11: {
          verses: 33,
          words: 466
        },
        12: {
          verses: 21,
          words: 369
        },
        13: {
          verses: 14,
          words: 215
        }
      }
    }
  ),
  m(60, 63, 'glTy*)', 'goloToy*e)', ['Galatians', 'Ga', 'Gal'], {
    chapters: 6,
    verses: 149,
    words: 1940,
    chapter: {
      1: {
        verses: 24,
        words: 301
      },
      2: {
        verses: 21,
        words: 348
      },
      3: {
        verses: 29,
        words: 401
      },
      4: {
        verses: 31,
        words: 376
      },
      5: {
        verses: 26,
        words: 297
      },
      6: {
        verses: 18,
        words: 217
      }
    }
  }),
  m(61, 64, ')psy*)', ')epEsy*e)', ['Ephesians', 'Ep', 'Eph', 'Ephes'], {
    chapters: 6,
    verses: 155,
    words: 1774,
    chapter: {
      1: {
        verses: 23,
        words: 257
      },
      2: {
        verses: 22,
        words: 267
      },
      3: {
        verses: 21,
        words: 223
      },
      4: {
        verses: 32,
        words: 357
      },
      5: {
        verses: 33,
        words: 379
      },
      6: {
        verses: 24,
        words: 291
      }
    }
  }),
  m(
    62,
    65,
    'pylypsy*)',
    'pyilyipEsoy*e)',
    ['Philippians', 'Pp', 'Phil', 'Php'],
    {
      chapters: 4,
      verses: 104,
      words: 1326,
      chapter: {
        1: {
          verses: 30,
          words: 371
        },
        2: {
          verses: 30,
          words: 377
        },
        3: {
          verses: 21,
          words: 295
        },
        4: {
          verses: 23,
          words: 283
        }
      }
    }
  ),
  m(63, 66, 'qwl*sy)', 'qwl*sy)', ['Colossians', 'Co', 'Col'], {
    chapters: 4,
    verses: 95,
    words: 1133,
    chapter: {
      1: {
        verses: 29,
        words: 356
      },
      2: {
        verses: 23,
        words: 283
      },
      3: {
        verses: 25,
        words: 284
      },
      4: {
        verses: 18,
        words: 210
      }
    }
  }),
  m(
    64,
    67,
    '). tsl*wnyqy)',
    "). t'esol*wOnyiqoye)",
    [
      '1 Thessalonians',
      '1Th',
      '1 Thess',
      '1 Thes',
      '1 Th',
      'I Thess',
      'I Thes',
      'I Th',
      'I Thessalonians',
      '1Thess',
      '1Thes',
      '1Thessalonians',
      '1st Thessalonians',
      '1st Thess',
      'First Thessalonians',
      'First Thess'
    ],
    {
      chapters: 5,
      verses: 89,
      words: 1117,
      chapter: {
        1: {
          verses: 10,
          words: 139
        },
        2: {
          verses: 20,
          words: 299
        },
        3: {
          verses: 13,
          words: 171
        },
        4: {
          verses: 18,
          words: 240
        },
        5: {
          verses: 28,
          words: 268
        }
      }
    }
  ),
  m(
    65,
    68,
    'b. tsl*wnyqy)',
    "b. t'esol*wOnyiqoye)",
    [
      '2 Thessalonians',
      '2Th',
      '2 Thess',
      '2 Thes',
      '2 Th',
      'II Thess',
      'II Thes',
      'II Th',
      'II Thessalonians',
      '2Thess',
      '2Thes',
      '2Thessalonians',
      '2nd Thessalonians',
      '2nd Thess',
      'Second Thessalonians',
      'Second Thess'
    ],
    {
      chapters: 3,
      verses: 47,
      words: 609,
      chapter: {
        1: {
          verses: 12,
          words: 156
        },
        2: {
          verses: 17,
          words: 228
        },
        3: {
          verses: 18,
          words: 225
        }
      }
    }
  ),
  m(
    66,
    69,
    '). Tymt)ws',
    '). Tyimote)wOs',
    [
      '1 Timothy',
      '1Ti',
      '1 Tim',
      '1 Ti',
      'I Ti',
      'I Tim',
      'I Timothy',
      '1Tim',
      '1Timothy',
      '1st Timothy',
      '1st Tim',
      'First Timothy',
      'First Tim'
    ],
    {
      chapters: 6,
      verses: 113,
      words: 1507,
      chapter: {
        1: {
          verses: 20,
          words: 273
        },
        2: {
          verses: 15,
          words: 168
        },
        3: {
          verses: 16,
          words: 213
        },
        4: {
          verses: 16,
          words: 185
        },
        5: {
          verses: 25,
          words: 342
        },
        6: {
          verses: 21,
          words: 326
        }
      }
    }
  ),
  m(
    67,
    70,
    'b. Tymt)ws',
    'b. Tyimote)wOs',
    [
      '2 Timothy',
      '2Ti',
      '2 Tim',
      '2 Ti',
      'II Ti',
      'II Tim',
      'II Timothy',
      '2Tim',
      '2Timothy',
      '2nd Timothy',
      '2nd Tim',
      'Second Timothy',
      'Second Tim'
    ],
    {
      chapters: 4,
      verses: 83,
      words: 1040,
      chapter: {
        1: {
          verses: 18,
          words: 236
        },
        2: {
          verses: 26,
          words: 347
        },
        3: {
          verses: 17,
          words: 207
        },
        4: {
          verses: 22,
          words: 250
        }
      }
    }
  ),
  m(68, 71, 'TTws', 'TETwOs', ['Titus', 'Ti', 'Tit'], {
    chapters: 3,
    verses: 46,
    words: 644,
    chapter: {
      1: {
        verses: 16,
        words: 245
      },
      2: {
        verses: 15,
        words: 178
      },
      3: {
        verses: 15,
        words: 221
      }
    }
  }),
  m(69, 72, 'pylmwn', 'pyilemwOn', ['Philemon', 'Pm', 'Philem', 'Phm'], {
    chapters: 1,
    verses: 25,
    words: 277,
    chapter: {
      1: {
        verses: 25,
        words: 277
      }
    }
  }),
  m(70, 73, '(br*y)', '(eb,r*oye)', ['Hebrews', 'Hb', 'Heb'], {
    chapters: 13,
    verses: 303,
    words: 4288,
    chapter: {
      1: {
        verses: 14,
        words: 187
      },
      2: {
        verses: 18,
        words: 264
      },
      3: {
        verses: 19,
        words: 225
      },
      4: {
        verses: 16,
        words: 242
      },
      5: {
        verses: 14,
        words: 209
      },
      6: {
        verses: 20,
        words: 252
      },
      7: {
        verses: 28,
        words: 404
      },
      8: {
        verses: 13,
        words: 224
      },
      9: {
        verses: 28,
        words: 454
      },
      10: {
        verses: 39,
        words: 487
      },
      11: {
        verses: 40,
        words: 585
      },
      12: {
        verses: 29,
        words: 434
      },
      13: {
        verses: 25,
        words: 321
      }
    }
  }),
  m(71, 57, 'y(qwb', 'ya(qwOb,', ['James', 'Jm', 'Jas'], {
    chapters: 5,
    verses: 108,
    words: 1444,
    chapter: {
      1: {
        verses: 27,
        words: 326
      },
      2: {
        verses: 26,
        words: 358
      },
      3: {
        verses: 18,
        words: 249
      },
      4: {
        verses: 17,
        words: 233
      },
      5: {
        verses: 20,
        words: 278
      }
    }
  }),
  m(
    72,
    58,
    '). k)p)',
    "). k'e)p,o)",
    [
      '1 Peter',
      '1P',
      '1 Pet',
      '1 Pe',
      '1 Pt',
      '1 P',
      'I Pe',
      'I Pt',
      'I Pet',
      'I Peter',
      '1Pe',
      '1Pt',
      '1Pet',
      '1Peter',
      '1st Peter',
      'First Peter'
    ],
    {
      chapters: 5,
      verses: 105,
      words: 1535,
      chapter: {
        1: {
          verses: 25,
          words: 363
        },
        2: {
          verses: 25,
          words: 357
        },
        3: {
          verses: 22,
          words: 352
        },
        4: {
          verses: 19,
          words: 268
        },
        5: {
          verses: 14,
          words: 195
        }
      }
    }
  ),
  m(
    73,
    74,
    'b. k)p)',
    "b. k'e)p,o)",
    [
      '2 Peter',
      '2P',
      '2 Pet',
      '2 Pe',
      '2 Pt',
      '2 P',
      'II Pe',
      'II Pt',
      'II Pet',
      'II Peter',
      '2Pet',
      '2Pe',
      '2Pt',
      '2Peter',
      '2nd Peter',
      'Second Peter'
    ],
    {
      chapters: 3,
      verses: 61,
      words: 1028,
      chapter: {
        1: {
          verses: 21,
          words: 349
        },
        2: {
          verses: 22,
          words: 371
        },
        3: {
          verses: 18,
          words: 308
        }
      }
    }
  ),
  m(
    74,
    59,
    '). ywxnn',
    '). ywuxanon',
    [
      '1 John',
      '1J',
      '1 Jhn',
      '1 Jn',
      '1 J',
      'I Jo',
      'I Jn',
      'I Joh',
      'I Jhn',
      'I John',
      '1Jo',
      '1Jn',
      '1Jhn',
      '1Joh',
      '1John',
      '1st John',
      'First John'
    ],
    {
      chapters: 5,
      verses: 105,
      words: 1547,
      chapter: {
        1: {
          verses: 10,
          words: 143
        },
        2: {
          verses: 29,
          words: 448
        },
        3: {
          verses: 24,
          words: 341
        },
        4: {
          verses: 21,
          words: 323
        },
        5: {
          verses: 21,
          words: 292
        }
      }
    }
  ),
  m(
    75,
    75,
    'b. ywxnn',
    'b. ywuxanon',
    [
      '2 John',
      '2J',
      '2 Jhn',
      '2 Jn',
      '2 J',
      'II Jo',
      'II Jn',
      'II Joh',
      'II Jhn',
      'II John',
      '2Jo',
      '2Jn',
      '2Jhn',
      '2Joh',
      '2John',
      '2nd John',
      'Second John'
    ],
    {
      chapters: 1,
      verses: 13,
      words: 197,
      chapter: {
        1: {
          verses: 13,
          words: 197
        }
      }
    }
  ),
  m(
    76,
    76,
    'g. ywxnn',
    'g. ywuxanon',
    [
      '3 John',
      '3J',
      '3 Jhn',
      '3 Jn',
      '3 J',
      '3Jo',
      'III Jo',
      'III Jn',
      'III Joh',
      'III Jhn',
      'III John',
      '3Jn',
      '3Jhn',
      '3Joh',
      '3John',
      '3rd John',
      'Third John'
    ],
    {
      chapters: 1,
      verses: 15,
      words: 211,
      chapter: {
        1: {
          verses: 15,
          words: 211
        }
      }
    }
  ),
  m(77, 77, 'yhwd)', 'yihwudo)', ['Jude', 'Jd', 'Jud'], {
    chapters: 1,
    verses: 25,
    words: 415,
    chapter: {
      1: {
        verses: 25,
        words: 415
      }
    }
  }),
  m(
    78,
    78,
    'glyn)',
    "g'Elyono)",
    ['Revelation', 'Re', 'Rev', 'Apocalypse', 'Apoc'],
    {
      chapters: 22,
      verses: 404,
      words: 6329,
      chapter: {
        1: {
          verses: 20,
          words: 298
        },
        2: {
          verses: 29,
          words: 441
        },
        3: {
          verses: 22,
          words: 361
        },
        4: {
          verses: 11,
          words: 209
        },
        5: {
          verses: 14,
          words: 221
        },
        6: {
          verses: 17,
          words: 268
        },
        7: {
          verses: 17,
          words: 280
        },
        8: {
          verses: 13,
          words: 190
        },
        9: {
          verses: 21,
          words: 296
        },
        10: {
          verses: 11,
          words: 175
        },
        11: {
          verses: 19,
          words: 306
        },
        12: {
          verses: 17,
          words: 261
        },
        13: {
          verses: 18,
          words: 285
        },
        14: {
          verses: 20,
          words: 351
        },
        15: {
          verses: 8,
          words: 145
        },
        16: {
          verses: 21,
          words: 302
        },
        17: {
          verses: 18,
          words: 294
        },
        18: {
          verses: 24,
          words: 383
        },
        19: {
          verses: 21,
          words: 332
        },
        20: {
          verses: 15,
          words: 237
        },
        21: {
          verses: 27,
          words: 411
        },
        22: {
          verses: 21,
          words: 283
        }
      }
    }
  )
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

const bookByEnglish = {};

/**
 * @static
 * Get book object by English name, short or full
 * @param { string } name book English full or short name
 * @returns { Book } Book object from books array
 */
export const getBookByEnglish = name => {
  if (
    Object.keys(bookByEnglish).length === 0 &&
    bookByEnglish.constructor === Object
  ) {
    for (let id = 52; id < 79; id++) {
      const book = getBook(id);
      for (let i = 0, len = book.english.length; i < len; i++) {
        bookByEnglish[book.english[i].toLowerCase()] = book;
      }
    }
    Object.freeze(bookByEnglish);
  }
  return bookByEnglish[(name || '').toLowerCase()];
};

const bookEnglishNames = [];
/**
 * @static
 * Get the list of English book names, short and full.
 * @returns { Array } sorted list of book English names
 */
export const getBookEnglishNames = () => {
  if (!bookEnglishNames.length) {
    for (let book = 52; book < 79; book++) {
      bookEnglishNames.push(...getBook(book).english);
      bookEnglishNames.sort();
    }
    Object.freeze(bookEnglishNames);
  }
  return bookEnglishNames;
};

const namedReferences = [];
/**
 * @static
 * Get named reference list combining all supported name options
 * @returns { Array } list of named references
 */
export const getNamedReferences = () => {
  if (!namedReferences.length) {
    for (let id = 52; id < 79; id++) {
      const book = getBook(id);
      for (let i = 0, len = book.english.length; i < len; i++) {
        const name = book.english[i];
        const short = book.englishShortName;
        namedReferences.push({ value: short, label: name });
        for (
          let chapter = 1, clen = book.stats.chapters;
          chapter <= clen;
          chapter++
        ) {
          namedReferences.push({
            value: `${short}/${chapter}`,
            label: `${name} ${chapter}`
          });
          for (
            let verse = 1, vlen = book.stats.chapter[chapter].verses;
            verse <= vlen;
            verse++
          ) {
            namedReferences.push({
              value: `${short}/${chapter}/${verse}`,
              label: `${name} ${chapter}:${verse}`
            });
          }
        }
      }
    }
    Object.freeze(namedReferences);
  }
  return namedReferences;
};

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

/**
 * Get an index by verse reference, leaving out chapter reference indexes
 * @static
 * @param { object } reference {book:number, chapter:number, verse:number} reference
 * @param { object } ubs NT Peshitta object hash
 * @returns { number } index
 */
export const getIndexByVerseWoChapter = ({ book, chapter, verse }, ubs) => {
  const b = ubs[book];
  if (!b) {
    return 0;
  }
  let ci = chapter && chapter > 0 ? chapter : 1;
  if (ci > b.chapters) {
    ci = b.chapters;
  }
  const c = b[ci];
  let vi = verse && verse > 0 ? verse : 1;
  if (vi > c.verses) {
    vi = c.verses;
  }
  return c.rollupVerses + (vi - 1);
};

/**
 * Get an index by verse reference with chapter references included
 * @static
 * @param { object } reference {book:number, chapter:number, verse:number} reference
 * @param { object } ubs NT Peshitta object hash
 * @returns { number } index
 */
export const getIndexByVerse = ({ book, chapter, verse }, ubs) => {
  const b = ubs[book];
  if (!b) {
    return 0;
  }
  let ci = chapter && chapter > 0 ? chapter : 1;
  if (ci > b.chapters) {
    ci = b.chapters;
  }
  const c = b[ci];
  let vi = verse && verse > 0 ? verse : 0;
  if (vi > c.verses) {
    vi = c.verses;
  }
  return c.rollupChapters + c.rollupVerses + vi;
};
