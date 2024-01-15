import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes,Route, } from '@angular/router';
import { MainComponent } from '../main.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { MenuComponent } from 'src/app/pages/menu/menu.component';

import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { SinglproductComponent } from 'src/app/pages/singlproduct/singlproduct.component';

const routes:Route[]=[
{
  path:'',
  canActivate:[AuthGuard],
  component:MainComponent,
  children:[
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'menu',
      component:MenuComponent
    },
    {
      path:'singlproduct',
      component:SinglproductComponent
    },
   
    {
      path:'contact',
      component:ContactComponent
    }
  ]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
