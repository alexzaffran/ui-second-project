import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../user/models/user.model';

@Component({
  selector: 'app-other-data',
  templateUrl: './other-data.component.html',
  styleUrls: ['./other-data.component.css'],
})
export class OtherDataComponent implements OnInit {
  @Input() public user?: UserModel;
  constructor() {}

  ngOnInit(): void {}
}
