import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentDashboardModel } from '../model/studentdashboard';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  formValue!: FormGroup;
  studentDashboardModelObj: StudentDashboardModel = new StudentDashboardModel();

  studentAllData: any;

  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      fees: ['']
    })
    this.getAllStudents()
  }

  clickAddDetails() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postStudentDetails() {
    this.studentDashboardModelObj.firstName = this.formValue.value.firstName;
    this.studentDashboardModelObj.lastName = this.formValue.value.lastName;
    this.studentDashboardModelObj.email = this.formValue.value.email;
    this.studentDashboardModelObj.mobile = this.formValue.value.mobile;
    this.studentDashboardModelObj.fees = this.formValue.value.fees;

    this.api.postStudent(this.studentDashboardModelObj).subscribe(response => {
      console.log(response);
      alert("Student Record Added Successfully!");
      this.formValue.reset();
    }, err => {
      alert("Something Went Wrong !!!")
    })
  }

  getAllStudents() {
    this.api.getStudent().subscribe(response => {
      this.studentAllData = response;
    })
  }

  deleteStudents(data: any) {
    this.api.deleteStudent(data.id).subscribe(response => {
      alert("Records Deleted Successfully!");
      this.getAllStudents();
    })
  }

  onEdit(data: any) {
    this.showAdd = false;
    this.showUpdate = true;

    this.studentDashboardModelObj.id = data.id;
    this.formValue.controls['firstName'].setValue(data.firstName);
    this.formValue.controls['lastName'].setValue(data.lastName);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['fees'].setValue(data.fees);
  }

  updateStudentDetails() {
    this.studentDashboardModelObj.firstName = this.formValue.value.firstName;
    this.studentDashboardModelObj.lastName = this.formValue.value.lastName;
    this.studentDashboardModelObj.email = this.formValue.value.email;
    this.studentDashboardModelObj.mobile = this.formValue.value.mobile;
    this.studentDashboardModelObj.fees = this.formValue.value.fees;

    this.api.updateStudent(this.studentDashboardModelObj, this.studentDashboardModelObj.id).subscribe(response => {
      alert("Record Updated Successfully!");
      this.formValue.reset();
      this.getAllStudents();
    })
  }

}
