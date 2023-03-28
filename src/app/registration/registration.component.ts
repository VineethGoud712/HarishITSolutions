import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  degreeFlag:boolean | undefined;
  degreeFlag1:boolean = true;
  registerForm:any;
  options:any;


  constructor(private toastr: ToastrService,private route:Router,private service:ApiService){

  }

  ngOnInit(){
    this.options = {opacity:1};
   this.createForm();
  
  }
  
  createForm(){
    this.registerForm =  new FormGroup(
      {
        
        firstName:new FormControl('',[Validators.required]),
        lastName:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required]),
        confirmpassword:new FormControl('',[Validators.required]),
        phone:new FormControl('',[Validators.required]),
        alternativePhone:new FormControl('',[Validators.required]),
        age:new FormControl('',[Validators.required]),
        adhaarNo:new FormControl('',[Validators.required]),
        gender:new FormControl(0,[Validators.required]),
        qualification:new FormControl(0,[Validators.required]),
        branch:new FormControl(0,[Validators.required]),
        passedOutYear:new FormControl(0,[Validators.required]),
        perminentAdd:new FormControl('',[Validators.required]),
      }
    );
  }

  registerHere(){
    console.log();


    

    if(this.registerForm.value){
       if(this.f.password.value != this.f.confirmpassword.value){
           this.toastr.warning('Password and Confirmation Password Doesnot Match', 'WARNING',this.options);
       }else if(this.f.gender.value == 0){
           this.toastr.warning('Please Select Gender', 'WARNING',this.options);
       }
       else if(this.f.qualification.value == 0){
        this.toastr.warning('Please Select Qualification', 'WARNING',this.options);
        }else if(this.f.branch.value == 0){
        this.toastr.warning('Please Select Branch', 'WARNING',this.options);
       }else if(this.f.passedOutYear.value == 0){
        this.toastr.warning('Please Select Please Select Passed Out Year', 'WARNING',this.options);
       } else{
        this.service.saveregisterform(this.registerForm.value).subscribe((res:any)=>{
          console.log(res);
          if(res['success'] && res['success'] === "true" ){
            this.createForm();
             this.route.navigate(['login']);
          }else{
            this.toastr.warning(res['message'], 'ERROR',this.options);
            this.route.navigate(['register']);
          }
          
        },(err:any)=>{
          this.toastr.warning('Some thing Went Wrong Please Try Again', 'ERROR',this.options);
        })
        
      
   
       }
      }
  
  
   

  }


selectdegree(evt:any){
  if(evt.value === 'Degree'){
     this.degreeFlag = true;
     this.degreeFlag1 = false;
     this.registerForm.get('branch').setValue(0);
  }else{
    this.degreeFlag = false;
    this.degreeFlag1 = false;
    this.registerForm.get('branch').setValue(0);
  }
}


selectBranch(evt:any,val:any){
  if(val === 'degree'){
    this.registerForm.get('qualification').setValue("Degree");
 }else{
  this.registerForm.get('qualification').setValue("B.Tech");
 }

}



onlyNumberAllowed(event:any): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;

}

onlyAlphabetsAllowed(event:any): boolean {
  const charCode = event.keyCode;
 
  if ((charCode < 65 || (charCode > 90 && charCode < 97 )) || (charCode < 97 || charCode > 122) ) {
    return false;
  }
  return true;

}


get f() { return this.registerForm.controls; }


}