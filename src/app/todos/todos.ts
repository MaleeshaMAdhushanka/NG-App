import { Component, inject, OnInit } from '@angular/core';
import { Todos } from '../services/todos';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
//which is life cycle loop and we are not really
//OnInit allow me to have a function which runs when the component is initiated
export class TodosComponent implements OnInit {
  todoService = inject(Todos);

  ngOnInit(): void {
      console.log(this.todoService.todoItems);
      
  }
}
