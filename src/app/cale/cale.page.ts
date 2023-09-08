import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavireserviceService } from '../services/navireservice.service';
interface CaleType {
  number: number;
  totalProducts: number;
}
@Component({
  selector: 'app-cale',
  templateUrl: './cale.page.html',
  styleUrls: ['./cale.page.scss'],
})
export class CalePage implements OnInit {
 
  hold1: CaleType = { number: null, totalProducts: 45 };
  hold2: CaleType = { number: null, totalProducts: 56 };
  hold3: CaleType = { number: null, totalProducts: 120 };
  hold4: CaleType = { number: null, totalProducts: 90 };
  hold5: CaleType = { number: null, totalProducts: 200 };
  hold6: CaleType = { number: null, totalProducts: 230 };
  constructor( private router:Router) {}
ngOnInit(): void {
    
}
goToSettings(caleNumber: number) {
  this.router.navigate(['/settings', caleNumber]);
}
 
 
}


