import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register-ui',
  templateUrl: './register-ui.component.html',
  styleUrls: ['./register-ui.component.css']
})
export class RegisterUiComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  submitRegistrationForm(registrationForm){ // function is performed when user clicks submit button on registration page
    let url = 'http://localhost:3000';

    this.http.post(url+'/register',registrationForm.form.value)
    .subscribe((data:any)=>{ // if login is success we store token in localstorage and authorize user
      if(data.login == 'success'){
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
      }else{ // else we print error
        console.log(data.reason);
      }
    });
  }

}
