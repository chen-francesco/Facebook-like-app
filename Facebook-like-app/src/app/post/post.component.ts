import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Post } from './post.model'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css', './post.componente2.css']
})
export class PostComponent {
  @HostBinding('attr.class') cssClass = 'card';
  @Input() post:Post;

  constructor() {
    this.post = new Post("","",0,0);
  }
  ngOnInit() {}
}
