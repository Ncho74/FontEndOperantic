import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
 img1="assets/plugins/images/large/img1.jpg";
 genu="assets/plugins/images/users/genu.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
