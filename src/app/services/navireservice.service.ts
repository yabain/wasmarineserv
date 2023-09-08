import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Navire } from '../models/navire.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavireserviceService {

  navire: Navire[] = [];
  shipName: string;
  shipSize: string;

  constructor(private http: HttpClient) { }

  enregistrerNavire(navire: Navire) {
    this.navire.push(navire)
  }
  ajouterNavire(navire:Navire) {
    this.navire.push(navire);
  }

  getNavires(): Observable<Navire[]> {
    return of(this.navire);
  }
  
}