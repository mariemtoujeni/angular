import { todo } from './../core/todo';
import { Component, OnInit } from '@angular/core';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTodo!:todo[]
  res!:number

  constructor(private t:CalculService) { }

  ngOnInit(): void {
    this.listTodo=[
      {"userId": 1, "id": 1, "title": "delectus aut autem", "completed":false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officiaqui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed":false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab","completed": true}];
  }

  functionBilan(){
       this.res=this.t.getNumberOf(this.listTodo,'completed',true)

  }

}
