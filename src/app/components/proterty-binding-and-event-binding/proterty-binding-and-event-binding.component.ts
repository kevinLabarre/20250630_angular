import { Component } from '@angular/core';

@Component({
  selector: 'app-proterty-binding-and-event-binding',
  imports: [],
  templateUrl: './proterty-binding-and-event-binding.component.html',
  styleUrl: './proterty-binding-and-event-binding.component.css'
})
export class ProtertyBindingAndEventBindingComponent {
  imgSrc: string = "favicon.ico"

  buttonDesabled: boolean = false

  handleClick() {
    alert("j'ai cliqué !!")
  }

}
