import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { CitationService } from 'src/app/services/citation.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
   compteur:any
   autors="assets/plugins/images/author5.png";
   citations="assets/plugins/images/citation.png"
  constructor(
    private s:AdminService,
    private citS:CitationService
  ) { }

  ngOnInit(): void {
    this.citS.dashbord()
              .pipe(map((res:any)=>{
                  this.compteur=res
              }))
              .subscribe()
        
  }

}
