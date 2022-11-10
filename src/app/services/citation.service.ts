import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {catchError,map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Citation } from '../interfaces/citation';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class CitationService {
    //  APi nest js Url for admin
    ApiRest_url: string="http://127.0.0.1:3000/citation";
    //definie l'entete de la requete http en json
     httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
     id:any
  constructor(
    private http:HttpClient,
    private admin:AdminService
    ) { }

  addCitation(data:Citation):Observable<any>{
    let api_rest=`${this.ApiRest_url}/addCitation`;
    return this.http.post(api_rest,data)
  }
  findAllCitation():Observable<any>{
    const id=sessionStorage.getItem("user")
    let api_rest=`${this.ApiRest_url}/listCitation/${id}`
    return this.http.get(api_rest)
                    .pipe(catchError(
                      this.handleError
                    ))
  }
  updateCitation(id:string,data:any):Observable<any>{
    let api_rest=`${this.ApiRest_url}/${id}`
    return this.http.put(api_rest,data,{headers:this.httpHeaders})
                  .pipe(catchError(
                    this.handleError
                  ))
  }
  deleteCitation(id:string):Observable<any>{
    let api_rest=`${this.ApiRest_url}/${id}`
    return this.http.delete(api_rest,{headers:this.httpHeaders})
                  .pipe(catchError(
                    this.handleError
                  ))
  }

  fetchById(id:string):Observable<any>{
    let api_rest=`${this.ApiRest_url}/${id}`;
    return this.http.get(api_rest,{headers:this.httpHeaders})
                    .pipe(map((res:any)=>{
                      return res ||{}
                   }))
  }
  readById(id:string):Observable<any>{
    let api_rest=`${this.ApiRest_url}/readCitation/${id}`;
    return this.http.get(api_rest,{headers:this.httpHeaders})
                    .pipe(map((res:any)=>{
                      return res ||{}
                   }))
  }
  fetchFavorites():Observable<any>{
    const id=sessionStorage.getItem("user")
    let api_rest=`${this.ApiRest_url}/favorits/${id}`
    return this.http.get(api_rest)
                    .pipe(catchError(
                      this.handleError
                    ))
  }
  dashbord():Observable<any>{
    this.admin.getuserConnect(localStorage.getItem('token')).subscribe((res:any)=>{
      this.id=res._id;
    })
   
    if(this.id===null) {
      window.location.reload()
    }
  

    let api_rest=`${this.ApiRest_url}/dashbord/${this.id}`

    return this.http.get(api_rest)
                    .pipe(catchError(
                      this.handleError
                    ))
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
