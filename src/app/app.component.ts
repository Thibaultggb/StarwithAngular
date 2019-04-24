import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

User = {
  name: 'Doe',
  firstName: 'John',
  age: 25,
  quote: '',
  image: 'https://res.cloudinary.com/opquast/image/upload/c_fill,h_200,q_100,w_200/avatar_default.png'
}
}