import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { UserModel } from '../user/models/user.model';

@Injectable()
export class UserService {
  public usersList: UserModel[] = [];
  constructor(private http: HttpClient) {}

  getUsersList() {
    return this.usersList;
  }

  fetchUsersList() {
    return this.http.get<UserModel[]>('http://localhost:8000/api/user');
  }

  getOneUser(id: string) {
    const usersFound = this.usersList.filter((u) => u._id === id);
    if (usersFound.length > 0) return usersFound[0];
    else return null;
  }

  setUsersList(users: UserModel[]) {
    this.usersList = users;
  }
}
