import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AutorService } from 'src/app/services/autor.service';
import { CitationService } from 'src/app/services/citation.service';

@Component({
  selector: 'app-autor-detail',
  templateUrl: './autor-detail.component.html',
  styleUrls: ['./autor-detail.component.css']
})
export class AutorDetailComponent implements OnInit {
  author:any
  getAuthor:any
  constructor(
    private activatedRoute:ActivatedRoute,
    private s:AutorService,
    private citService:CitationService
  ) { }

  ngOnInit(): void {
    this.getAuthor = this.activatedRoute.snapshot.paramMap.get('id');
    this.citService.fetchById(this.getAuthor)
          .pipe(map((res:any)=>{
               this.author=res
          } ))
          .subscribe()

  }

  }


