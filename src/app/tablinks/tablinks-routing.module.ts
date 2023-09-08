import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children:[
      // {
      //   path: 'home',
      //   loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      // },
      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'logo-docker',
        loadChildren: () => import('../logo-docker/logo-docker.module').then( m => m.LogoDockerPageModule)
      },
      {
        path: 'message',
        loadChildren: () => import('../message/message.module').then( m => m.MessagePageModule)
      },

      // {
      //   path: '',
      //   redirectTo: '/tablinks/profil',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: '',
    redirectTo: 'tablinks/profil',
    pathMatch: 'full'
  },
  {
    path: 'item/:id',
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
