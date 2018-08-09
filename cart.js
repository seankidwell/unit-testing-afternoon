const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(carObj) {
    this.cart.push(carObj);
    this.total += carObj.price
  },

  removeFromCart: function(index, price) {
    this.cart.splice(index,1);
    this.total -= price;
  },
  
  checkout: function() {
    this.cart = [];
    this.total = 0;
  }
};