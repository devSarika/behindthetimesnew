import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duo',
  templateUrl: './duo.component.html',
  styleUrls: ['./duo.component.css']
})
export class DuoComponent implements OnInit {
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