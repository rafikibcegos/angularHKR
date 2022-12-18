import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(public serviceClient:ServiceClientService, public router:Router) { }

  ngOnInit() {
  }
  onSubmit(userForm: NgForm) {
    this.newClient = userForm.value
    console.log(this.newClient)
    this.serviceClient.create(this.newClient).subscribe((data: Client) =>{ 
      this.router.navigate(['/listClients'])
    })}


addClient() {
  this.serviceClient.create(this.newClient).subscribe((data: {}) => {
      this.router.navigate(['/listClients']);
  });
}
}





    // constructor(
    //     public service: ClientService,
    //     public router: Router
    // ) {
    //     this.clientDetails.adresse = new Adresse();
    // }

    // ngOnInit() { }

    // addClient() {
    //     this.service.createClient(this.clientDetails).subscribe((data: {}) => {
    //         this.router.navigate(['/clients-list']);
    //     });
    // }