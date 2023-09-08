import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
  getProductsByCale(caleId: number): Product[] {
    return this.products.filter(product => product.caleid === caleId);
  }
}

export interface Product {
  id: number;
  name: string;
  quantites:number;
  caleid?:number
  // Ajoutez d'autres propriétés du produit ici
}