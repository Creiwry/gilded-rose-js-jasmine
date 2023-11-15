const { Shop, Item } = require('../src/gilded_rose');

describe('normal item', () => {
  it('decreases in quality by 1 each day', () => {
    const gildedRose = new Shop([new Item('Telecaster', 2, 20)]);
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(19);
  });

  it('decreases in quality by 2 each day after sell by', () => {
    const gildedRose = new Shop([new Item('Telecaster', 0, 20)]);
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(18);
  });

  it('never has a negative quality value', () => {
    const gildedRose = new Shop([new Item('Telecaster', 2, 0)]);
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(0);
  });
});

describe('conjured item', () => {
  it('decreases in quality by 2 each day', () => {
    const gildedRose = new Shop([new Item('Conjured Item', 2, 20)]);
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(18);
  });

  it('decreases in quality by 4 each day after sell by', () => {
    const gildedRose = new Shop([new Item('Conjured Item', 0, 20)]);
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(16);
  });

  it('never has a negative quality value', () => {
    const gildedRose = new Shop([new Item('Conjured Item', 2, 0)]);
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(0);
  });
});

describe('Sulfuras', () => {
  it('Never decreases in quality', () => {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 2, 80)]);
    const initialQuality = gildedRose.items[0].quality;
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(initialQuality);
  });
});

describe('Brie', () => {
  it('increases in quality the older it gets', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 20, 20)]);
    const initialQuality = gildedRose.items[0].quality;
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toBeGreaterThan(initialQuality);

    for (let i = 0; i < 25; i += 1) {
      gildedRose.updateQuality();
    }

    const updatedPastSellIn = gildedRose.items[0].quality;
    expect(updatedPastSellIn).toBeGreaterThan(42);
  });

  it('never has quality over 50', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 20, 20)]);
    for (let i = 0; i < 35; i += 1) {
      gildedRose.updateQuality();
    }
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(50);
  });
});

describe('Backstage Passes', () => {
  it('increases in quality the older it gets', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20)]);
    const initialQuality = gildedRose.items[0].quality;
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toBeGreaterThan(initialQuality);
  });

  it('increases in quality by 2 when there are 10 days or less', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(22);
  });

  it('increases in quality by 3 when there are 5 days or less', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(23);
  });

  it('has quality of 0 after sellIn', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(0);
  });

  it('never has quality over 50', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 49)]);
    gildedRose.updateQuality();
    const updatedQuality = gildedRose.items[0].quality;
    expect(updatedQuality).toEqual(50);
  });
});
