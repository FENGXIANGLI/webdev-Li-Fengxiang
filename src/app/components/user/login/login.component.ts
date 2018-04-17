import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import {environment} from '../../../../environments/environment';

import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  baseUrl = environment.baseUrl;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService
  ) {}


  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    // calling client side userservice to send login information
    console.log('data', this.username);
    this.userService.login(this.username, this.password)
      .subscribe(
        (user: any) => {
          this.sharedService.user = user;
          this.errorFlag = false;
          this.router.navigate(['/user', user._id]);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  navigateToFacebook() {
    this.errorFlag = false;
    window.location.href = this.baseUrl + '/facebook/login';
  }

  ngOnInit() {
  }

}
