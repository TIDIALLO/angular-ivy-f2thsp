import { Injectable } from '@angular/core';

@Injectable()
export class AboutsService {

  constructor() { }

    info ={
    nom:"Tidiane",
    email:"tidiane01@gmail.com",
    tel:77790000
  };
  comments =[];
 
  getInfos(){
    return this.info;
  }
  addComment(c){
    c.comments.date = new Date();
    this.comments.push(c);
  }

  getAllComments(){
    return this.comments;
  }

}