import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs=
  [
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "tags": [],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"this is blog 1"
    },{
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "tags": [],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"this is blog 1"
    },
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "tags": [],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"this is blog 1"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
