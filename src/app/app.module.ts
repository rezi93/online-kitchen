import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './login/register/register.component';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { MenuComponent } from './pages/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './login/signin/signin.component';
import{HttpClientModule} from '@angular/common/http'
import { DataService } from './services/data.service';
import { SinglproductComponent } from './pages/singlproduct/singlproduct.component';

@NgModule({
  declarations: [
    AppComponent,
  SigninComponent,
    RegisterComponent,
    SinglproductComponent,
    NavbarComponent,
    FooterComponent
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    ReactiveFormsModule,
    
    
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
