import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{

  ContactForm:any;

  constructor(private service :ApiService,private toast:ToastrService,private route:Router){

  }

  ngOnInit(){
  this.createForm();
  }

  createForm(){
    this.ContactForm =  new FormGroup(
      {
        
        fullName:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required]),
      
        subject:new FormControl('',[Validators.required]),
        message:new FormControl('',[Validators.required]),
  
      }
    );
  }

  ContactHere(){

    this.service.saveContact(this.ContactForm.value).subscribe((res:any)=>{
      console.log(res);
      if(res['success']=="true"){
        this.createForm();
        this.toast.success(res['message'],'SUCCESS');
        this.route.navigate(['home'])
      }else{
        this.toast.error(res['message'],'ERROR');
      }
      
    })

  }

  get f() { return this.ContactForm.controls; }

}
