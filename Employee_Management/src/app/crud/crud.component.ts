import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {

  newEmployeeClicked = false;

  employee = [
    { name: 'Md. Soliman Ali', position: 'Software Engineer in Test' }
  ]

  color: any;

  constructor() { }

  ngOnInit(): void {
  }

  model1: any = {};
  model2: any = {};

  addEmployee() {
    this.employee.push(this.model1);
    this.model1 = {}
  }

  deleteEmployee(id: any) {
    this.employee.splice(id)
    console.log(id)
  }

  myValue: any;

  editEmployee(editEmployeeInfo: any) {
    this.model2.name = this.employee[editEmployeeInfo].name;
    this.model2.position = this.employee[editEmployeeInfo].position;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    let editEmployeeInfo = this.myValue;
    for (let i = 0; i < this.employee.length; i++) {
      if (i == editEmployeeInfo) {
        this.employee[i] = this.model2;
        this.model2 = {};
      }
    }
  }

  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

  changeColorOne() {
    this.color = !this.color;
    if (this.color) {
      return '#ffffff';
    }
    else {
      return '#f6f6f6';
    }
  }

}
