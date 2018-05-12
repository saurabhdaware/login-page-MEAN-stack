import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginUiComponent } from './components/login-ui/login-ui.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterUiComponent } from './components/register-ui/register-ui.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginUiComponent,
    HomeComponent,
    RegisterUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
