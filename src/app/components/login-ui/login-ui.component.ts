import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.css']
})
export class LoginUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitLoginForm(loginForm){
    console.log(loginForm.form.value.email);
    console.log(loginForm.form.value.pass);
  }

}
