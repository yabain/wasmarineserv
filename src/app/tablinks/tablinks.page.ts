import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {
selectedTab : any;
@ViewChild ('tabs',{static:false}) tabs:IonTabs
  constructor() { }

  ngOnInit() {
  }
  setCurebtTab(){
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }

}
