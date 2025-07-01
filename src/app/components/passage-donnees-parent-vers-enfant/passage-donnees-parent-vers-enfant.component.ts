import { Component } from '@angular/core';
import { ComposantEnfantComponent } from "../composant-enfant/composant-enfant.component";

@Component({
  selector: 'app-passage-donnees-parent-vers-enfant',
  imports: [ComposantEnfantComponent],
  templateUrl: './passage-donnees-parent-vers-enfant.component.html',
  styleUrl: './passage-donnees-parent-vers-enfant.component.css'
})
export class PassageDonneesParentVersEnfantComponent {
  text: string = "Données passé par le parent"
}
