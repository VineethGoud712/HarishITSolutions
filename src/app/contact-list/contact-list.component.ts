import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactlist:any;
 
  totalContactlistJob:any;
  constructor(private service :ApiService){



  }


  ngOnInit(){
    this.getContactListJobs();
 
  }


  getContactListJobs(){
  this.service.getContactus().subscribe((res:any)=>{
    console.log(res);

    if(res['success']==="true"){
      this.contactlist = res['contactDetails'] || [];
   
   
     
      this.totalContactlistJob = res['TotalContacts'];
    }else{

    }
    
  })
  }
}
