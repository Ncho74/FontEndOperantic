import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { AutorService } from 'src/app/services/autor.service';
import { CitationService } from 'src/app/services/citation.service';

@Component({
  selector: 'app-add-citation',
  templateUrl: './add-citation.component.html',
  styleUrls: ['./add-citation.component.css']
})
export class AddCitationComponent implements OnInit {
      error:any
    author:any=[];
    addCitation:FormGroup
    user=sessionStorage.getItem('user')
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private citationService:CitationService,
    private aut:AutorService,
    private snackBarService:SnackBarService
  ) { 
    this.addCitation= this.formBuilder.group({
        theme_cit:["",Validators.required],
        autor:["",Validators.required],
        citation:["",Validators.required],
        favorite:[],
        user:[]
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
        this.snackBarService.openSuccessSnackBar('la Citation ete ajouter avec success')
        this.ngZone.run(()=>{
          this.router.navigate(['custom/citationList'])
        },(err:any)=>{
          this.error=err.error.message
          this.snackBarService.openFailureSnackBar(this.error);
        });
      })
}
onchangeCheckbox(event: Event) {
     
}

}
