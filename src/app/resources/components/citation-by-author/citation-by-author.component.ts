import { Component, NgZone, OnInit } from '@angular/core';
import { ServiceCitationService } from '../../services/service-citation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WebStorageService } from '../../services/web-storage.service';
import { likesObj } from '../../data/citation';
import { map } from 'rxjs';
@Component({
  selector: 'app-citation-by-author',
  templateUrl: './citation-by-author.component.html',
  styleUrls: ['./citation-by-author.component.css']
})
export class CitationByAuthorComponent implements OnInit {
  defaultCitation:any=[]
  image:any
  likeList:any=[]
  control=true;
   autoSlide=true;
   slideInterval=7000;
   indicator=false
   selectedIndex=0;
   getAuthor:any

  constructor(
    private serviceCitation:ServiceCitationService,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private webStorageService: WebStorageService
  ) {

  }

  ngOnInit(): void {
    this.getAuthor = this.activatedRoute.snapshot.paramMap.get('author');
    this.serviceCitation. GetCitationByAuthor(this.getAuthor ).
      pipe(map((res:any)=>{
        this.defaultCitation=res[0]
        this.image=res[1][0]

      }))
    .subscribe()
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
       let lik=like+1
      this.getAuthor = this.activatedRoute.snapshot.paramMap.get('author');

      const oldrecords=sessionStorage.getItem("listLike")
      if(oldrecords!==null){
        const listLike=JSON.parse(oldrecords)

        const liker=listLike.find((m:any)=>m.id_cit===id)
        if(liker!==undefined && liker.islike===true){
            return;
        }
        else{
        this.webStorageService.saveObj(data)
        console.log(lik,like)
          this.serviceCitation.likes(id,{likes:lik})
          .subscribe();


       this.serviceCitation.GetCitationByAuthor(this.getAuthor )
         .subscribe((res)=>{
          this.defaultCitation=res[0]
          this.image=res[1][0]

        })
      }
      }
      else{
        this.webStorageService.saveObj(data)
        console.log(like,lik)
        this.serviceCitation.likes(id,{likes:lik})
        .subscribe();
        this.serviceCitation.GetCitationByAuthor(this.getAuthor )
        .subscribe((res)=>{
          this.defaultCitation=res[0]
          this.image=res[1][0]
  
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
