const createProductsTest = require('../createProducts');

describe('createProducts', () => {
  it('should create Product chair with discount', () => {
    const productChair = createProductsTest('DIS_10_CHAIR_RED', "Red plastic chair", 24.99);
    expect(productChair.constructor.name).toEqual('ProductChair');
    expect(productChair.priceDiscount).toBeGreaterThan(0);
  });
  it('should create Product chair with no discount', () => {
    const productChair = createProductsTest('CHAIR_RED', "Red plastic chair", 24.99);
    expect(productChair.priceDiscount).toEqual(0);
  });
});