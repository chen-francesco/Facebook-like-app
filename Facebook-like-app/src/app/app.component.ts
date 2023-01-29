import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Facebook-like-app';
  posts: Post[];      //list of posts
  idIndex: number;    //upcoming post id  
  idSelected: number; //selected post id 
  commenting: boolean = false;  //if it's posting a comment

  constructor(){
    this.posts = [];
    this.idIndex = 1;
    this.idSelected = 0;
  }

  addPost(autore:HTMLInputElement, testo:HTMLTextAreaElement):boolean{
    if(!(autore.value.trim() === "" || testo.value.trim() === "")){
      this.posts.push(new Post(this, autore.value, testo.value, this.idSelected, this.idIndex));
      this.idIndex += 1;
      autore.value = '';
      testo.value = '';
      this.posts[this.idSelected-1].commentUp()
    }
    return false
  }

  selectPost(id: number):boolean{
    this.idSelected = id;
    if(id == 0) {
      this.commenting = false 
    }else{
      this.commenting = true
    }
    return false
  }
  backOne(): boolean{
    this.selectPost(this.posts[this.idSelected-1].rootId)
    return false
  }
  backAll(): boolean{
    this.selectPost(0)
    return false
  }

  getComments():Post[] {
    let x : Post[] = []
    for(let i = 0; i < this.posts.length; i++) {
      if(this.posts[i].rootId == this.idSelected) {
        x.push(this.posts[i])
      }
    }
    return x
  }
  getThread():Post[] {
    let x : Post[] = []
    if(this.commenting) {
      let i : number = this.posts[this.idSelected-1].rootId
      while(!(i == 0)) {
        x.push(this.posts[i-1])
        i = this.posts[i-1].rootId
      }
    }
    return x.sort((a: Post, b: Post) => a.rootId - b.rootId);
  }
}
