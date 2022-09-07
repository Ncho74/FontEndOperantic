import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { AutorService } from 'src/app/services/autor.service';
import { CitationService } from 'src/app/services/citation.service';

@Component({
  selector: 'app-update-citation',
  templateUrl: './update-citation.component.html',
  styleUrls: ['./update-citation.component.css']
})
export class UpdateCitationComponent implements OnInit {
   citation:any={
    theme_cit:'',
    citation:'',
    likes:'',
    autor:'',
    favorite:false
   }
  getCitation:any  
  author:any=[];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private citationService:CitationService,
    private aut:AutorService,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getCitation=this.activatedRoute.snapshot.paramMap.get('id');
    this.aut.getAllAuthor()
    .pipe(map((res:any)=>{
       this.author=res
    }))
  .subscribe()
   this.citationService.fetchById(this.getCitation).pipe(map((res:any)=>{

      this.citation=res
   }))
   .subscribe()
  }
   onSubmit():any{
    this.getCitation=this.activatedRoute.snapshot.paramMap.get('id');
    

     this.citationService.updateCitation( this.getCitation,this.citation)

       .subscribe(()=>{
            this.ngZone.run(()=>{
              this.router.navigate(['custom/citationList'])
            },(err:any)=>{
              console.log(err);
            });
          })
  }
  }


