import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
 img1="assets/plugins/images/large/img1.jpg";
 genu="assets/plugins/images/users/genu.jpg";
 profile:any={
  _id:"",
  pseudo:"",
  tel:"",
  email:'',
  password:""
 }

  constructor(
    private admin:AdminService,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute:ActivatedRoute,
    private snackBarService:SnackBarService

    ) { }

  ngOnInit(): void {
    this.admin.getuserConnect(sessionStorage.getItem("token"))
                .subscribe((res)=>{
                  this.profile=res
                })
  }
  onSubmit(){
    this.admin.updateUser(this.profile._id,this.profile)
              .subscribe(()=>{
                this.snackBarService.openSuccessSnackBar('Votre profile a ete modifier avec success')
                this.ngZone.run(()=>{
                  this.router.navigate(['custom/'])
                });
                
              },(err:any)=>{
                  this.snackBarService.openFailureSnackBar(err.error.message)
              })
  }

}
