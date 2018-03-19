import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})

export class WebsiteListComponent implements OnInit {

  userId: String;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
      }
    );

    this.websiteService.findWebsitesById(this.userId).subscribe(
      (websites: Website[]) => {
        console.log('here=====');
        this.websites = websites;
      }
    );
  }


  // this.userService.findUserByCredentials(username, this.password)
  //   .subscribe((user: User) => {
  //     if (user) {
  //     console.log(user);
  //     this.router.navigate(['/profile', user._id ]);
  //   }
  // });
}








