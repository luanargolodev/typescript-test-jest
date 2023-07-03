import Product from "../products/product";
import Cart from "./cart";

const makeCart = (): Cart => {
  return new Cart();
};

const makeProduct = (name: string, price: number): Product => {
  return new Product(name, price);
};

const makeSut = () => {
  const sut = makeCart();

  return {
    sut,
  };
};

describe("Cart", () => {
  it("should empty cart", () => {
    const { sut } = makeSut();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it("should has one item in cart", () => {
    const { sut } = makeSut();
    sut.addItem(makeProduct("Product One", 1));
    expect(sut.items.length).toBe(1);
    expect(sut.isEmpty()).toBe(false);
  });

  it("should has two items in cart", () => {
    const { sut } = makeSut();
    sut.addItem(makeProduct("Product One", 1));
    sut.addItem(makeProduct("Product Two", 1));
    expect(sut.items.length).toBe(2);
    expect(sut.isEmpty()).toBe(false);
  });

  it("should have one item if add two and remove one", () => {
    const { sut } = makeSut();
    const productOne = makeProduct("Product One", 1);
    sut.addItem(productOne);
    sut.addItem(makeProduct("Product Two", 1));
    expect(sut.items.length).toBe(2);
    sut.removeItem(productOne);
    expect(sut.items.length).toBe(1);
  });

  it("should empty if add two and remove two", () => {
    const { sut } = makeSut();
    const productOne = makeProduct("Product One", 1);
    const productTwo = makeProduct("Product Two", 1);
    sut.addItem(productOne);
    sut.addItem(productTwo);
    expect(sut.items.length).toBe(2);
    sut.removeItem(productOne);
    sut.removeItem(productTwo);
    expect(sut.isEmpty()).toBeTruthy();
  });

  it("should total equals 10, with two products", () => {
    const { sut } = makeSut();
    sut.addItem(makeProduct("Product One", 5));
    sut.addItem(makeProduct("Product Two", 5));
    expect(sut.total()).toBe(10);
  });

  it("should total equals 0, with empty cart", () => {
    const { sut } = makeSut();
    expect(sut.total()).toBe(0);
  });

  it("should clear cart", () => {
    const { sut } = makeSut();
    sut.addItem(makeProduct("Product One", 5));
    sut.addItem(makeProduct("Product Two", 5));
    sut.clear();
    expect(sut.isEmpty()).toBeTruthy();
  });
});
