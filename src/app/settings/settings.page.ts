import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  currentDate: string;
  products: any[];
  initialProducts: any[] = [
    { name: 'produit1: (quantites:12) ', image: 'assets/categories.webp' },
    { name: 'produit2 : (quantites:14)', image: 'assets/navire.jpg' },
    { name: 'produit3: (quantites:12)', image: 'assets/navire4.jpg' },
    { name: 'produit4: (quantites:12)', image: 'assets/categories.webp' },
    { name: 'produit5: (quantites:12)', image: 'assets/categories.webp' },
    { name: 'produit6: (quantites:12)', image: 'assets/categories.webp' }
  ];
 

  constructor(public modalCtrl: ModalController,private router:Router) {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    this.currentDate = date.toLocaleDateString('fr-FR');
  }

  ngOnInit() {
    this.products = [...this.initialProducts];
  }

  selectedProduct(product: any): void {
    this.selectedProduct = product;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'nomproduit': 'riz',
        'quantitesproduit': 12,
        'prixproduit': 125000,
      },
      presentingElement: await this.modalCtrl.getTop()
    });
    return await modal.present();
  }

  addProduct() {
    const newProduct = {
      name: "Nouveau produit",
      image: "chemin/vers/l/image.jpg",
      
      
    };
    this.initialProducts.push(newProduct);
    this.products = [...this.initialProducts];
    this.router.navigateByUrl('/createproduct');
  }
}