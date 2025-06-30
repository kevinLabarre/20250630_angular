import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-if',
  imports: [],
  templateUrl: './directive-if.component.html',
  styleUrl: './directive-if.component.css'
})
export class DirectiveIfComponent {
  displayText: boolean = false

  user = {
    name: "John",
    age: 30
  }

}
