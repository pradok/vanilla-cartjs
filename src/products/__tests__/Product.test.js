const Product = require('../Product');

describe ('Product class', () => {
    let productBase;
    const productData = {
        productCode: 'CHAIR_RED',
        name: 'Red plastic chair',
        price: 20
    };
    beforeEach(() => {
        productBase = new Product(productData);
    });
    it('should set the correct instance', () => {
        expect(productBase).toBeDefined();
        expect(productBase.productCode).toEqual('CHAIR_RED');
        expect(productBase.name).toEqual('Red plastic chair');
        expect(productBase.price).toEqual(20);
        expect(productBase.priceDiscount).toEqual(0);
        expect(productBase.quantity).toEqual(1);
    });
});