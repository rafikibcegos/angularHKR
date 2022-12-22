import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Client } from '../models/client';
import { ServiceClientService } from "../services/service-client.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css']
})
export class CreateclientComponent implements OnInit {

  @Input()
newClient= new Client;


myForm: FormGroup;
nom: FormControl;
  constructor(private fb: FormBuilder, public serviceClient:ServiceClientService, public router:Router) {

    this.myForm = fb.group({
      'nom' : ['', Validators.required]
    });
    this.nom = this.myForm.controls['nom'] as FormControl;


  }


   

  ngOnInit() {
  }



addClient() {
  this.serviceClient.create(this.newClient).subscribe((data: {}) => {
      this.router.navigate(['/listClients']);
  });
}
}



