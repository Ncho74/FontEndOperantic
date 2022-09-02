import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashbordComponent } from '../components/dashbord/dashbord.component';
import { RouterModule } from '@angular/router';
import { ShadedModule} from '../shaded/shaded.module';
import { ProfilComponent } from '../modules/profil/profil.component';
import { AddCitationComponent } from '../modules/add-citation/add-citation.component';
import { AddAutorComponent } from '../modules/add-autor/add-autor.component';
import { AutorDetailComponent } from '../modules/autor-detail/autor-detail.component';
import { AutorListComponent } from '../modules/autor-list/autor-list.component';
import { CitationDetailComponent } from '../modules/citation-detail/citation-detail.component';
import { CitationListComponent } from '../modules/citation-list/citation-list.component';
import{MyFavitesComponent} from"../modules/my-favites/my-favites.component"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { AutorService } from '../services/autor.service';
import { UpdateAuthorComponent } from '../modules/update-author/update-author.component';
import { UpdateCitationComponent } from '../modules/update-citation/update-citation.component';
import { CitationService } from '../services/citation.service';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,
    ProfilComponent,
    AddCitationComponent,
    AddAutorComponent,
    AutorDetailComponent,
    AutorListComponent,
    CitationDetailComponent,
    CitationListComponent,
    MyFavitesComponent,
    UpdateAuthorComponent,
    UpdateCitationComponent 

  ],
  imports: [
    CommonModule,
    RouterModule,
    ShadedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers:[AdminService,AutorService,CitationService]
})
export class DefaultModule { }
