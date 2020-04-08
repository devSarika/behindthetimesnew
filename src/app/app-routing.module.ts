import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';
import { IphoneComponent } from './iphone/iphone.component';
import { FbComponent } from './fb/fb.component';
import { DuoComponent } from './duo/duo.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'tech', component:TechComponent},
  {path:'iphone', component:IphoneComponent},
  {path:'fb',component:FbComponent},
  {path:'duo',component:DuoComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }