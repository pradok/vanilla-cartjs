const Chair = require('./Chair');

const createProducts = (productCode, name, price) => {
  const code = productCode.toUpperCase();
  if (code.includes("CHAIR")) {
    return code.startsWith("DIS_10") ? new Chair({productCode, name, price}, 10) :
      new Chair({productCode, name, price})
  }
};

module.exports = createProducts;