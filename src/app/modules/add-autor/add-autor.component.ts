import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrls: ['./add-autor.component.css']
})
export class AddAutorComponent implements OnInit {
  error:any;
  authorForm:FormGroup
  user=sessionStorage.getItem("user")

  constructor(
     private s:AutorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private snackBarService:SnackBarService
  ) {
    this.authorForm= this.formBuilder.group({

      autor_name:["",Validators.required],
      dateDeces_aut:["",Validators.required],
      lieuNaiss_aut:["",Validators.required],
      histPart_aut:["",],
      bio_aut:["",Validators.required],
      user:[""]


    })
  }

  ngOnInit(): void {
  
  }
  onSubmit():any{
    if(this.authorForm.invalid){
      return ;
    }

     this.s.addAutor(this.authorForm.value).
          subscribe(()=>{
                this.snackBarService.openSuccessSnackBar('Auteur ete ajouter avec success!')
              this.router.navigate(['custom/autorList']);
          },(err:any)=>{
            this.error=err.error.message
            this.snackBarService.openFailureSnackBar(this.error)
          })
  }
   
}
