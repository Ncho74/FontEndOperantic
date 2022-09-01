import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../components/main/main.component';
import { DefautCitationComponent } from '../../components/defaut-citation/defaut-citation.component';
import { RouterModule } from '@angular/router';
import { ShadedResourceModule } from '../shaded-resource/shaded-resource.module';
import { ServiceCitationService } from '../../services/service-citation.service';
import { ServiceAutorService } from '../../services/service-autor.service';
import { CitationByAuthorComponent } from '../../components/citation-by-author/citation-by-author.component';
import { WebStorageService } from '../../services/web-storage.service';




@NgModule({
  declarations: [MainComponent, DefautCitationComponent,CitationByAuthorComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShadedResourceModule
  ],
  exports:[ShadedResourceModule,MainComponent,],
  providers:[ServiceCitationService,ServiceAutorService ,WebStorageService,]
})
export class DefaultModuleModule { }
