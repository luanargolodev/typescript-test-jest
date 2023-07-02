import Product from "../products/product";
import Cart from "./cart";

describe("Cart", () => {
  it("should empty cart", () => {
    const cart = new Cart();
    expect(cart.isEmpty()).toBe(true);
  });

  it("should has one item in cart", () => {
    const cart = new Cart();
    const product = new Product("product", 10);
    cart.addItem(product);
  });
});
