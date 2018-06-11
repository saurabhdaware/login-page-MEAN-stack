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

  submitRegistrationForm(registrationForm){
    let url = 'http://localhost:3000';
    // console.log(registrationForm.form.value.email);
    // console.log(registrationForm.form.value.pass);
    this.http.post(url+'/register',registrationForm.form.value)
    .subscribe((response)=>{console.log(response)});
  }

}
