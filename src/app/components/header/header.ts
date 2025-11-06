import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

// this mean that this service can only be used  inside the header Component
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
   title = signal('My First angular app');
}
