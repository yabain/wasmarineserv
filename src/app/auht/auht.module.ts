import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuhtPageRoutingModule } from './auht-routing.module';

import { AuhtPage } from './auht.page';
import { LoginPage } from '../login/login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuhtPageRoutingModule
  ],
  declarations: [AuhtPage
 ]
})
export class AuhtPageModule {}
