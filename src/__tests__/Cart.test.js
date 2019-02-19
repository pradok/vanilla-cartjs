const Cart = require('../Cart');

describe('Cart class', () => {
  let shoppingCart;
  beforeEach(() => {
    shoppingCart = new Cart();
  });
  it('Cart class is defined', () => {
    expect(shoppingCart).toBeDefined();
    expect(shoppingCart.add).toBeDefined();
    expect(shoppingCart.remove).toBeDefined();
    jest.spyOn(shoppingCart, 'totalPrice', 'get').mockReturnValue(true);
    expect(shoppingCart.totalPrice).toEqual(true);
    jest.spyOn(shoppingCart, 'loyaltyPoints', 'get').mockReturnValue(true);
    expect(shoppingCart.loyaltyPoints).toEqual(true);
  });
});