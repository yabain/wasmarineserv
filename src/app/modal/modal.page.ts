import { Component, Input, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
@Input() nomproduit:string;
@Input() quantitesproduit:number;
@Input() prixproduit:number
  constructor(public modalCtrl:ModalController,
    ) { }

  ngOnInit() {
  }
  async openModal(){
    const modal = await this.modalCtrl.create({
      component:ModalPage,
      cssClass:'my-custom-class',
      swipeToClose:true,
      presentingElement: await this.modalCtrl.getTop(),
      componentProps:{
        'nomproduit':'riz',
        'quantitesproduit':12,
          'prixproduit':125000,
      }, 
    });

  }
  closeModal(){
    this.modalCtrl.dismiss({    
                    'dismissed': true  
                });
      }   
  }

 

