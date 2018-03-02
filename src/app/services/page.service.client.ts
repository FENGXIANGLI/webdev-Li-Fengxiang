

import { Page } from '../models/page.model.client';
import {Injectable} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';


@Injectable()
export class PageService {

  pages: Page[] = [
    new Page('100', 'Post 1', '111', 'Lorem' ),
    new Page('432', 'Post 2', '111', 'Lorem' ),
    new Page('543', 'Post 3', '111', 'Lorem' ),
  ];
  createWebsite(websiteId: String, page: Page) {

    const new_page = {
      _id: (new Date()).getTime() + '',
      name: page.name,
      websiteId: page.websiteId,
      title: page.title
    };

    this.pages.push(new_page);
  }

  findPageByWebsiteId(websiteId: String) {
    const resultSet = [];
    for ( const i in this.pages) {
      if (this.pages[i].websiteId === websiteId) {
        resultSet.push(this.pages[i]);
      }
    }
    return resultSet;
  }

  findPageByWebsiteId2(websiteId: String) {
    return this.pages.filter(function (page) {
      return page.websiteId === websiteId;
    });
  }

  findPageById(pageId: String) {
    return this.pages.find(function (page) {
      return page._id === pageId;
    });
  }

  updatePage(page: Page) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === page._id) {
        this.pages[i].title = page.title;
        this.pages[i].name = page.name;
        return this.pages[i];
      }
    }
  }

  deletePage(pageId: String) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        const j = +i;
        this.pages.splice(j, 1);
      }
    }
  }

  createPage(websiteId: String, page: any) {
    const set1 = new Set();

    for (const i in this.pages) {
      set1.add(this.pages[i]._id);
    }

    page._id = Math.random().toString();
    while (set1.has(page._id)) {
      page._id = Math.random().toString();
    }

    page.websiteId = websiteId;
    this.pages.push(page);
  }
}
