import { Component, OnInit } from '@angular/core';
import { ServiceAutorService } from '../../services/service-autor.service';
import { ServiceCitationService } from '../../services/service-citation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private serviceCitation:ServiceCitationService,private serviceAutor:ServiceAutorService) { }

  ngOnInit(): void {
    this.serviceCitation.AddCitation().subscribe(()=>{
      console.log("Citations is already")
    })
    this.serviceAutor.AddAutor().subscribe(()=>{
      console.log("Authors is already")
    })
  }

}
