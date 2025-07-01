import { Component } from '@angular/core';
import { TableProductComponent } from '../table-product/table-product.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice-fruits',
  imports: [TableProductComponent, FormsModule],
  templateUrl: './exercice-fruits.component.html',
  styleUrl: './exercice-fruits.component.css'
})
export class ExerciceFruitsComponent {

  produits: any[] = [
    { id: 1, nom: 'Pomme', quantite: 0, type: 'fruit', prix: 1.2 },
    { id: 2, nom: 'Banane', quantite: 6, type: 'fruit', prix: 0.9 },
    { id: 3, nom: 'Orange', quantite: 8, type: 'fruit', prix: 1.5 },
    { id: 4, nom: 'Fraise', quantite: 20, type: 'fruit', prix: 2.5 },
    { id: 5, nom: 'Carotte', quantite: 0, type: 'legume', prix: 0.8 },
    { id: 6, nom: 'Tomate', quantite: 12, type: 'legume', prix: 1.0 },
    { id: 7, nom: 'Poivron', quantite: 5, type: 'legume', prix: 1.3 },
    { id: 8, nom: 'Brocoli', quantite: 0, type: 'legume', prix: 1.8 }
  ];

  // EXEMPLE 1

  displayHorsSotck: boolean = false
  constructor() {
    this.handleCheckBox()
  }
  legumes: any[] = []
  fruits: any[] = []

  handleCheckBox() {

    console.log("Clique sur la checkbox !!!")

    this.fruits = this.produits.filter(p => {

      if (this.displayHorsSotck) {
        return p.type === "fruit"
      } else {
        return p.type === "fruit" && p.quantite > 0
      }
    })

    this.legumes = this.produits.filter(p => {

      if (this.displayHorsSotck) {
        return p.type === "legume"
      } else {
        return p.type === "legume" && p.quantite > 0
      }
    })
  }

  // EXEMPLE 2:

  displayHorsSotck2: boolean = false
  get fruitsGetter() {
    return this.getFiltredProducts("fruit")
  }

  get legumesGetter() {
    return this.getFiltredProducts("legume")
  }

  getFiltredProducts(type: string) {
    return this.produits.filter(p => {

      if (this.displayHorsSotck2) {
        return p.type === type
      } else {
        return p.type === type && p.quantite > 0
      }
    })
  }

}

