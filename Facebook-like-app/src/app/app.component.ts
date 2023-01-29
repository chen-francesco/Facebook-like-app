import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Facebook-like-app';
  posts: Post[];
  idIndex: number;
  idSelected: number;

  constructor(){
    this.posts = [];
    this.idIndex = 1;
    this.idSelected = 0;
  }

  addPost(autore:HTMLInputElement, testo:HTMLTextAreaElement):boolean{
    if(!(autore.value.trim() === "" || testo.value.trim() === "")){
      this.posts.push(new Post(autore.value, testo.value));
      autore.value = '';
      testo.value = '';
      this.idIndex += 1;
    }
    return false
  }

  selectPost(id: number):boolean{
    this.idSelected = id;
    return false
  }
}
