import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { CitationService } from '../services/citation.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  user:any;
   page:string ="Secret de vision et la sage";
   compteur:any
   
  constructor(
    private s:AdminService,

    private citS:CitationService
  ) { }

  ngOnInit(): void {
  
  }

}
