import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoDockerPage } from './logo-docker.page';

const routes: Routes = [
  {
    path: '',
    component: LogoDockerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoDockerPageRoutingModule {}
