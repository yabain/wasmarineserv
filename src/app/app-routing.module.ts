import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';


const routes: Routes = [
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'tablinks',
    loadChildren: () => import('./tablinks/tablinks.module').then(m => m.TablinksPageModule),
   
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule),
   
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule),
   
  },
  {
    path: 'enregistrement',
    loadChildren: () => import('./enregistrement/enregistrement.module').then(m => m.EnregistrementPageModule),
   
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule),

  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule),
   
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule),
 
  },
  {
    path: 'logo-docker',
    loadChildren: () => import('./logo-docker/logo-docker.module').then( m => m.LogoDockerPageModule),
    
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule),
   
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
   
  },
 
  {
    path: 'cale',
    loadChildren: () => import('./cale/cale.module').then( m => m.CalePageModule),
  
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule),
   
  },
  {
    path: 'createproduct',
    loadChildren: () => import('./createproduct/createproduct.module').then( m => m.CreateproductPageModule),
   
  },
  // {
  //   path: 'auht',
  //   loadChildren: () => import('./auht/auht.module').then( m => m.AuhtPageModule)
  // },
  // { path: 'nom', component: LoginPage, canActivate: [AuthGuard] },
  // { path: ':eamil', component: LoginPage, canActivate: [AuthGuard] },
  // { path: '', component: FaceSnapListComponent, canActivate: [AuthGuard] },
  

  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}