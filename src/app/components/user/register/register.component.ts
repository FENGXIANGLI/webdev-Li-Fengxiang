import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  user: User;
  verifyPassword: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.userService.initialUser();
  }

  register() {
    this.errorFlag = false;

    if (this.user.password !== this.verifyPassword) {
      this.errorMsg = 'Password and Verify Password do not match.';
      this.errorFlag = true;
    } else {
      this.userService.register(this.user.username, this.user.password) .subscribe(
        (data: any) => {
          this.user = data;
          this.router.navigate(['/user/' + this.user._id]);

        },
        (error: any) => {
          this.errorMsg = error._body; }
      );
    }
  }

}
