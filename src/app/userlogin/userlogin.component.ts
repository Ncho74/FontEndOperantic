import { Component, NgZone, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AdminService} from '../services/admin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})

export class UserloginComponent implements OnInit {
  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';
  newPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c)
  ]);
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c)
  ]);
  show = false;
  show1 = false;
  cpassword:any
  password:any;
    error:any
    submited:boolean=false
    userForm= this.formBuilder.group({
      pseudo:[null,[Validators.required, Validators.maxLength(15)]],
      email:[null,[Validators.minLength(5),Validators.email]],
      password:this.newPassword,
      tel:[null,[Validators.minLength(10)]],
      cpassword:this.confirmPassword

    },
    {
      validator: this.ConfirmedValidator('password', 'cpassword'),
    }
    )
  constructor(
    private s:AdminService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
  ) {
    
  }
  get f(){ return this.userForm.errors}
  ngOnInit(): void {
   
  }

  onSubmit():any{
  console.log(this.cpassword,this.password)
   
  if (!this.userForm?.valid) {
    return;
  }
   this.s.register(this.userForm.value)

    .pipe(map((res:any)=>{
       return res
  }))
    .subscribe(()=>{
     
      this.ngZone.run(()=>{
        this.router.navigate(['/user'])
      
    })
  },(err:any)=>{
    this.error=err.error.message
  })


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
  onClick1(pass:any) {
    pass.type
     if (pass.type === 'password') {
       pass.type = 'text';
       this.show1 = true;
     } else {
       pass.type = 'password';
       this.show1 = false;
     }
    }
  
    ConfirmedValidator(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (
          matchingControl.errors &&
          !matchingControl.errors['confirmedValidator']
        ) {
          return;
        }
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
}
