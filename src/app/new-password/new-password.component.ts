import { Component, OnInit, VERSION } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  token:any
  user_id:any
  password:any;

  show = false;
  show1 = false;
  name = 'Angular ' + VERSION.major;
  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';
  newPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c)
  ]);
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c)
  ]);
  data:any={
    password:""
  }
  resetPasswordForm = this.formBuilder.group(
    {
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
    },
    {
      validator: this.ConfirmedValidator('newPassword', 'confirmPassword'),
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private admin:AdminService,
    private router:Router,
    private activatedRoute:ActivatedRoute

    ) {}
  ngOnInit(): void {

    this.token = this.activatedRoute.snapshot.paramMap.get('token');

    this.admin.getuserConnect(this.token).
       subscribe((res:any)=>{
         this.user_id=res._id
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
  onSubmit(): void {
    if (!this.resetPasswordForm?.valid) {
      return;
    }
    this.data.password=this.newPassword.value

    this.admin.resetPassword(this.user_id,this.data)
              .subscribe(()=>this.router.navigate(["/user/"]))
    
   
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
