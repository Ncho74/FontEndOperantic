import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {catchError,map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Admin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
//  APi nest js Url for admin
  ApiRest_url: string="http://127.0.0.1:3000/admin";
//definie l'entete de la requete http en json
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http:HttpClient) { }
   register(data:Admin):Observable<any>{
    let api_rest=`${this.ApiRest_url}/add-user`
    return this.http.post(api_rest,data)
                    
  }
  login(data:any):Observable<any>{
      let api_rest=`${this.ApiRest_url}/login`;
      return this.http.post(api_rest,data);
                
                       
  }
  getuserConnect(data:any):Observable<any>{

    return this.http.get(`${this.ApiRest_url}/user/${data}`,{headers:this.httpHeaders})
      .pipe(map((res:any)=>{
        sessionStorage.setItem("user",res._id)
        localStorage.setItem("user",res._id)
        return res ||{}
      }))

  }
  updateUser(id:string,data:Admin):Observable<any>{
    let api_url=`${this.ApiRest_url}/${id}`;
      return this.http.put(api_url,data,{headers:this.httpHeaders})
  }
 forgetPasswordSend(data:any){
  let api_rest=`${this.ApiRest_url}/forgetPassword/`
 return   this.http.post(api_rest,data)
}

resetPassword(id:string,data:any):Observable<any>{
  let api_rest=`${this.ApiRest_url}/resetPassword/${id}`
 return   this.http.put(api_rest,data)
}

}