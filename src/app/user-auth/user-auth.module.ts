import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthComponent } from './user-auth.component';
import { RouterModule } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { UserloginComponent } from '../userlogin/userlogin.component';
import { UserSignUpComponent } from '../user-sign-up/user-sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserAuthComponent,
    UserSignUpComponent,
    UserloginComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[AdminService],
})
export class UserAuthModule { }
