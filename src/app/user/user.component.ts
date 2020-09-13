import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup , FormControl, FormBuilder, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  registerForm : FormGroup;
  firstName : string = "";
  lastName : string = "";
  email : string = "";
  password : string = "";

  users : any[];
  constructor(private activeRoute : ActivatedRoute, 
              private formBuilder : FormBuilder) { 
     this.registerForm = formBuilder.group({
          firstName : ['',Validators.required],
          lastName : ['',Validators.required],
          email : ['',[Validators.required, Validators.email]],
          password : ['',Validators.required]
     });
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

  saveUser(registerForm : any) {
    debugger;
      alert("save user called");
  }

}
