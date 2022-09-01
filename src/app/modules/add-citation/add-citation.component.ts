import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AutorService } from 'src/app/services/autor.service';
import { CitationService } from 'src/app/services/citation.service';

@Component({
  selector: 'app-add-citation',
  templateUrl: './add-citation.component.html',
  styleUrls: ['./add-citation.component.css']
})
export class AddCitationComponent implements OnInit {
    author:any=[];
    addCitation:FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private citationService:CitationService,
    private aut:AutorService
  ) { 
    this.addCitation= this.formBuilder.group({
        theme_cit:["",Validators.required],
        id_aut:["",Validators.required],
        citation:["",Validators.required],
        favorite:[]
    })
    
  }

  ngOnInit(): void {

    this.aut.getAllAuthor()
                        .pipe(map((res:any)=>{
                           this.author=res
                        }))
                      .subscribe()
  }
onSubmit():any{
  if(this.addCitation.invalid){
    return ;
  }

  this.citationService.addCitation(this.addCitation.value)
      .subscribe(()=>{
        this.ngZone.run(()=>{
          this.router.navigate(['custom/citationList'])
        },(err:any)=>{
          console.log(err);
        });
      })
}
onchangeCheckbox(event: Event) {
     console.log(event.target);
}

}
