import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Navire } from '../models/navire.model';
import { NavireserviceService } from '../services/navireservice.service';

@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.page.html',
  styleUrls: ['./enregistrement.page.scss'],
})
export class EnregistrementPage {
  isSaving: boolean = false;
  nomNavire: string;
  imageNavire: string;
  holds:any[] = [];
Navire=[]
  constructor(
    private router: Router,
    private navireserviceService: NavireserviceService
  ) {}
    ngOnInit(): void{
      this.Navire = this.navireserviceService.navire
    }
  enregistrerNavire() {
    this.isSaving = true;
    const nouveauNavire: Navire = {
      name: this.nomNavire,
      imageUrl: this.imageNavire,
      holds: this.holds,
      taille: 0,
      id: 0
    };

    this.navireserviceService.ajouterNavire(nouveauNavire);

    this.router.navigate(['/logo-docker']);
  }
  addHold() {
    this.holds.push({ name: '', quantity: null, weight: null, price: null });
  }

  removeHold(index: number) {
    this.holds.splice(index, 1);
  }
  
}