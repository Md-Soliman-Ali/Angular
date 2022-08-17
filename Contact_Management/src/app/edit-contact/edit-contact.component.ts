import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from '../models/myContact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  public loading: boolean = false;
  public contactID: string | null = null;
  public contact: MyContact = {} as MyContact;
  public errorMessage: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.contactID = param.get('contactID')
    });
    if (this.contactID) {
      this.contactService.getUser(this.contactID).subscribe((data: MyContact) => {
        this.contact = data;
        this.loading = false;
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
    }
  }
  submitUpdate() {
    if (this.contactID) {
      this.contactService.updateUser(this.contact, this.contactID).subscribe((data: MyContact) => {
        this.router.navigate(['/']).then();
      }, (error) => {
        this.errorMessage = error;
        this.router.navigate([`official/user/edit/${this.contact}`]).then();
      })
    }
  }
}
