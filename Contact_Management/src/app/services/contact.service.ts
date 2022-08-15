import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MyContact } from '../models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl: string = `http://localhost:4000`;

  constructor(private http: HttpClient) { }

  // Get All User Data
  public getAllUser(): Observable<MyContact> {
    let dataUrl: string = `${this.baseUrl}/icab_blood_official`;
    return this.http.get<MyContact>(dataUrl).pipe(catchError(this.handleError))
  }

  // Get Single User Data
  public getUser(contactID: string): Observable<MyContact> {
    let dataUrl: string = `${this.baseUrl}/icab_blood_official/${contactID}`;
    return this.http.get<MyContact>(dataUrl).pipe(catchError(this.handleError))
  }

  // Create New User
  public createUser(contact: MyContact): Observable<MyContact> {
    let dataUrl: string = `${this.baseUrl}/icab_blood_official`;
    return this.http.post<MyContact>(dataUrl, contact).pipe(catchError(this.handleError))
  }

  // Update User
  public updateUser(contact: MyContact, contactID: string): Observable<MyContact> {
    let dataUrl: string = `${this.baseUrl}/icab_blood_official/${contactID}`;
    return this.http.put<MyContact>(dataUrl, contact).pipe(catchError(this.handleError))
  }

  // Delete User
  public deleteUser(contactID: string): Observable<MyContact> {
    let dataUrl: string = `${this.baseUrl}/icab_blood_official/${contactID}`;
    return this.http.delete<MyContact>(dataUrl).pipe(catchError(this.handleError))
  }

  // Error Solve
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = ''
    if (error.error instanceof ErrorEvent) {
      // Client Error
      errorMessage = `Error :${error.error.message}`
    }
    else {
      // Server Side Error
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`
    }
    return throwError(errorMessage)
  }
}
