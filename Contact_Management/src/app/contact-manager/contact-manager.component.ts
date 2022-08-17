import { Component, OnInit } from '@angular/core';
import { MyContact } from '../models/myContact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  public loading: boolean = false;
  public contacts: MyContact[] = [];
  public errorMessage: string | null = null;

  constructor(private cantService: ContactService) { }

  ngOnInit(): void {
    this.getAllUserData()
  }

  getAllUserData() {
    this.loading = true;
    // data:MyContact[]
    this.cantService.getAllUser().subscribe((data: any) => {
      this.contacts = data;
      this.loading = false;
    }, (error) => {
      this.errorMessage = error;
      this.loading = false;
    })
  }

  deleteUser(contactID: string | undefined) {
    if (contactID) {
      this.cantService.deleteUser(contactID).subscribe((data: {}) => {
        this.getAllUserData();
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
    }
  }
}

