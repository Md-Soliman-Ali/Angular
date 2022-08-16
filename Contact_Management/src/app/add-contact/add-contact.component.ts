import { Component, OnInit } from '@angular/core';
import { MyContact } from '../models/myContact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  public loading: boolean = false;
  public contact: MyContact = {} as MyContact;
  public errorMessage: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
