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
  
    // Effectuer les opérations de création de produit ici
    // Par exemple, vous pouvez ajouter le nouveau produit dans une liste ou le sauvegarder dans une base de données
  
    // Afficher un message de succès
    const toast = await this.toastCtrl.create({
      message: 'Produit créé avec succès',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  
    // Rediriger vers la page précédente
    this.navCtrl.pop();
  }

}
