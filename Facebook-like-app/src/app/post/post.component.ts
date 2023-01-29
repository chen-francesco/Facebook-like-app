import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Post } from './post.model'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @HostBinding('attr.class') cssClass = 'card';
  @Input() post:Post;

  constructor() {
    this.post = new Post("","");
  }
  addVote():boolean{
    this.post.voteUp()
    return false
  }

  ngOnInit() {}
}