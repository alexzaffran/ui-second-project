import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() public user?: UserModel;
  isDisplay=false;


  constructor() {}

  ngOnInit(): void {}

showOtherData(){
  this.isDisplay = !this.isDisplay
}
}


