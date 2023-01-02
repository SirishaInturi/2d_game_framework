import { Product } from './product';

export class Store {
  constructor(provider) {
    this.provider = provider;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  async purchase(product) {
    await this.provider.purchase(product);
  }
}
