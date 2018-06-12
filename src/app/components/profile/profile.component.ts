import { Component, OnInit, Input } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name:string;
  email:string;

  constructor(private http:HttpClient) { 
      if(window.localStorage.getItem == undefined){
        window.location.href = 'http://localhost:4200/'; // just to be on the safer side
      }
      this.authorizeUser();
  }

  ngOnInit() {
  }

  logoutClicked(){ // if logout clicked we delete access token from localstorage and redirect user to homepage
    window.localStorage.removeItem('access-token');
    window.location.href="http://localhost:4200/"
  }

  authorizeUser(){ // same function as the one in home.component.ts except we send user back to home page if token doesnt exist and if it does, we get data of the user from backend and show it on the profile;
    try{
      const accessToken = JSON.parse(window.localStorage.getItem('access-token'));
      const httpOptions = {
        headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
          'access-token': accessToken.token
        })
      };

      const username = accessToken.name;

      
      this.http.post('http://localhost:3000/auth',{name:username},httpOptions)
      .subscribe((data:any)=>{
        console.log(data);
        if(data.auth == 'success'){
          console.log(data.user);
          this.name = data.user.name;
          this.email = data.user.email;
        }
      })
    }catch{
      window.location.href = "http://localhost:4200";
    }

  }
}
