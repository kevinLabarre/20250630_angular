import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './interfaces/user.interface';
import { ApiResponse } from './interfaces/apiResponse.interface';
import { User as UserModel } from './models/user.model';
import { DirectiveIfComponent } from "./components/directive-if/directive-if.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  imports: [DirectiveIfComponent],
  // template: "<h1>Bienvenue sur angular</h1>",
  // styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() {
    this.demoGetterAndSetter()
  }

  title: any = "Bienvenue sur angular" // any accepte tous les types existant

  multiType?: string  // Attention, "?" indique que la variable peut être undefined
  // multiType: string | undefined

  // Permet de 'forcer' en indiquant à typescript que la variable sera TOUJOURS un nombre
  // Attention, à utiliser "minutieusement"
  myVar!: number

  displayTitle(): string {
    // this.title = 5  // impossible avec Typescript d'avoir du typage dynamique
    return this.title
  }

  alert(): void {
    alert("Bienvenue !")

    // Avec le type 'unknown', on ne peut pas accéder aux propriétés de l'objet que après après vérfié son type
    if (this.user instanceof UserModel) {
      console.log(this.user.id)
    }

  }

  user: unknown = {
    id: 1,
    name: "John",
    age: 30,
  }

  role: "admin" | "user" | "super-admin" = "admin"
  role2: Role = Role.ADMIN

  table: string[] = ["Riri", "Fifi", "Loulou"]

  // user: { id: number, name: string, age: number } = {
  //   id: 1,
  //   name: "John",
  //   age: 30,
  // }

  user2: User = {
    id: 1,
    name: "John",
    age: 30,
  }

  apiResponse?: ApiResponse<User>

  user3: UserModel = new UserModel(1, "John", 30)

  demoGetterAndSetter() {
    const id = this.user3.id
    this.user3.id = 100
  }

}

enum Role {
  ADMIN = "admin",
  USER = "user",
  SUPER_ADMIN = "super-admin"
}
