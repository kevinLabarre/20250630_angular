import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  inputValue: string = "";
  checkboxValue: boolean = false

  reset() {
    this.inputValue = "";
  }

  handleChange() {
    console.log(this.inputValue)
  }

}
