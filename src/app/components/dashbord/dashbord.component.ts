import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(
    private s:AdminService
  ) { }

  ngOnInit(): void {
    this.s.getuserConnect(sessionStorage.getItem("token"))
          .pipe(map((res:any)=>{
            console.log(res)
          }))
  }

}
