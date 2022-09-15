import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit,TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { catchError, map, throwError } from 'rxjs';
import { AdminService } from '../services/admin.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  error:any
  token:any
  url:any='127.0.0.1:4200/user/reset/'

  body:any={
    to_name:'',
    message:'',
    from_Name:'',
    url_app: '',
    email_To: '',
    }

  constructor(
    private s:AdminService,
    private router:Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
   
  
  }
  public onSubmit(e:Event) {
    e.preventDefault

    this.s.forgetPasswordSend({email:this.body.email_To})
    .subscribe((res:any)=>{

      this.token=res.jwt
      this.body.message=`${this.url}${this.token}`
      this.body.url_app='127.0.0.1:4200'
      this.body.from_Name='Secret de la vision et la sagesse'
      this.body.to_name=res.pseudo
      console.log(this.body)
     emailjs.send('service_3mcwlc8', 
      'template_z0gt914',
      this.body,
      'DPymQjxnPiX6l_e46',
      )
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        this ._snackBar.openFromComponent(ResetPasswordComponent, {
          duration : 5 * 1000 ,
          horizontalPosition:'center',
          verticalPosition:'top'
          
        });
  },(err)=>{
    this.error=err.error.message
    this ._snackBar.open(this.error,'Ok', {
      duration : 5 * 1000 ,
      horizontalPosition:'center',
      verticalPosition:'top'
      
    });
  })

  
  }


   
}
