import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from "../../Task";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent  {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();

}
