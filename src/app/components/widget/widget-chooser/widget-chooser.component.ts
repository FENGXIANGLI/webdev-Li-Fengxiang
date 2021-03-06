import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;

  constructor(
    private widgetService: WidgetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
      }
    );
  }

  createWidget(widgetType: String) {
    var newWidget = this.widgetService.initialWidget();
    if (widgetType === "YOUTUBE") {
      newWidget.url = "https://www.youtube.com/embed/AM2Ivdi9c4E";
    }

    if (widgetType === "IMAGE") {
      newWidget.url = "http://lorempixel.com/400/200/";
    }
    newWidget.widgetType = widgetType;

    this.widgetService.createWidget(this.pageId, newWidget).subscribe(
      (widget: Widget) => {

        const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + widget._id;
        this.router.navigate([url]);
      }
    );
  }

}
