import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
 
  loginForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder,private user:UserService){
  }
  ngOnInit(): void {
      this.loginForm=this.formBuilder.group({
        email:['',Validators.required],
        password:['',[Validators.required,Validators.minLength(6)]]
      })
  }

  get f(){return this.loginForm.controls}

  onSubmit(){
    this.submitted=true
    if(this.loginForm.valid){
       let data={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
       }
       this.user.login(data).subscribe((responce)=>{
            console.log(responce)
       })
    }
  }

}
