import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule, CircleCheckBig} from "lucide-angular";
import { TaskModel } from './task.model';

@Component({
  selector: 'app-task',
  imports: [LucideAngularModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: TaskModel;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
