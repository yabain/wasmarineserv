import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, StatusBarBackgroundColorOptions, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Navire } from './models/navire.model';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  monNavire!:Navire;
  constructor(
  private  platform: Platform,
    private router: Router,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    
   ) {
    
    this.initializeApp();
   
    
   }
   initializeApp(){
  this. platform.ready().then(() => {
     
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigateByUrl("splash")

    
    });
  
   }

  ngOnInit(){
   this.monNavire = new Navire(
    'navire',
    'imageUrl'
   );
  }

  
}
