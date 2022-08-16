import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';
import { Form } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  @Input() public user?: UserModel = new UserModel();
  isDisplay = false;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  showOtherData() {
    this.isDisplay = !this.isDisplay;
  }
  updateUser() {
    const body = { ...this.user };
    delete body._id;
    this.http
      .put('http://localhost:8000/api/user/' + this.user._id, body)
      .subscribe((response: UserModel) => {
        this.userService.updateUser(response)
      });
  }

  deleteUser() {
    const userid = this.user._id
    this.userService.deleteUser(userid)
    console.log(userid)
  }
}
