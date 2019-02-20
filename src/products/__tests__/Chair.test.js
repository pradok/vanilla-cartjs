const Chair = require('../Chair');

describe('Chair class', () => {
  let chair;
  const productData = {
    productCode: 'CHAIR_RED',
    name: 'Red plastic chair',
    price: 20,
    priceDiscount: 0,
  };
  beforeEach(() => {
    chair = new Chair(productData, 10, 'plastic');
  });
  it('should set the correct instance', () => {
    expect(chair instanceof Chair).toBeTruthy();
    expect(chair.productCode).toEqual('CHAIR_RED');
    expect(chair.priceDiscount).toEqual(2);
    expect(chair.material).toEqual('plastic');
  });

});