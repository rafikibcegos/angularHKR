import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';
import { Observable,throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {
  
  endpoint = 'http://localhost:8090';

  // constructor(private httpt: HttpClient) { }

  // getAll(){
  //   return this.httpt.get(environment.serverUrl +"clients")
  // }
  // create(client : Client){
  //   return this.httpt.post<Client>(environment.serverUrl + "clients" , client)
  // }
  // update(client : Client){
  //   //let headers= new Headers()
  //  /*  headers.append('Access-Control-Allow-Origin' , '*');
  //   headers: new HttpHeaders({
  //     'Content-Type':  'image/png',
  //     'Access-Control-Allow-Origin': '*'
  // }) */
  //   return this.httpt.put<Client>(environment.serverUrl + "clients/" + client.id,client)
  // }
  // delete(id : number){
  //   return this.httpt.delete<Client>(environment.serverUrl + "clients/" + id)
  // }
  // getCompteById(id : number){
  //   return this.httpt.get(environment.serverUrl + "clientsComptes/" + id)
  // }
  // getById(id : number){
  //   return this.httpt.get<Client>(environment.serverUrl + "clients/" + id)
  // }
  // chercherClient(mc:string=""){
  //   return this.httpt.get(environment.serverUrl +"chercherClients?mc="+ mc)
  // }

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get(environment.serverUrl +"clients")
  }
  create(client : Client){
    return this.httpClient.post<Client>(environment.serverUrl + "clients" , client)
  }
  update(client : Client){
  
    return this.httpClient.put<Client>(environment.serverUrl + "clients/" + client.id,client)
  }
  delete(id : number){
    return this.httpClient.delete<Client>(environment.serverUrl + "clients/" + id)
  }
  getCompteById(id : number){
    return this.httpClient.get(environment.serverUrl + "clientsComptes/" + id)
  }
  getById(id : number){
    return this.httpClient.get<Client>(environment.serverUrl + "clients/" + id)
  }
  chercherClient(mc:string=""){
    return this.httpClient.get(environment.serverUrl +"chercherClients?mc="+ mc)
  }


 }
