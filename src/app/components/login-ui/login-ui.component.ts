import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.css']
})
export class LoginUiComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  submitLoginForm(loginForm){
    // console.log(loginForm.form.value.email);
    // console.log(loginForm.form.value.pass);
    this.http.post('http://localhost:3000/',{
      email:loginForm.form.value.email,
      pass:loginForm.form.value.pass
    }).subscribe(data=>console.log(data));
  }

}
