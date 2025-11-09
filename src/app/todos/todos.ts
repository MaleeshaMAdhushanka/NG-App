import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [NgIf],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
//Alias alternate name for something else, which can be use to simply code or make it more readable
//which is life cycle loop and we are not really
//OnInit allow me to have a function which runs when the component is initiated
export class TodosComponent implements OnInit {
  todoService = inject(Todos);

  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
      // console.log(this.todoService.todoItems);
      // this.todoItems.set(this.todoService.todoItems);
      //get data from the api and set it
      this.todoService.getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })

      )
      .subscribe((todos) => {
        this.todoItems.set(todos);

      })
      
  }
}
