import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./modules/layout/layout.module";
import {ZuliefererComponent} from './zulieferer/zulieferer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ContactComponent } from './contact/contact.component';
import {VarDirective} from "./zulieferer/ng-var.directive";
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsContentComponent } from './contact/contacts-content/contacts-content.component';
import { ZuliefererContentComponent } from './zulieferer/zulieferer-content/zulieferer-content.component';



@NgModule({
  declarations: [
    AppComponent,
    ZuliefererComponent,
    ContactComponent,
    VarDirective,
    HomeComponent,
    DownloadComponent,
    ContactsContentComponent,
    ZuliefererContentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
