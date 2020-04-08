import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';
import { IphoneComponent } from './iphone/iphone.component';
import { FormsModule }   from '@angular/forms';
import { DuoComponent } from './duo/duo.component';
import { FbComponent } from './fb/fb.component';
import { UberComponent } from './uber/uber.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TechComponent,
    IphoneComponent,
    DuoComponent,
    FbComponent,
    UberComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }