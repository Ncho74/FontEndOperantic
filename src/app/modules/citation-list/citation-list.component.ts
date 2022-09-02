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
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  constructor(
    private s:CitationService
  ) { }

  ngOnInit(): void {
    
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
  retrieveTutorials(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    // this.tutorialService.getAll(params)
    // .subscribe(
    //   response => {
    //     const { tutorials, totalItems } = response;
    //     this.tutorials = tutorials;
    //     this.count = totalItems;
    //     console.log(response);
    //   },
    //   error => {
    //     console.log(error);
    //   });
    this.s.findAllCitation()
          .pipe(map((res:any)=>{
            this.citation=res
          }))
          .subscribe()
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTutorials();
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }
  searchTitle(): void {
    this.page = 1;
    this.retrieveTutorials();
  }

}
