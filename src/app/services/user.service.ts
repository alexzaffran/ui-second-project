import { Injectable } from '@angular/core';
import { UserModel } from '../user/models/user.model';

@Injectable()
export class UserService {
  public usersList: UserModel[] = [];
  constructor() {}

  getUsersList() {
    return this.usersList;
  }

  fetchUsersList() {}

  getOneUser(id: string) {
    const usersFound = this.usersList.filter((u) => u.id === id);
    if (usersFound.length > 0) return usersFound[0];
    else return null;
  }
}
