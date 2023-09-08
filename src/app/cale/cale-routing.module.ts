import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalePage } from './cale.page';

const routes: Routes = [
  {
    path: '',
    component: CalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalePageRoutingModule {}
