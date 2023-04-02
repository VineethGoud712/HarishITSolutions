import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{

  degreeFlag:boolean | undefined;
  degreeFlag1:boolean = true;
  registerForm:any;
  options:any;
  getUsersDetails:any;
  closeResult = "";
  greetingMsg:String = "";
  datetime:any;
  constructor(private service:ApiService,private modalService: NgbModal,private toastr:ToastrService){

  }

  ngOnInit() {
    this.getUser();
    
 
  }

  getUser(){

    this.service.getUsersDetails(localStorage.getItem('userId')).subscribe((res:any)=>{
      console.log(res);
      if(res['success'] === "true"){
        this.getUsersDetails  = res['user'];
        this.BindcreateForm();
        this.getGreeting();
      }else{

      }
    
    })
 
  }

   
  createForm(){
    this.registerForm =  new FormGroup(
      {
        
        firstName:new FormControl('',[Validators.required]),
        lastName:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
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


  BindcreateForm(){
    this.registerForm =  new FormGroup(
      {
        
        firstName:new FormControl(this.getUsersDetails.firstName,[Validators.required]),
        lastName:new FormControl(this.getUsersDetails.lastName,[Validators.required]),
        email:new FormControl(this.getUsersDetails.email,[Validators.required,Validators.email]),
        password:new FormControl(this.getUsersDetails.password,[Validators.required]),
        confirmpassword:new FormControl(this.getUsersDetails.confirmpassword,[Validators.required]),
        phone:new FormControl(this.getUsersDetails.phone,[Validators.required]),
        alternativePhone:new FormControl(this.getUsersDetails.alternativePhone,[Validators.required]),
        age:new FormControl(this.getUsersDetails.age,[Validators.required]),
        adhaarNo:new FormControl(this.getUsersDetails.adhaarNo,[Validators.required]),
        gender:new FormControl(this.getUsersDetails.gender,[Validators.required]),
        qualification:new FormControl(this.getUsersDetails.qualification,[Validators.required]),
        branch:new FormControl(this.getUsersDetails.branch,[Validators.required]),
        passedOutYear:new FormControl(this.getUsersDetails.passedOutYear,[Validators.required]),
        perminentAdd:new FormControl(this.getUsersDetails.perminentAdd,[Validators.required]),
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
      
          }else{
            this.toastr.warning(res['message'], 'ERROR',this.options);
          
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

get f() { return this.registerForm.controls; }


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

getGreeting(){
var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  this.greetingMsg = "Good Morning"
  
} else if (curHr < 18) {
  this.greetingMsg = "Good Afternoon"

} else {

  this.greetingMsg = "Good Evening"
}
this.getdateTime();
}


getdateTime(){
  var currentdate = new Date();
this.datetime =  new Date().toLocaleString('en-IN'); 
}



  
	open(content:any) {
		this.modalService.open(content, { size:'xl',ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
		
		);
	}



  editUser(){
    this.service.updateuser(this.getUsersDetails.id,this.registerForm.value).subscribe((res:any)=>{
      console.log(res);
      if(res['success'] === "true"){

        this.toastr.success(res['message'],'SUCCESS');
        this.getUser();
        this.modalService.dismissAll();
      }else{
        this.toastr.error(res['message'],'ERROR')
      }
      
    })
  }

}
