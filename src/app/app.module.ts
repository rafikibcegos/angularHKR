import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';

import { ListclientsComponent } from './listclients/listclients.component';
import { ListcomptesComponent } from './listcomptes/listcomptes.component';
import { ListconseillersComponent } from './listconseillers/listconseillers.component';
import { CreateclientComponent } from "./createclient/createclient.component";

// import { Client } from './models/client';
// import {  Adresse } from "./models/adresse";
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListclientsComponent,
    ListcomptesComponent,
    ListconseillersComponent,
    

    // Client,
    // Adresse,
    NavbarComponent,
    UpdateclientComponent,
    CreateclientComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
