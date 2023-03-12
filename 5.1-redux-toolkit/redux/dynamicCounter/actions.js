const { DDECREMENT, DINCREMENT } = require("./actionTypes");

const dynamicIncrement = (value) => {
    return {
        type: DINCREMENT,
        payload: value
    };
};

const dynamicDecrement = (value) => {
    return {
        type: DDECREMENT,
        payload: value
    };
};

module.exports = {
    dynamicIncrement,
    dynamicDecrement,
};
