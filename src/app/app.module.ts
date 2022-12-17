import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreateclientComponent } from './createclient/createclient.component';
import { ListclientsComponent } from './listclients/listclients.component';
import { ListcomptesComponent } from './listcomptes/listcomptes.component';
import { ListconseillersComponent } from './listconseillers/listconseillers.component';
import { ModelsComponent } from './models/models.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CreateclientComponent,
    ListclientsComponent,
    ListcomptesComponent,
    ListconseillersComponent,
    ModelsComponent,
    NavbarComponent,
    UpdateclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
