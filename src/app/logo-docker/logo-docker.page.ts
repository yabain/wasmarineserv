import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';
import { NavireserviceService } from '../services/navireservice.service';

@Component({
  selector: 'app-logo-docker',
  templateUrl: './logo-docker.page.html',
  styleUrls: ['./logo-docker.page.scss'],
})
export class LogoDockerPage implements OnInit {
  slideOpts = {
    slidesPerView: 2.2,
  };
  slideOpts1 = {
    slidesPerView: 1.3,
  };
  navireItems: any[] = [];
  featuredItems: any[] = [];
  nombreTotalProduits: number = 0;

  constructor(public apiService: ApiService, private router: Router,
    private navireserviceService:NavireserviceService) {}

    ngOnInit() {
      this.apiService.items.subscribe(navires => {
        this.navireItems = navires;
        this.featuredItems = this.navireItems.map((item) => {
          return {
            ...item,
            nombreProduits: 0,
          };
        });
      });
    }

  getNombreProduits(navireId: number): number {
    const item = this.featuredItems.find((item) => item.id === navireId);
    if (item) {
      return item.nombreProduits;
    } else {
      return 0;
    }
  }

  calculateTotalProducts(): void {
    this.nombreTotalProduits = this.featuredItems.reduce((total, item) => {
      return total + item.nombreProduits;
    }, 0);
  }

  createNavire() {
    this.navireserviceService.getNavires().subscribe(navire => {
      this.navireItems.push(navire);
    });
    console.log("Création d'un nouveau navire");
    this.router.navigate(['/enregistrement']);
  }

  addProduct(navireId: number) {
    const item = this.featuredItems.find((item) => item.id === navireId);
    if (item) {
      item.nombreProduits++;
      this.calculateTotalProducts();
    }
  }

  searchNavire(event: Event) {
    const customEvent = event as CustomEvent<any>;
    if (customEvent && customEvent.detail) {
      const value = customEvent.detail.value as string;
      console.log('Recherche du navire :', value);
    }
  }

  goToCreateCale() {
    this.router.navigate(['/cale']);
  }
}