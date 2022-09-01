import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ServiceCitationService } from '../../services/service-citation.service';

@Component({
  selector: 'app-defaut-bio-autor',
  templateUrl: './defaut-bio-autor.component.html',
  styleUrls: ['./defaut-bio-autor.component.css']
})
export class DefautBioAutorComponent implements OnInit {
  infoAuthor:any
   getCitationId:any

  constructor(
    private s:ServiceCitationService,
    private router:Router,  
    private activatedRoute: ActivatedRoute,
     
     ) { }

  ngOnInit(): void {
    this.getCitationId= this.activatedRoute.snapshot.paramMap.get('id');
    this.s.bioAutorBycitation(this.getCitationId)
    .pipe(map((res:any)=>{
      this.infoAuthor=res
      
    }))
    .subscribe()
  }



}
