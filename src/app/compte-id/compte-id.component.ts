import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adresse } from '../models/adresse';
import { Client } from '../models/client';
import { Compte } from '../models/compte';
import { CompteService } from "../services/compte.service";
import { ServiceClientService } from '../services/service-client.service';

@Component({
  selector: 'app-compte-id',
  templateUrl: './compte-id.component.html',
  styleUrls: ['./compte-id.component.css']
})
export class CompteIdComponent implements OnInit {

  id = this.activeRoute.snapshot.params['id'];
  
  clientDetails: any = {};

  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute, private serviceClient:ServiceClientService, private router: Router) { 

    this.clientDetails = new Client();
    this.clientDetails.adresse = new Adresse();
    this.clientDetails.compte = new Compte();


  }
 
  ngOnInit() {
  

      this.serviceClient.getById(this.id).subscribe((data: {}) => {
        this.clientDetails = data;
    });

   
  }


  update() {
    if ( window.confirm('Are you sure, you want to update?')) {
      this.serviceClient.update(this.id, this.clientDetails).subscribe(data => {
        this.router.navigate(['/listClients'])
      })
    }
  }

}