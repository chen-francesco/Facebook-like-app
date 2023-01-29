export class Post {
    autore: string;
    testo: string;
    votes: number;
  
    constructor(autore: string, testo: string) {
      this.autore = autore;
      this.testo = testo;
      this.votes = 0;
    }
    voteUp():void {
        this.votes += 1
    }
    getVotes():string {
        if(this.votes < 1000000){
            return this.votes.toString()
        }else{
            return "+ 1000000"
        }
    }
}