import {EventEmitter , Component, Input, OnInit, Output } from '@angular/core';
import { Todo} from "../../Todo"; 

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:Todo;

@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onclick(todo:Todo)
  {
    this.todoDelete.emit(todo);
    console.log("delete");
    
  }
}
