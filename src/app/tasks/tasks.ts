import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from "./task/task";
import { LucideAngularModule, Plus} from 'lucide-angular';
import { TASKS } from './dummy-tasks';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [LucideAngularModule, Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) name!: string;
  @Input({required: true}) selectedUserId!: string;
  isAddingTask: boolean = false;

  tasks = TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.selectedUserId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
}
