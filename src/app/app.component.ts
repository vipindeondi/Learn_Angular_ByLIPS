import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : `<h1>Hello World
  // From Angualr </h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelManagementApp-V7';

  role: string = 'Super-User';

}
