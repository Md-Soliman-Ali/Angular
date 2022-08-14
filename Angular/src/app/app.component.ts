import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  // Data Binding (Interpolation) => {{}}
  pageTitle: string = "Data Binding in Angular Application";
  // Data Binding (Property Binding) => []
  imageUrl = "assets/Angular.png";
  // Data Binding (Event Binding) => ()
  hello() {
    alert("You Clicked Me!");
  }
  // Data Binding (Two-Way Binding) => [()]
  userName: string;
}
