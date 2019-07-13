import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentDate: Date;

  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();
  }

}
