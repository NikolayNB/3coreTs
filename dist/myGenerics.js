"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
;
function identityTwo(val) {
    return val;
}
;
function identityThree(val) {
    return val;
}
;
//identityThree(5);
function identityFour(val) {
    return val;
}
identityFour({ brand: 'Coca-Cola', type: 1 });
function getSearchProducts(products) {
    //some API call
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //some API call
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, { connection: 'localhost', username: 'root', password: '1234' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
