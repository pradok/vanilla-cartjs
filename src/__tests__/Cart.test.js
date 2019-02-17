const expect = require('expect');
const Cart = require('../Cart');

describe('Cart class', () => {
  let shoppingCart;
  beforeEach(() => {
    shoppingCart = new Cart();
  });
  it('Cart class is defined', () => {
    expect(shoppingCart).toBeDefined();
    expect(shoppingCart.add).toBeDefined();
  });
});