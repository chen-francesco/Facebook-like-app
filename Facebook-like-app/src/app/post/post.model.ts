export class Post {
    autore: string;
    testo: string;
    votes: number;
    rootId: number;
    postId: number;
    commenti: number;
  
    constructor(autore: string, testo: string, rootId: number, postId: number) {
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
    getVotes():string {
        return this.votes.toString()
    }
}