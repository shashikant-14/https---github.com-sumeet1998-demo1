import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormControl, Validators, FormBuilder} from '@angular/forms';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit  {

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {}

  async readfromvalue() {
    const data = this.fbFormGroup.value;

    // ajax call
    const url = 'http://localhost:3000/auth-user';
    const result: any = await this.http.post(url, data).toPromise();
    if(result.opr){
      sessionStorage.setItem('sid','true');
      this.router.navigate(['home']);
    }else{
      this.uiInvalidCredential = true;
    }
      
    }

  
}
