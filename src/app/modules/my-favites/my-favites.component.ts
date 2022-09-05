import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CitationService } from 'src/app/services/citation.service';

@Component({
  selector: 'app-my-favites',
  templateUrl: './my-favites.component.html',
  styleUrls: ['./my-favites.component.css']
})
export class MyFavitesComponent implements OnInit {
  
  control=true;
  autoSlide=true;
  slideInterval=7000;
  indicator=false
  selectedIndex=0;
  citation:any=[]
  constructor(
    private s:CitationService,
  ) { }

  ngOnInit(): void {
    this.s.fetchFavorites().
           pipe(map((res:any)=>{
               this.citation=res
               console.log(this.citation)
           }))
           .subscribe()
           if(this.autoSlide){
            this.AutoSlideCitation()
          }
  }
  onPrevClick():void{
    if(this.selectedIndex===0){
      this.selectedIndex=this.citation.length-1
    }
    else{
      this.selectedIndex--
    }
}
onNextClick():void{
  if(this.selectedIndex===this.citation.length-1){
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
