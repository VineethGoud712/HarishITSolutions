import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { TopHeaderComponent } from '../top-header/top-header.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  message: string = "Hello!"

  @Output() messageEvent = new EventEmitter<string>();
  data: any;
 loginFlag:boolean =false;
  constructor(private route:Router,private service :ApiService,private toastr: ToastrService) { }


  loginForm:any;

 

  ngOnInit(){
    this.clearLocalStorage();

   this.createLoginForm();

   this.service.currentMessage.subscribe(message => this.message = message)
   
  }


  sendMessage() {
    this.messageEvent.emit(this.message)
  }

  
  newMessage() {
    this.service.changeMessage("Hello from Second Component")
  }

  createLoginForm(){

    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    })

  }


  clearLocalStorage(){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  login(){
    this.service.loginform(this.loginForm.value).subscribe((res:any)=>{
      console.log(res);
      if(res['success'] && res['success'] === "true"){
        localStorage.setItem("username",this.loginForm.value['email']);
        localStorage.setItem("password",this.loginForm.value['password']);
     
        if(res && res['IsAdmin'] === "true"){
          this.route.navigate(['/adminDashboard'],   { queryParams: { login: 'true' } });
         this.loginFlag = true;
          
          this.toastr.success(res['message'],'SUCCESS')
        }else{
          localStorage.setItem("userId",res['UserId']);
          this.route.navigate(['/userDashboard']);
          this.toastr.success(res['message'],'SUCCESS')
        }
         
      }else{

     
        this.toastr.error(res['message'],'ERROR');
        this.createLoginForm();

      }
      
    })

   
  }

  setlogin(){

  }



  get f() { return this.loginForm.controls; }
  


}
