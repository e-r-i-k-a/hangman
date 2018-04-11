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
    let word = this[i] ? this[i] : new Error('invalid index');
    return word;
  },
  removeWord(i) {
    delete this[i];
  },
  getWordCount() {
    return Object.values(this).filter((val) => typeof val === 'string').length;
  }
}

module.exports = lexicon;
