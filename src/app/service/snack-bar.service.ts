import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }
  openSuccessSnackBar(text:any){
    this.snackBar.open(text, "OK", {
      verticalPosition:'top',
      horizontalPosition:'center',
      duration: 5000,
      panelClass: ['green-snackbar', 'login-snackbar'],
     });
    }
    //Snackbar that opens with failure background
    openFailureSnackBar(text:any){
    this.snackBar.open(text, "Reessayer encore!", {
      verticalPosition:'top',
      horizontalPosition:'center',
      duration: 5000,
      panelClass: ['red-snackbar','login-snackbar'],
      });
     }
    
}
