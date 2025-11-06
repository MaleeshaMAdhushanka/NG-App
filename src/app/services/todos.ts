import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

//which mean that the service can be injected

//i can inject this in other places
@Injectable({
  providedIn: 'root',
})
export class Todos {
  todoItems: Array<Todo> = [{
    title: 'grocery shopping',
    id: 0,
    userId: 1,
    completed: false,
  }, {
    title: 'car wash',
    id: 1,
    userId: 1,
    completed: false,

  },

];
  constructor() { }
}
