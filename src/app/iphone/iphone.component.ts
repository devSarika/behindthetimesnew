import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IphoneComponent implements OnInit {
  cmntArray=[];
  comment = {cmnt:''};
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.comment.cmnt.length>0){
      var obj = {cmnt:''};
      obj.cmnt=this.comment.cmnt;
      this.cmntArray.unshift(obj);
    this.comment.cmnt = '';    
    }
    else{
      this.comment.cmnt = ''; 
    }
  }
}