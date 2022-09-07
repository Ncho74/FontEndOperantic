import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrls: ['./add-autor.component.css']
})
export class AddAutorComponent implements OnInit {
  authorForm:FormGroup
  user=sessionStorage.getItem("user")

  constructor(
     private s:AutorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
  ) {
    this.authorForm= this.formBuilder.group({

      autor_name:["",Validators.required],
      dateDeces_aut:["",Validators.required],
      lieuNaiss_aut:["",Validators.required],
      histPart_aut:["",Validators.required],
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
            this.ngZone.run(()=>{
              this.router.navigate(['custom/autorList'])
            },(err:any)=>{
              console.log(err);
            });
          })


  }
   
}
