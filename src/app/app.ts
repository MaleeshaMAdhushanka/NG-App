import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , Header],
  template: `
   
   <app-header/>
   <main>
    <router-outlet/>
       <!-- <app-home/> -->

   </main>


  `,
  styles: [`
     main {
      padding: 16px;

     }
    `],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
