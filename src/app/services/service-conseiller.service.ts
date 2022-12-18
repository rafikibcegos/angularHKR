import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Conseiller } from '../models/conseiller';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceConseillerService {

  endpoint = 'http://localhost:8090';
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
    })
}

  // getAll(){
  //   return this.httpClient.get(environment.serverUrl +"conseillers")
  // }

  getAll(): Observable<Conseiller[]> {
    return this.httpClient.get<Conseiller[]>(this.endpoint + '/conseillers', this.httpOptions)
        .pipe(
            catchError(this.handleError)
        )
}

  // create(conseiller : Conseiller){
  //   return this.httpClient.post<Conseiller>(environment.serverUrl + "conseillers" , conseiller)
  // }
  // update(conseiller : Conseiller){
  //   return this.httpClient.put<Conseiller>(environment.serverUrl + "conseillers/" + conseiller.id, conseiller)
  // }
  delete(id : number){
    return this.httpClient.delete<Conseiller>(environment.serverUrl + "conseillers/" + id)
  }
  // getById(id : number){
  //   return this.httpClient.get<Conseiller>(environment.serverUrl + "conseillers/" + id)
  // }
  getById(id:any): Observable<Conseiller> {
    return this.httpClient.get<Conseiller>(this.endpoint + '/clients/' + id)
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
