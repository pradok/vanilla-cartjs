const Product = require('./Product');
const calculateDiscountPrice = require('../utils/calculateDiscountPrice');

class ProductChair extends Product {
  constructor(productData, discount = 0, material = '') {
    super(productData);
    this.priceDiscount = calculateDiscountPrice(productData.price, discount);
    this.material = material;
  }
}

module.exports = ProductChair;