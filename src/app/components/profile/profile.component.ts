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

  logoutClicked(){
    window.localStorage.removeItem('access-token');
    window.location.href="http://localhost:4200/"
  }

  authorizeUser(){
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
