import { AppComponent } from "../app.component";

export class Post {
    autore: string;
    testo: string;
    votes: number;
    rootId: number;
    postId: number;
    origin: AppComponent;
    commenti: number;
  
    constructor(origin: AppComponent,autore: string, testo: string, rootId: number, postId: number) {
      this.origin = origin;
      this.autore = autore;
      this.testo = testo;
      this.rootId = rootId;
      this.postId = postId;

      this.votes = 0;
      this.commenti = 0;
    }
    voteUp():void {
        this.votes += 1
    }
    commentUp():void {
        this.commenti += 1
    }
    addComment():boolean {
        this.origin.selectPost(this.postId)
        return false
      }
    getVotes():string {
        if(this.votes < 1000000){
            return this.votes.toString()
        }else{
            return "+ 1000000"
        }
    }
}