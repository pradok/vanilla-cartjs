const calculateDiscountPrice = require('../calculateDiscountPrice');

describe('calculateDiscountPrice', () => {
  it('should return discounted price', () => {
    expect(calculateDiscountPrice(20, 10)).toEqual(2);
  })
});