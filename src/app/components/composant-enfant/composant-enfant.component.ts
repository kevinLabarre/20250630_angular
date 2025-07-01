import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-composant-enfant',
  imports: [],
  templateUrl: './composant-enfant.component.html',
  styleUrl: './composant-enfant.component.css'
})
export class ComposantEnfantComponent {
  @Input({ required: true }) dataFromParent: string = ""
}
