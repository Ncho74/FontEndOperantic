import { Component, NgZone, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
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
  currentIndex = -1;
  title = 'pagination';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  constructor(
    private s:CitationService,
    private ngZone:NgZone,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.listCitation()
    
  }
  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchTitle) {
      params[`title`] = searchTitle;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
    listCitation(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.s.findAllCitation()
          .subscribe((response)=>{
            this.citation=response
            console.log(this.citation)
          })

  }
  handlePageChange(event: number): void {
    this.page = event;
    this.listCitation();
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.listCitation();
  }
  searchTitle(): void {
    this.page = 1;
    this.listCitation();
  }
  delete(id:any,i:number){
    if(window.confirm('Vous etes de vouloir supprimer ?')){
      this.s.deleteCitation(id).subscribe(()=>{
        this.citation.splice(i,1)
        window.location.reload()
      })
    }
  }

}
