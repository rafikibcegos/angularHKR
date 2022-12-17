import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from "./accueil/accueil.component";
import { ListclientsComponent } from './listclients/listclients.component';
import { CreateclientComponent } from './createclient/createclient.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { ListconseillersComponent } from './listconseillers/listconseillers.component';



import { ListcomptesComponent } from './listcomptes/listcomptes.component';



const routes: Routes = [

  {path :"", component: AccueilComponent},
  {path:"listClients", component : ListclientsComponent},
  {path:"nouveauClient", component : CreateclientComponent},
  {path:"modifierClient/:id", component : UpdateclientComponent},
  {path:"listConseillers", component : ListconseillersComponent},
  {path:"listComptes/:id", component : ListcomptesComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
