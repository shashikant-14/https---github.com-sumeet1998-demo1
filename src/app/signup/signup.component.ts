import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, Validators, FormBuilder} from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
    password: ['', [Validators.required]],   //^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])
    email:['',[Validators.required,Validators.email]],
    mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async readfromvalue() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['signin']);
    
  }
}
