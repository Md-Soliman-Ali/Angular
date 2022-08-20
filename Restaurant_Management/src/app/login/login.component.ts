import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fromBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fromBuilder.group({
      email: [''],
      password: ['']
    })
  }

  logIn() {
    this._http.get<any>("http://localhost:3000/signup").subscribe(response => {
      const user = response.find((data: any) => {
        return data.email === this.loginForm.value.email && data.password === this.loginForm.value.password
      })
      if (user) {
        alert("User Login Successfully!");
        this.loginForm.reset();
        this.router.navigate(['admin'])
      } else {
        alert("Credential Not Match!")
      }
    }, err => {
      alert("Server Side Error!")
    })
  }

}
