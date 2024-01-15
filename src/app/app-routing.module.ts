import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route,Routes } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';
import { RegisterComponent } from './login/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SinglproductComponent } from './pages/singlproduct/singlproduct.component';

import { ContactComponent } from './pages/contact/contact.component';


const routes: Route[] = [
 
  {
    path:'',
    canActivate:[AuthGuard],
    component:HomeComponent,
  },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'menu',
        component:MenuComponent
      },
      {
        path:'singlproduct/:id',
        component:SinglproductComponent
      },
      
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'login',
        component:SigninComponent
      }
    
    
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
