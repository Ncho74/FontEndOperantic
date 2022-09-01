import {Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { likesObj } from '../data/citation';
@Injectable({
  providedIn: 'root'
})
export class WebStorageService {
 likesObj:likesObj
  constructor() {
    this.likesObj=new likesObj()
  }
getNewItem(){
  const records=sessionStorage.getItem("listLike");
  if(records!==null){
        const likeList=JSON.parse(records)
        return likeList.length+1
  }

  else{
    return 1
  }
}
saveObj(data:any){

  const lastId=this.getNewItem()
      this.likesObj.id=lastId
      this.likesObj.id_cit=data.id_cit
      this.likesObj.islike=data.islike
    const records=sessionStorage.getItem("listLike");
    if(records!==null){
          const likeList=JSON.parse(records)
          likeList.push( this.likesObj)
          sessionStorage.setItem("listLike",JSON.stringify(likeList));
          
    }else{
      const arrLike=[];
        arrLike.push(this.likesObj)
        sessionStorage.setItem("listLike",JSON.stringify(  arrLike));
    }
}
delete(id:any){
  const records=sessionStorage.getItem("listLike");
  if(records!==null){
    const likeList=JSON.parse(records)
    likeList.splice( likeList.findIndex((d:any)=>d.id===id),1)
  }
}
getObj(){
  return sessionStorage.getItem("listLike");
}

}
