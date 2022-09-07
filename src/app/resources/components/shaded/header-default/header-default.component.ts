import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.css']
})
export class HeaderDefaultComponent implements OnInit {
  page:string ="Secret de la vision et la sagesse";
  constructor() { }

  ngOnInit(): void {
  }

}
