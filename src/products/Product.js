class Product {
  constructor(productData) {
    const {productCode, name, price, priceDiscount, quantity} = productData;
    if (!productCode || !name) {
      throw new Error('Cannot create instance of Product, missing values in productData: productCode and name');
    }
    this.productCode = productCode;
    this.name = name;
    this.price = price || 0;
    this.priceDiscount = priceDiscount || 0;
    this.quantity = quantity || 1;
  }
}

module.exports = Product;