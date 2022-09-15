import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AutorService } from 'src/app/services/autor.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent implements OnInit {
 author:any=[]
  constructor(private Aut:AutorService,
    private dialog: MatDialog,
    private snackBarService:SnackBarService
    ) { }

  ngOnInit(): void {
  this.listAutors()
          
  }
  listAutors():void{
    this.Aut.getAllAuthor()
    .pipe(map((res:any)=>{
       this.author=res
    }))
    .subscribe()
  }
  delete(id:any,i:any){
   
    if(window.confirm('Vous etes de vouloir supprimer ?, cela va supprimer toutes ses citations !')){
      this.Aut.deleteAuthor(id).subscribe((res)=>{
        this.author.splice(i,1)
        this.snackBarService.openSuccessSnackBar(`Auteur N.${i+1} a ete supprimer !`);
      })
    }
  }
}
