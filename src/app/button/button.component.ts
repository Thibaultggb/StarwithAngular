import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


    public show: boolean = false;
    public buttonName: any = 'age';
  
    toggle() {
      this.show = !this.show;
      if (this.show)
        this.buttonName = "Masquer age";
      else
        this.buttonName = "Afficher age";
    }

  constructor() { }

  ngOnInit() {
  }

}
