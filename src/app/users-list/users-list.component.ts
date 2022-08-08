import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../user/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  public usersList: UserModel[] = [];
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }
}
