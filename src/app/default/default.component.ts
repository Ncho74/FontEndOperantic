import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  user:any;
   page:string ="Dashbord"
  constructor(
    private s:AdminService
  ) { }

  ngOnInit(): void {
    this.s.getuserConnect(sessionStorage.getItem("token"))
          .pipe(map((res:any)=>{
            this.user=res
            sessionStorage.setItem("user",this.user._id)
          }))
          .subscribe()
  }

}
