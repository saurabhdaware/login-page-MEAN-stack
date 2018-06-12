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

  submitLoginForm(loginForm){ // function is called when user clicks login button after filling form
    this.http.post('http://localhost:3000/login',{ // data is sent to backend api with email and password entered by the user
      email:loginForm.form.value.email,
      pass:loginForm.form.value.pass
    }).subscribe((data:any)=>{
      if(data.login == 'fail'){ 
        console.log(data.reason);
      }else if(data.login == 'success'){
        window.localStorage.setItem('access-token',JSON.stringify({token:data.token,name:data.name})); // function to store access token in database
        this.http.post('http://localhost:3000/auth',{ // authorizing user , just to be on the safer side
          name:data.name
        },{
          headers:new HttpHeaders({
            'Content-Type':'application/json',
            'access-token':data.token // token is sent through header
          })
        })
        .subscribe((result:any)=>{
          if(result.auth == 'fail'){
            console.log(result.reason);
          }else if(result.auth == 'success'){
            window.location.href ="http://localhost:4200/profile"; // if auth returns success user is logged in and redirected to the profile
          }
        })
      }
    });

  }


}
