import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { SnackBarService } from '../service/snack-bar.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  password:any;

  show = false;
  error:any;
   loginForm:FormGroup 
  constructor(
    private s:AdminService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private snackBarService:SnackBarService
    ) {
      this.loginForm=this.formBuilder.group({
        email:new FormControl(null,
         [
          Validators.required,
          Validators.email,
           Validators.minLength(4)
         ]
          ),
        password:new FormControl(null,[
          Validators.required,
           Validators.minLength(4)
        ])
      })
     }


  ngOnInit(): void {
  }
  onClick(pass:any) {
   pass.type
    if (pass.type === 'password') {
      pass.type = 'text';
      this.show = true;
    } else {
      pass.type = 'password';
      this.show = false;
    }
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return ;
    }
    this.s.login(this.loginForm.value)
        
          .subscribe(()=>{
            this.snackBarService.openSuccessSnackBar('Vous etes connectes !')
            this.router.navigate(["custom"])
          },
        (err:any)=>{
           this.error=err.error.message
           this.snackBarService.openFailureSnackBar(this.error)
        }
          );
  }

}
