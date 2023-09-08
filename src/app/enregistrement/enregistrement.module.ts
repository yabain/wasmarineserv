import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnregistrementPageRoutingModule } from './enregistrement-routing.module';

import { EnregistrementPage } from './enregistrement.page';
import { HttpClientModule } from '@angular/common/http';
import {  Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: EnregistrementPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnregistrementPageRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnregistrementPage]
})
export class EnregistrementPageModule {}
