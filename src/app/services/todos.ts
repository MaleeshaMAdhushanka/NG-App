import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

//which mean that the service can be injected

//i can inject this in other places
@Injectable({
  providedIn: 'root',
})
export class Todos {
  http = inject(HttpClient);
//   todoItems: Array<Todo> = [{
//     title: 'grocery shopping',
//     id: 0,
//     userId: 1,
//     completed: false,
//   }, {
//     title: 'car wash',
//     id: 1,
//     userId: 1,
//     completed: false,

//   },

// ];
//in this function we are going to return an array of todos 
  getTodosFromApi(){
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
