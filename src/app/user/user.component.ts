import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users : any[];
  constructor(private activeRoute : ActivatedRoute) { 
   // alert("User Constructur");
  }

  ngOnInit(): void {
   // alert("User Init is calling")
    debugger;
    console.log("Before Subsscribe data : ",this.activeRoute.data);
    this.activeRoute.data.subscribe(data => {
      debugger;
      this.users = data.users;
      console.log("Fetched User data : ",this.users);
    });
  }

}
