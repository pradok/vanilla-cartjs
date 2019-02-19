const parser = {
    quantity: value => {
        value = parseInt(value, 10);
        if (isNaN(value) || !value) {
            value = 1;
        }
        return value;
    },
    amount: value => {
        return parseFloat(value) || 0;
    }
};

module.exports = parser;