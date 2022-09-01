import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-favites',
  templateUrl: './my-favites.component.html',
  styleUrls: ['./my-favites.component.css']
})
export class MyFavitesComponent implements OnInit {
  varun:string="assets/plugins/images/users/varun.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
