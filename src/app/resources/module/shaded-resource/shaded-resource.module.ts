import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterDefaultComponent } from '../../components/shaded/footer-default/footer-default.component';
import { SidebarDefaultComponent } from '../../components/shaded/sidebar-default/sidebar-default.component';
import { HeaderDefaultComponent } from '../../components/shaded/header-default/header-default.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    FooterDefaultComponent,
    SidebarDefaultComponent,
    HeaderDefaultComponent,],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterDefaultComponent,
    SidebarDefaultComponent,
    HeaderDefaultComponent,
  ]
})
export class ShadedResourceModule { }
