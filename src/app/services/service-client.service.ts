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


  constructor(private httpClient:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
    })
}

  // getAll(){
  //   return this.httpClient.get(environment.serverUrl +"clients")
  // }

  getAll(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.endpoint + '/clients', this.httpOptions)
        .pipe(
            catchError(this.handleError)
        )
}


  // create(client : Client){
  //   return this.httpClient.post<Client>(environment.serverUrl + "clients" , client)
  // }
  // update(client : Client){
  
  //   return this.httpClient.put<Client>(environment.serverUrl + "clients/" + client.id,client)
  // }
  update(id:any, client:Client): Observable<Client> {
    return this.httpClient.put<Client>(this.endpoint + '/clients', JSON.stringify(client), this.httpOptions)
        .pipe(
            catchError(this.handleError)
        )
}
  // delete(id : number){
  //   return this.httpClient.delete<Client>(environment.serverUrl + "clients/" + id)
  // }
  delete(id:any) {
    return this.httpClient.delete<Client>(this.endpoint + '/clients/' + id, this.httpOptions)
        .pipe(
            catchError(this.handleError)
        )
}


  getCompteById(id : number){
    return this.httpClient.get(environment.serverUrl + "clientsComptes/" + id)
  }
  // getById(id : number){
  //   return this.httpClient.get<Client>(environment.serverUrl + "clients/" + id)
  // }

  getById(id:any): Observable<Client> {
    return this.httpClient.get<Client>(this.endpoint + '/clients/' + id)
        .pipe(
            catchError(this.handleError)
        )
}

  chercherClient(mc:string=""){
    return this.httpClient.get(environment.serverUrl +"chercherClients?mc="+ mc)
  }


  create(client:Client): Observable<Client> {
    return this.httpClient.post<Client>(this.endpoint + '/clients', JSON.stringify(client), this.httpOptions)
        .pipe(
            catchError(this.handleError)
        )
}

handleError(error:any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
  } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(() => new Error(errorMessage));
}


 }
