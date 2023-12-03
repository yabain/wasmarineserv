import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.page.html',
  styleUrls: ['./createproduct.page.scss'],
})
export class CreateproductPage implements OnInit {
productName:string;
productprix: number;
productquantites: number;
productpoids: number;
  constructor( private navCtrl:NavController,private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async createProduct(){
    if (!this.productName || !this.productprix || !this.productpoids || !this.productquantites) {
      const toast = await this.toastCtrl.create({
        message: 'Veuillez remplir tous les champs',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
      return;
    }
  
    
    const toast = await this.toastCtrl.create({
      message: 'Produit créé avec succès',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
    this.navCtrl.pop();
  }

}
