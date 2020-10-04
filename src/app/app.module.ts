import { AppRoutingModule,routingComponents } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { AppComponent } from './app.component';
import { VariableComponent } from './components/variable/variable.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//gestion des formulaires Tres important d'importé ce module
import { FormsexampleComponent } from './components/formsexample/formsexample.component';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    VariableComponent,
    NavbarComponent,
    FormsexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
