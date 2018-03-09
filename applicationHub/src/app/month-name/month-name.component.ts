import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-name',
  templateUrl: './month-name.component.html',
  styleUrls: ['./month-name.component.css']
})
export class MonthNameComponent implements OnInit {

  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  constructor() { }

  ngOnInit() {
  }

}
