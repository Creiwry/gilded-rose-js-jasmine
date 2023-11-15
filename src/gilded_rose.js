/* eslint-disable */

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      const name = item.name
      const updateOptions = {
        'Conjured Item': () => { return this.conjuredItemUpdate(item) }, 
        'Sulfuras, Hand of Ragnaros': () => { return },
        'Aged Brie': () => { return this.agedBrieUpdate(item) },
        'Backstage passes to a TAFKAL80ETC concert': () => { return this.backstagePassUpdate(item) },
      };

      updateOptions[name] ? updateOptions[name](item) : this.defaultItemUpdate(item);
      item.sellIn -= 1; 
    });
  }

  agedBrieUpdate(item) {
    if (item.quality === 50) {
      item.quality;
    } else {
      item.quality += 1;
    } 
  }

  backstagePassUpdate(item) {
    if (item.quality === 50 || item.quality === 49) {
      item.quality = 50;
    } else if (item.sellIn <= 5 && item.quality === 48) {
      item.quality = 50;
    } else if (item.sellIn === 0 ){
      item.quality = 0;
    } else if (item.sellIn <= 5) {
      item.quality += 3;
    } else if (item.sellIn <= 10) {
      item.quality += 2;
    } else {
      item.quality += 1;
    } 
  }

  defaultItemUpdate(item) {
    if (item.quality === 0) {
      item.quality;
    } else if (item.sellIn <= 0 ){
      item.quality -= 2;
    } else {
      item.quality -= 1;
    }
  }

  conjuredItemUpdate(item) {
    if (item.quality === 0 || item.quality === 1) {
      item.quality = 0;
    } else if (item.sellIn <= 0 ){
      item.quality -= 4;
    } else {
      item.quality -= 2;
    }
  }
}

module.exports = {
  Item,
  Shop,
};

