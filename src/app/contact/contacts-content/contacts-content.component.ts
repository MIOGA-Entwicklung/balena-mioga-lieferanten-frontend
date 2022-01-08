import {Component, Input, OnInit} from '@angular/core';
import {Contacts} from "../contact";
import {HttpErrorResponse} from "@angular/common/http";
import {ContactServices} from "../contact.services";
import {ContactComponent} from "../contact.component";

@Component({
  selector: 'app-contacts-content',
  templateUrl: './contacts-content.component.html',
  styleUrls: ['./contacts-content.component.scss']
})
export class ContactsContentComponent implements OnInit  {

  @Input()
  public contactsList: Contacts[] | undefined;



  constructor() { }

  ngOnInit(): void {
  }



}
