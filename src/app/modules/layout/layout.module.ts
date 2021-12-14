import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {ZuliefererComponent} from "../../zulieferer/zulieferer.component";
import {ContactComponent} from "../../contact/contact.component";
import {HomeComponent} from "../../home/home.component";



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
    ,
    RouterModule.forRoot([
      {path:"", component:HomeComponent},
      {path:"home" , component:HomeComponent},
      {path: 'zulieferer', component: ZuliefererComponent},
      {path: 'contact', component:ContactComponent},


    ]),

  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
