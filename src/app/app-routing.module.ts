import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { DefaultComponent } from './default/default.component';
import { AddAutorComponent } from './modules/add-autor/add-autor.component';
import { AddCitationComponent } from './modules/add-citation/add-citation.component';
import { ProfilComponent } from './modules/profil/profil.component';
import { AutorListComponent } from './modules/autor-list/autor-list.component';
import { AutorDetailComponent } from './modules/autor-detail/autor-detail.component';
import { CitationListComponent } from './modules/citation-list/citation-list.component';
import { CitationDetailComponent } from './modules/citation-detail/citation-detail.component';
import { MyFavitesComponent } from './modules/my-favites/my-favites.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { MainComponent } from './resources/components/main/main.component';
import { CitationFavotesComponent } from './resources/components/citation-favotes/citation-favotes.component';
import { DefautCitationComponent } from './resources/components/defaut-citation/defaut-citation.component';
import { CitationByAuthorComponent } from './resources/components/citation-by-author/citation-by-author.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DefautBioAutorComponent } from './resources/components/defaut-bio-autor/defaut-bio-autor.component';
import { UpdateAuthorComponent } from './modules/update-author/update-author.component';
import { UpdateCitationComponent } from './modules/update-citation/update-citation.component';
const routes: Routes = [
   {
    path:"custom",
  component: DefaultComponent,
  children:[
    {
    path:"",
    component:DashbordComponent
  },{
    path:"addAutor",
    component:AddAutorComponent
  },
{
path:"addCitation",
component:AddCitationComponent

},{
  path:"userProfil",
  component:ProfilComponent
},{
  path:"autorList",
  component:AutorListComponent
},{
  path:"autor",
  component: AutorDetailComponent
},{
  path:"citationList",
  component:CitationListComponent
},{
  path:"citation",
  component:CitationDetailComponent
},{
  path:"my_favories",
  component: MyFavitesComponent
},{
  path:"updateAuthor/:id",
  component:  UpdateAuthorComponent
},{
    path:"updateCitation/:id",
    component:  UpdateCitationComponent

}
]
},
{
  path:"user",
  component:UserSignUpComponent,  
  children:[{
    path:"",
    component:UserAuthComponent,
  },{
    path:"sign",
    component:UserloginComponent
  },]
},

{
  path:"",
  component:MainComponent,
 children:[
  {
    path:'',
    component:DefautCitationComponent,
    pathMatch:"full"
  } ,
  {
    path:"favorites_citation",
    component:CitationFavotesComponent
  },
  {
    path:'citation/:author',
    component: CitationByAuthorComponent,
  },{
    path:"author/:id",
    component:DefautBioAutorComponent
  }
]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
