import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
   loginForm:FormGroup 
  constructor(
    private s:AdminService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
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

  onSubmit(){
    if(this.loginForm.invalid){
      return ;
    }
    this.s.login(this.loginForm.value)
        
          .subscribe(()=>{
            this.router.navigate(["custom"])
          });
  }

}
