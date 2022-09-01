import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any
 varun:string="assets/plugins/images/users/varun.jpg";
 logo2="assets/plugins/images/logo-text.png";
 logo1="assets/plugins/images/logo-icon.png"
  constructor(
    private s:AdminService 
    ) { }

  ngOnInit(): void {
    this.s.getuserConnect(sessionStorage.getItem("token"))
    .pipe(map((res:any)=>{
       this.user=res
    }))
    .subscribe()
  }

}
