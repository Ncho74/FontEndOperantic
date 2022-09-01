import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAutorService {

  constructor(private http:HttpClient) { }
  Api_rest:string="http://127.0.0.1:3000/default-autor";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  AddAutor():Observable<any>{
    let api_URL=this. Api_rest+'/posts';
    return this.http.post(api_URL,{headers:this.httpHeaders})
    .pipe(
      catchError(this.handleError)
    )

  }
  GetAutors(){
    return this.http.get(`${this. Api_rest}`);
  }
  //Gestion d'erreur
handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Gérer l'erreur du client
    errorMessage = error.error.message;
  } else {
    // Gérer l'erreur du serveur
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
}
