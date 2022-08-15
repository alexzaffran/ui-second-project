import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user/models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public usersList: UserModel[] = [];
  users: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  // searchUser(name: string) {
  // this.usersList = this.users.filter(
  // (x) => x.name.startsWith(name) || x.email.startsWith(name)
  // );
}
