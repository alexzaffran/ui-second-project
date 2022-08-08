import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
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
    this.userService.fetchUsersList().subscribe({
      next: (resp) => {
        this.userService.setUsersList(resp);
        this.usersList = this.userService.getUsersList();
      },
      error: (err) => console.error(err),
    });
  }
}
