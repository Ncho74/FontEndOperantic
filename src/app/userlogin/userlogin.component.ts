import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AdminService} from '../services/admin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})

export class UserloginComponent implements OnInit {
    error:any
    submited:boolean=false
   userForm:FormGroup
  constructor(
    private s:AdminService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
  ) {
    this.userForm= this.formBuilder.group({
      pseudo:[""],
      email:[""],
      password:[""],
      tel:[""]

    })
  }
  get f(){ return this.userForm.controls}
  ngOnInit(): void {
   
  }

  onSubmit():any{

   if(this.userForm.invalid){
    return ;
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
}
