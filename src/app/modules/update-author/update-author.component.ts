import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Autor } from 'src/app/interfaces/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  getAuthor:any;
    author:any={
      autor_name:"",
      dateDeces_aut:"",
      lieuNaiss_aut:"",
      histPart_aut:"",
      bio_aut:"",
  
    }
 
  constructor(
     private s:AutorService,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute:ActivatedRoute
  ) {
  
  }

  ngOnInit(): void {
    this.getAuthor = this.activatedRoute.snapshot.paramMap.get('id');
    this.s.getAutorById(this.getAuthor)
          .pipe(map((res:any)=>{
               this.author=res
          } ))
          .subscribe()

  }
  onSubmit():any{
    this.getAuthor = this.activatedRoute.snapshot.paramMap.get('id');
    

     this.s. updateAutor( this.getAuthor,this.author)

       .subscribe(()=>{
            this.ngZone.run(()=>{
              this.router.navigate(['custom/autorList'])
            },(err:any)=>{
              console.log(err);
            });
          })
  }
}
