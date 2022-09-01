import { Component, OnInit } from '@angular/core';
import { ServiceAutorService } from 'src/app/resources/services/service-autor.service';

@Component({
  selector: 'app-sidebar-default',
  templateUrl: './sidebar-default.component.html',
  styleUrls: ['./sidebar-default.component.css']
})
export class SidebarDefaultComponent implements OnInit {
 autors:any=[];
  constructor(private serviceAutor:ServiceAutorService ) { }

  ngOnInit(): void {
    this.serviceAutor.GetAutors().subscribe(res=>{
      this.autors=res
    })
  }

}
