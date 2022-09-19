import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  inputEmail=['',[Validators.email,Validators.required]]
   userSub:FormGroup
  constructor(
    private snackBarService:SnackBarService,
    private formBuilder: FormBuilder,

  ) { 
    this.userSub=this.formBuilder.group({
      email:this.inputEmail
    })
  }

  ngOnInit(): void {
  }
  userSuscribe():void{

    if( !this.userSub.valid){
       return
    }
    this.snackBarService.openSuccessSnackBar('Vous abonnement a ete pris en compte !,\n Vous venez les informations recentes concernant les visions de  Secret de la Vision et de Sagesse.\n\n\n\ Merci !')
     this.userSub.reset()
  }
  
}
