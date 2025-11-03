import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss',
})
//this commponent can receive something outside
export class Greeting {
  message = input('Hello hello!');
  
}
