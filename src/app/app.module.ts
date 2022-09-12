import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './default/default.module';
import { ShadedModule } from './shaded/shaded.module';
import { UserAuthModule } from './user-auth/user-auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultModuleModule } from './resources/module/default-module/default-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShadedResourceModule } from './resources/module/shaded-resource/shaded-resource.module';
import { WebStorageService } from './resources/services/web-storage.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    NewPasswordComponent,
  
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    ShadedModule,
    UserAuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultModuleModule,
    BrowserAnimationsModule,
    ShadedResourceModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    
  
  ],
  providers: [WebStorageService ],
  exports:[
     DefaultModule,
    ShadedModule,
    UserAuthModule,
    DefaultModuleModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
