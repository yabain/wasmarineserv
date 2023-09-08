import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Navire } from 'src/app/models/navire.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  items: Observable<Navire[]> = of([
    new Navire('Navire 1', 'assets/navire2.jpg'),
    new Navire('Navire 2', 'assets/navire2.jpg'),
    // Autres objets Navire avec les valeurs appropriées pour taille et holds
  ]);
  
 
  constructor() { }
//   getNombreProduits(navireId: number): number {
//     return Math.floor(Math.random() * 10) + 1;
// }
}
