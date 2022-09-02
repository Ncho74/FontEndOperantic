import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {catchError,map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Autor } from '../interfaces/autor';
@Injectable({
  providedIn: 'root'
})
export class AutorService {

  //  APi nest js Url for admin
  ApiRest_url: string="http://127.0.0.1:3000/autor";
//definie l'entete de la requete http en json
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http:HttpClient) { }
  addAutor(data:Autor):Observable<any>{    
    let api_rest=`${this.ApiRest_url}/addAutor`
    return this.http.post(api_rest,data,{headers:this.httpHeaders})

     
  }

getAllAuthor():Observable<any>{
  const user=sessionStorage.getItem('user')
  return this.http.get(`${this.ApiRest_url}/allCitation/${user}`,{headers:this.httpHeaders})
}
  findAutorByName(autor:string):Observable<any>{
    let api_rest=`${this.ApiRest_url}/searchAutor`
    return this.http.post(api_rest,autor)
  }
  updateAutor(id:string,data:any):Observable<any>{
    let api_rest=`${this.ApiRest_url}/${id}`;
    return this.http.put(api_rest,data,{headers:this.httpHeaders})
  }
  getAutorById(id:string):Observable<any>{
    let api_rest=`${this.ApiRest_url}/${id}`;
     return this.http.get(api_rest,{headers:this.httpHeaders})
  }
    deleteAuthor(id:string):Observable<any>{
    let api_rest=`${this.ApiRest_url}/${id}`
    return this.http.delete(api_rest,{headers:this.httpHeaders})
                  .pipe(catchError(
                    this.handleError
                  ))
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
