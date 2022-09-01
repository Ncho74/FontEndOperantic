import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError ,map} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceCitationService {
  Api_rest:string="http://127.0.0.1:3000/default-citation";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  //methode d'ajout de livre
  AddCitation():Observable<any>{
    let api_URL=this. Api_rest+'/posts';
    return this.http.post(api_URL,{headers:this.httpHeaders})
    .pipe(
      catchError(this.handleError)
    )

  }
  GetCitation(){
  
    return this.http.get(`${this.Api_rest}/author?author=socrate`)
  }
   //Gestion d'erreur

   likes(id:any,data:any):Observable<any>{
    let api_URL=`${this.Api_rest}/likes/${id}`;
    return this.http.put(api_URL,data,{headers:this.httpHeaders})
    .pipe(
      catchError(this.handleError)
    )

  }
  GetCitationByAuthor(autor:any):Observable<any>{
    return this.http.get(`${this.Api_rest}/author?author=${autor}`)
  }
  bioAutorBycitation(id:any):Observable<any>{
    return this.http.get(`${this.Api_rest}/citation/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }
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
