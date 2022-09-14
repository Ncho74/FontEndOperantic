import { Component, OnInit } from '@angular/core';
import { ServiceCitationService } from '../../services/service-citation.service';
import { WebStorageService } from '../../services/web-storage.service';

@Component({
  selector: 'app-citation-favotes',
  templateUrl: './citation-favotes.component.html',
  styleUrls: ['./citation-favotes.component.css']
})
export class CitationFavotesComponent implements OnInit {
  image:any;
  defaultCitation:any=[]
  control=true;
   autoSlide=true;
   slideInterval=7000;
   indicator=false
   selectedIndex=0;
    constructor(
      private serviceCitation:ServiceCitationService,
      private webStorageService: WebStorageService
      ) { 
  
    }
  
    ngOnInit(): void {
      this.serviceCitation.findFavoritesCitation()
      .subscribe((res:any)=>{
        this.defaultCitation=res
       
       
      })
      if(this.autoSlide){
        this.AutoSlideCitation()
      }
    }
    likes(id:string,like:number){
     
      const data={
        id:null,
        id_cit:id,
        islike:true
      }
  
      const oldrecords=sessionStorage.getItem("listLike")
      if(oldrecords!==null){
        const listLike=JSON.parse(oldrecords)
  
        const liker=listLike.find((m:any)=>m.id_cit===id)
  
        if(liker!==undefined && liker.islike===true){
            return;
        }
        else{
        this.webStorageService.saveObj(data)
          this.serviceCitation.likes(id,{likes:like+1})
          .subscribe();
  
          
          this.serviceCitation.findFavoritesCitation()
          .subscribe((res:any)=>{
            this.defaultCitation=res
           
           
          })
      }
      }
      else{
        this.webStorageService.saveObj(data)
        this.serviceCitation.likes(id,{likes:like+1})
        .subscribe();
        this.serviceCitation.findFavoritesCitation()
        .subscribe((res:any)=>{
          this.defaultCitation=res
         
         
        })
  
      }     
    
  
  }
    onPrevClick():void{
        if(this.selectedIndex===0){
          this.selectedIndex=this.defaultCitation.length-1
        }
        else{
          this.selectedIndex--
        }
    }
    onNextClick():void{
      if(this.selectedIndex===this.defaultCitation.length-1){
        this.selectedIndex=0
      }
      else{
        this.selectedIndex++
      }
  }
  AutoSlideCitation():void{
    setInterval(()=>{
      this.onNextClick()
    },this.slideInterval)
  }

}
