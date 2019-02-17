"use strict";

/**
* Calculates total price and total loyalty points earned by the customer.
* Products with product code starting with DIS_10 have a 10% discount applied.
* Products with product code starting with DIS_15 have a 15% discount applied.
* Loyalty points are earned more when the product is not under any offer.
    - Customer earns 1 point on every $5 purchase.
    - Customer earns 1 point on every $10 spent on a product with 10% discount.
    - Customer earns 1 point on every $15 spent on a product with 15% discount.
*/

const discounts = function(productCode) {
  let discount = 0;
  if(item.productCode.startsWith("DIS_10")){
    discount = item.price * 0.1;
  } else if(item.productCode.startsWith("DIS_15")){
    discount = item.price * 0.15;
  }
};

const ShoppingCart = function(items) {
  this.defaultLoyalty = 5;
  this.discounts = {
    'DIS_10': 10,
    'DIS_15': 15,
    'DIS_20': 20,
  };
  this.cartItems = {
    'CHAIR_RED': {
      quantity: 1,
      price: 24.99,
      name: 'Red plastic chair',
      discount: 0
    }
  };
  function checkout() {
    var totalPrice = 0;
    var loyaltyPoints = 0;
    items.forEach(function(item) {
      var discount = 0;
      if(item.productCode.startsWith("DIS_10")){
        discount = item.price * 0.1;
        loyaltyPoints += (item.price / 10);
      } else if(item.productCode.startsWith("DIS_15")){
        discount = item.price * 0.15;
        loyaltyPoints += (item.price / 15);
      } else {
        loyaltyPoints += (item.price / 5);
      }
      totalPrice += item.price - discount;
    });
    return { totalPrice: totalPrice, loyaltyPoints: loyaltyPoints };
  }

  return {
    checkout: checkout
  }
};

ShoppingCart.prototype.addToCart = function(product, quantity = 1) {
  if (this.cartItems[product.productCode]) {
    this.cartItems[product.productCode].quantity += quantity;
  } else {
    const {price, name} = product;
    this.cartItems[product.productCode] = {
      quantity,
      price,
      name,
      discount: this.calculateDiscount()
    }
  }
};

ShoppingCart.prototype.checkoutTotals = function() {
  const cartItems = Object.keys(this.cartItems);
  let loyaltyPoints = 0;
  let totalPrice = 0;
  cartItems.forEach(item => {
    const price = item.price * quantity;
    let discount = 0;
    switch (code) {
      case 'DIS_10':
        loyaltyPoints += this.calculateLoyalty(price, this.discounts['DIS_10']);
        discount = this.calculateDiscount(price, this.discounts['DIS_10']);
        break;
      case 'DIS_15':
        loyaltyPoints += this.calculateLoyalty(price, this.discounts['DIS_15']);
        discount = this.calculateDiscount(price, this.discounts['DIS_15']);
        break;
      case 'DIS_20':
        loyaltyPoints += this.calculateLoyalty(price, this.discounts['DIS_20']);
        discount = this.calculateDiscount(price, this.discounts['DIS_20']);
        break;
      default:
        loyaltyPoints += this.calculateLoyalty(price);
    }
    totalPrice += item.price - discount;
  });
  return {
    loyaltyPoints
  }
};

ShoppingCart.prototype.applyDiscount = function (productCode, price) {
  let discount = 0;
  if(productCode.startsWith("DIS_10")){
    discount = this.calculateDiscount(price, this.discounts['DIS_10']);
  } else if(productCode.startsWith("DIS_15")){
    discount = this.calculateDiscount(price, this.discounts['DIS_15']);
  } else if(productCode.startsWith("DIS_20")){
    discount = this.calculateDiscount(price, this.discounts['DIS_20']);
  }
  return discount;
};

ShoppingCart.prototype.calculateLoyalty = function(price, discount = this.defaultLoyalty) {
  return price / discount
};

ShoppingCart.prototype.calculateDiscount = function(price, discount) {
  return price * (discount/100)
};

module.exports = ShoppingCart;
