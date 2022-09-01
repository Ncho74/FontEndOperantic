import { Component, NgZone, OnInit } from '@angular/core';
import { ServiceCitationService } from '../../services/service-citation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WebStorageService } from '../../services/web-storage.service';

@Component({
  selector: 'app-defaut-citation',
  templateUrl: './defaut-citation.component.html',
  styleUrls: ['./defaut-citation.component.css']
})
export class DefautCitationComponent implements OnInit {
defaultCitation:any=[]
control=true;
 autoSlide=true;
 slideInterval=5000;
 indicator=false
 selectedIndex=0;
  constructor(
    private serviceCitation:ServiceCitationService,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private webStorageService: WebStorageService
    ) { 

  }

  ngOnInit(): void {
    this.serviceCitation.GetCitation().subscribe(res=>{
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

      console.log(liker,id)
      if(liker!==undefined && liker.islike===true){
          return;
      }
      else{
      this.webStorageService.saveObj(data)
        this.serviceCitation.likes(id,{likes:like+1})
        .subscribe(() => {console.log("J'aime with success") });

        
        this.serviceCitation.GetCitation().subscribe(res=>{
          this.defaultCitation=res
        })
    }
    }
    else{
      this.webStorageService.saveObj(data)
      this.serviceCitation.likes(id,{likes:like+1})
      .subscribe(() => {console.log("J'aime with success") });
      this.serviceCitation.GetCitation().subscribe(res=>{
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
