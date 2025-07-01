import { Component, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-compteur',
  imports: [],
  templateUrl: './compteur.component.html',
  styleUrl: './compteur.component.css'
})
export class CompteurComponent {
  count: number = 0

  countSignal: WritableSignal<number> = signal(0)

  increment() {
    this.count++
    this.countSignal.update((prevValue) => prevValue + 1)
  }

  decrement() {
    this.count--
    this.countSignal.update((prevValue) => prevValue - 1)
  }

  reset() {
    this.count = 0
    this.countSignal.set(0)
  }
}
