import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalePageRoutingModule } from './cale-routing.module';

import { CalePage } from './cale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalePageRoutingModule
  ],
  declarations: [CalePage]
})
export class CalePageModule {}
