import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoDockerPageRoutingModule } from './logo-docker-routing.module';

import { LogoDockerPage } from './logo-docker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoDockerPageRoutingModule
  ],
  declarations: [LogoDockerPage]
})
export class LogoDockerPageModule {}
