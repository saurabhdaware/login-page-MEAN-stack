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
    this.http.post('http://localhost:3000/login',{
      email:loginForm.form.value.email,
      pass:loginForm.form.value.pass
    }).subscribe((data:any)=>{
      if(data.login == 'fail'){
        console.log(data.reason);
      }else if(data.login == 'success'){
        window.localStorage.setItem('access-token',JSON.stringify({token:data.token,name:data.name}));
        this.http.post('http://localhost:3000/auth',{
          name:data.name
        },{
          headers:new HttpHeaders({
            'Content-Type':'application/json',
            'access-token':data.token
          })
        })
        .subscribe((result:any)=>{
          if(result.auth == 'fail'){
            console.log(result.reason);
          }else if(result.auth == 'success'){
            window.location.href ="http://localhost:4200/profile";
          }
        })
      }
    });

  }


}
