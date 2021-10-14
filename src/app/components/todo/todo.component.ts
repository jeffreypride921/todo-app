import { Component, OnInit } from '@angular/core';
import { TodoItems } from 'src/app/models/TodoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo!: TodoItems[];
  todoInput: string = "";
  colorMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.todo = [
      {
        content: "Sample to-do",
        completed: false
      }
    ]
  }

  lightMode(){
    this.colorMode = false;
  }

  darkMode(){
    this.colorMode = true;
  }

  addTodo(){
    this.todo.push({
      content: this.todoInput,
      completed: false
    })

    this.todoInput = "";
  }

  deleteTodo(id: number){
    this.todo = this.todo.filter((items, index) => index != id)
  }

  completeTodo(id: number){
    this.todo.map((items, index) => {
      if (index == id) items.completed = !items.completed;

      return items;
    })
  }

}
