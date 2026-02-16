import { Component, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-new-task',
  imports: [LucideAngularModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();

  onAddTask() {}

  onCancelTask() {
    this.cancel.emit();
  }
}
