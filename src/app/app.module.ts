import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilPageModule } from './profil/profil.module';
import { LogoDockerPage } from './logo-docker/logo-docker.page';
import { ProfilPage } from './profil/profil.page';
import { HttpClientModule } from '@angular/common/http';
import { SettingsPageModule } from './settings/settings.module';
import { MessagePage } from './message/message.page';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  declarations: [AppComponent
 
  
],
  entryComponents: [],
  imports: [
    BrowserModule,
   IonicModule.forRoot(),
   AppRoutingModule,
   HttpClientModule,
   SettingsPageModule,
   RouterModule
  
   
  ],
  exports:[],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   
],
  bootstrap: [AppComponent],
})


export class AppModule {}
