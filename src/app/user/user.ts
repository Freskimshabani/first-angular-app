import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

type UserObj = {
  id: string;
  profile: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {
  // @Input({required: true}) user!: {
  //   id: string;
  //   name: string;
  //   profile: string;
  // };
  @Input({required: true}) user!: UserObj;

  // @Input({required: true}) id!: string;
  // @Input({required: true}) profile: string = 'user-1.jpg';
  // @Input({required: true}) name: string = 'Username';

  @Output() select = new EventEmitter<string>();

  get userProfile(){
    return 'assets/users/' + this.user.profile;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
