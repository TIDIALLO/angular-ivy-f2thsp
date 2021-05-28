import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info ={
    nom:"Tidiane",
    email:"tidiane01@gmail.com",
    tel:77790000
  };
  commentaires =[];
  commentaire={date:null,message:""};
  newComment = false;
  constructor() { }

  addComment(){
    if(this.commentaire.message!=''){
      this.commentaire.date = new Date();
      this.commentaires.push({
        date:this.commentaire.date,
        message:this.commentaire.message
      });
      this.commentaire.message = '';
    }
    
  }
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  ngOnInit() {
  }

}