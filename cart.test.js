const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties:', () => {
  test('cart should default to empty array', () => {
    expect(Array.isArray(cart.cart)).toEqual(true);
    expect(cart.cart.length).toEqual(0)
  })
  test('Total should default to 0', () => {
    expect(cart.total).toEqual(0)
  })
})

describe('Cart Methods:', () => {
  afterEach(() => {
    cart.cart = [];
    cart.total = 0;
  })
  test('addToCart should extend cart by 1', () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    
    expect(cart.cart.length).toEqual(2);
    expect(cart.cart[0]).toEqual(cars[0]);
    expect(cart.cart[1]).toEqual(cars[1]);
  })
  test('addToCart should increase total', () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[8]);
    cart.addToCart(cars[2]);

    expect(cart.total).toEqual(cars[0].price+cars[8].price+cars[2].price)
  })

  test('removeFromCart should remove car from cart', () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);

    cart.removeFromCart(1, cars[1].price)

    expect(cart.cart.length).toEqual(2);
    expect(cart.cart[0]).toEqual(cars[0]);
    expect(cart.cart[1]).toEqual(cars[2]);
  })
  test('removeFromCart should decrease total', () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[8]);
    cart.addToCart(cars[2]);

    cart.removeFromCart(2, cars[2].price);
    cart.removeFromCart(0, cars[0].price);

    expect(cart.total).toEqual(cars[8].price)
  })

  test('checkout should revert cart and total to default', () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);

    cart.checkout()

    expect(cart.cart.length).toEqual(0);
    expect(cart.total).toEqual(0);
  })
})