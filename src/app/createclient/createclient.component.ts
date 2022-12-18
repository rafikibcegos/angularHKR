import { Component, OnInit } from '@angular/core';
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
newClient= new Client;
  constructor(private serviceClient:ServiceClientService, private router:Router) { }

  ngOnInit() {
  }
  onSubmit(userForm: NgForm) {
    this.newClient = userForm.value
    console.log(this.newClient)
    this.serviceClient.create(this.newClient).subscribe((data: Client) =>{ 
      this.router.navigate(['/listClients'])
    })}
}
