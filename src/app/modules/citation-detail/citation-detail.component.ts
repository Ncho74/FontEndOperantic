import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CitationService } from 'src/app/services/citation.service';

@Component({
  selector: 'app-citation-detail',
  templateUrl: './citation-detail.component.html',
  styleUrls: ['./citation-detail.component.css']
})
export class CitationDetailComponent implements OnInit {
   getCitation:any
   citation:any
  constructor(
    private activatedRoute:ActivatedRoute,
    private s:CitationService
  ) { }

  ngOnInit(): void {
    this.getCitation = this.activatedRoute.snapshot.paramMap.get('id');
    this.s.fetchById(this.getCitation)
                      .pipe(map((res:any)=>{
                        this.citation=res
                        console.log(this.citation)
                      }))
                      .subscribe()
      }

}
