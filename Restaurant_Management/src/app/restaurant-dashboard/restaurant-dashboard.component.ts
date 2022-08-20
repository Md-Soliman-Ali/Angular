import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestaurantDashboard } from '../model/restaurant_model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {

  fromValue!: FormGroup
  restaurantModelObj: RestaurantDashboard = new RestaurantDashboard;

  RestaurantAllData: any;

  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private fromBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.fromValue = this.fromBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: ['']
    })

    this.getAllRestaurant()
  }

  clickAddRestaurant() {
    this.fromValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  addRestaurant() {
    this.restaurantModelObj.name = this.fromValue.value.name;
    this.restaurantModelObj.email = this.fromValue.value.email;
    this.restaurantModelObj.mobile = this.fromValue.value.mobile;
    this.restaurantModelObj.address = this.fromValue.value.address;
    this.restaurantModelObj.services = this.fromValue.value.services;

    this.api.postRestaurant(this.restaurantModelObj).subscribe(response => {
      console.log(response);
      alert("Record Updated Successfully!");
      this.fromValue.reset();
      this.getAllRestaurant();
    }, err => {
      alert("Something Went Wrong !!!");
    })
  }

  getAllRestaurant() {
    this.api.getRestaurant().subscribe(response => {
      this.RestaurantAllData = response;
    })
  }

  deleteRestaurant(data: any) {
    this.api.deleteRestaurant(data.id).subscribe(response => {
      alert("Records Deleted Successfully!");
      this.getAllRestaurant();
    })
  }

  onEdit(data: any) {
    this.showAdd = false;
    this.showUpdate = true;

    this.restaurantModelObj.id = data.id;

    this.fromValue.controls['name'].setValue(data.name);
    this.fromValue.controls['email'].setValue(data.email);
    this.fromValue.controls['mobile'].setValue(data.mobile);
    this.fromValue.controls['address'].setValue(data.address);
    this.fromValue.controls['services'].setValue(data.services);
  }

  updateRestaurant() {
    this.restaurantModelObj.name = this.fromValue.value.name;
    this.restaurantModelObj.email = this.fromValue.value.email;
    this.restaurantModelObj.mobile = this.fromValue.value.mobile;
    this.restaurantModelObj.address = this.fromValue.value.address;
    this.restaurantModelObj.services = this.fromValue.value.services;

    this.api.updateRestaurant(this.restaurantModelObj, this.restaurantModelObj.id).subscribe(response => {
      alert("Record Updated Successfully!");
      this.getAllRestaurant();
    })
  }

}
