const lexicon = {
  0: 'BUOY',
  1: 'COMPUTER',
  2: 'CONNOISSEUR',
  3: 'DEHYDRATE',
  4: 'FUZZY',
  5: 'HUBBUB',
  6: 'KEYHOLE',
  7: 'QUAGMIRE',
  8: 'SLITHER',
  9: 'ZIRCON',
  getWord(i) {
    if (this[i]) {
      return this[i]
    } else {
      throw new Error('getWord: illegal index')
    }
  },
  getWordCount() {
    return Object.values(this).filter((val) => typeof val === 'string').length;
  }
}

module.exports(lexicon);
