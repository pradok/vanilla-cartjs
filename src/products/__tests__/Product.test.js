const Product = require('../Product');

describe ('Product class', () => {
    let productBase;
    beforeEach(() => {
        productBase = new Product
    });
    it('Product class is defined', () => {
        expect(productBase).toBeDefined();
        expect(productBase.productCode).toBeDefined();
        expect(productBase.name).toBeDefined();
        expect(productBase.price).toBeDefined();
        expect(productBase.priceDiscount).toBeDefined();
        expect(productBase.quantity).toBeDefined();
    });
});