import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CitationService } from 'src/app/services/citation.service';

@Component({
  selector: 'app-citation-list',
  templateUrl: './citation-list.component.html',
  styleUrls: ['./citation-list.component.css']
})
export class CitationListComponent implements OnInit {
  varun:string="assets/plugins/images/users/varun.jpg";
  citation:any=[]
  constructor(
    private s:CitationService
  ) { }

  ngOnInit(): void {
    this.s.findAllCitation()
          .pipe(map((res:any)=>{
            this.citation=res
          }))
          .subscribe()
  }

}
