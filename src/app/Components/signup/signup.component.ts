import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from 'src/app/Services/UserService/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder,private user:UserService){}

  ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        fullname:['',[Validators.required]],
        email:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(6)]],
        phone:['',[Validators.required,Validators.minLength(10)]]
      });
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.valid) {
      let data={
        fullname: this.signupForm.value.fullname,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        mobileNumber: this.signupForm.value.phone,
      }
      this.user.signup(data).subscribe((responce) =>{
         console.log(responce)
      })
    }
  }
}
