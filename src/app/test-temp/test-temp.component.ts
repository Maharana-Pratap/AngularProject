import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-temp',
  templateUrl: './test-temp.component.html',
  styleUrls: ['./test-temp.component.scss']
})
export class TestTempComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title = "Maharana";
  isAvl = false;
  months = ["Jan","Fab","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 
  myClickFunction(event) {
    console.log("")
    this.isAvl = true;
  }

  changeMonth(event) {
    alert("Changed month from the Dropdown");
    this.isAvl = false;
    console.log(event);
  }
}
