import { Component, OnInit } from '@angular/core';
import {ContactServices} from "./contact.services";
import {Contacts} from "./contact";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  public contacts: Contacts[] | undefined;
  public editContact: Contacts | undefined;
  public deleteContact: Contacts | undefined;


  constructor(private contactService: ContactServices) {
  }

  ngOnInit(): void {
    this.getContacts();
  }

  public getContacts(): void {
    this.contactService.getAll().subscribe(
      (response: Contacts[]) => {
        this.contacts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddContact(addContactForm:NgForm):void{
    this.contactService.createContact(addContactForm.value).subscribe(
      (response:Contacts)=>{
        console.log(response);
        this.getContacts();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )


  }

  public onUpdateContact(updateContact: Contacts): void {
    this.contactService.updateContact(updateContact).subscribe(
      (response: Contacts) => {
        console.log(response);
        this.getContacts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteContact (contactId: any): void {

    this.contactService.deleteContact(contactId ).subscribe(
      (response: void) => {
        console.log(response);
        this.getContacts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(contact: any, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addContactModal');
    }
    if (mode === 'edit') {
      this.editContact = contact;
      button.setAttribute('data-target', '#updateContactModal');
    }
    if (mode === 'delete') {
      this.deleteContact = contact;
      button.setAttribute('data-target', '#deleteContactModal');
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();
  }

}
