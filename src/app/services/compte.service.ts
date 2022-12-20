import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';
import { Observable,throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  endpoint = 'http://localhost:8090';



  constructor(private httpClient:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
    })
  }

  getAll(): Observable<Compte[]> {
    return this.httpClient.get<Compte[]>(this.endpoint + '/comptes', this.httpOptions)
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