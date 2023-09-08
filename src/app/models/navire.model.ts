export class Navire{
  id:number;
  name:string;
  imageUrl:string;  
  taille: number;
  holds: { name: string; quantity: number; weight: number; price: number; }[];
  constructor(name:string,imageUrl:string){
    this.name = name;
    this.imageUrl = imageUrl;
  }
}
