import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/shaded/footer/footer.component';
import { SidebarComponent } from '../components/shaded/sidebar/sidebar.component';
import { HeaderComponent } from '../components/shaded/header/header.component';
import { CitationFavotesComponent } from '../resources/components/citation-favotes/citation-favotes.component';
import { DefautBioAutorComponent } from '../resources/components/defaut-bio-autor/defaut-bio-autor.component';
import { RouterModule } from '@angular/router';
import { AdminService } from '../services/admin.service';




@NgModule({
  declarations: [
   
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    CitationFavotesComponent,DefautBioAutorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    CitationFavotesComponent,DefautBioAutorComponent
  ],
  providers:[AdminService]
})
export class ShadedModule { }
