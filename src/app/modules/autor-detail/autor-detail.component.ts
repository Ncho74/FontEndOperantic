import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AutorService } from 'src/app/services/autor.service';

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
    private s:AutorService
  ) { }

  ngOnInit(): void {
    this.getAuthor = this.activatedRoute.snapshot.paramMap.get('id');
    this.s.getAutorById(this.getAuthor)
          .pipe(map((res:any)=>{
               this.author=res
          } ))
          .subscribe()

  }

  }


