import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-directive-for',
  imports: [],
  templateUrl: './directive-for.component.html',
  styleUrl: './directive-for.component.css'
})
export class DirectiveForComponent {

  users: User[] = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 35 },
  ]

  names: string[] = ["Riri", "Fifi", "Loulou"]

}
