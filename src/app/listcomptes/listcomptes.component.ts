import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compte } from '../models/compte';
import { CompteService } from '../services/compte.service';
import { Client } from "../models/client";
@Component({
  selector: 'app-listcomptes',
  templateUrl: './listcomptes.component.html',
  styleUrls: ['./listcomptes.component.css']
})
export class ListcomptesComponent implements OnInit {

  // client:Client;
  listComptes : Compte[];
  // compteCourant :Compte;
  // compteEpargne :Compte;
  
  constructor(private CompteService:CompteService) { }
  ngOnInit() {
    this.findAll();
  
  }


  findAll(){
    this.CompteService.getAll().subscribe((data: any)=>{
      console.log(data)
      this.listComptes=data;
    });
    
  }

  


}
