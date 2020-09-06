import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  list =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  constructor() { }

  counter=1;
  // comment=[];


  likehere() {
    this.counter += 1;
  }
  ngOnInit(): void {
  }

  // commenthere() {
  //   this.comment.push("hello user");
  // }

}
