import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-ui',
  templateUrl: './register-ui.component.html',
  styleUrls: ['./register-ui.component.css']
})
export class RegisterUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitRegistrationForm(registrationForm){
    console.log(registrationForm.form.value.name);
    console.log(registrationForm.form.value.email);
    console.log(registrationForm.form.value.pass);

  }

}
