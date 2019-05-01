import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() label: string = "hidden";
  @Output() onclick = new EventEmitter<string>();

  user = {
    name: "John",
    firstName: "Doe",
    age: 18,
    quote: "",
    img: 'https://res.cloudinary.com/opquast/image/upload/c_fill,h_200,q_100,w_200/avatar_default.png',
  }

  afficherAge() {
    if (this.label == "hidden") {
      this.label = "visible";
    }
    else {
      this.label = "hidden";
    }
    this.onclick.emit(this.label);
  }
  constructor() { }

  ngOnInit() {
  }

}
