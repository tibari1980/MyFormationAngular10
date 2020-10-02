import { AppRoutingModule,routingComponents } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VariableComponent } from './components/variable/variable.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 
@NgModule({
  declarations: [
    AppComponent,
    VariableComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
