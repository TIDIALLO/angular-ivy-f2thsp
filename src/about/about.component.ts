import { Component, OnInit } from '@angular/core';
import { AboutsService } from '../services/abouts.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private aboutService:AboutsService) { }
  info = this.aboutService.getInfos();
  comments = this.aboutService.getAllComments();
  comment: {id:0,message:'',date:null};
  newComment=false;

  addComment(){
    if(this.comment.message!=''){
      this.aboutService.addComment({
      message:this.comment.message});
      this.comments = this.aboutService.getAllComments();
      this.comment.message='';
    }
    
  }
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  ngOnInit() {
  }

}