import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  list =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  constructor(public router:Router){}
 ngOnInit(): void {
   
  if(!sessionStorage.getItem('sid')) {         //use ! later to authenticate user
    this.router.navigate(['signin']);
  }
   
 }


 logoutprocess() {
   sessionStorage.removeItem('sid');
   this.router.navigate(['signin']);
   
 }

}
