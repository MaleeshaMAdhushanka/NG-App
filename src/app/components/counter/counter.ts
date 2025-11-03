import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {

  counterValue = signal(0);

  //getting the current value using parenthesis
  increment() {
    // this.counterValue.set(this.counterValue () + 1);
    //using update function get the latest value and then add one to it and combine them and return
    this.counterValue.update((val) => val + 1);
  }
  decrement() {
    // this.counterValue.set(this.counterValue () - 1);
    this.counterValue.update((val) => val - 1);
  }
  reset() {
    //  this.counterValue.set(0);
    this.counterValue.set(0);
  }
  

}
