import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent implements OnInit {
 author:any=[]
  constructor(private Aut:AutorService) { }

  ngOnInit(): void {
    this.Aut.getAllAuthor()
          .pipe(map((res:any)=>{
             this.author=res
          }))
          .subscribe()
          
  }
  delete(id:any,i:any){
   
    if(window.confirm('Vous etes de vouloir supprimer ?')){
      this.Aut.deleteAuthor(id).subscribe((res)=>{
        this.author.splice(i,1)
        window.location.reload()
      })
    }
  }
}
