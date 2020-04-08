import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {
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
