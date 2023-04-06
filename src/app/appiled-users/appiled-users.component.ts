import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appiled-users',
  templateUrl: './appiled-users.component.html',
  styleUrls: ['./appiled-users.component.css']
})
export class AppiledUsersComponent implements OnInit {
  appiledJobusers: any;
  constructor(private toastr: ToastrService,private service :ApiService,private route:ActivatedRoute) {
	
	}
  ngOnInit(){
   this.getAppiledJobUsers();
   

  }

  getAppiledJobUsers(){
    this.service.getAppiledUsers().subscribe((res:any)=>{
      console.log(res);
      this.appiledJobusers = res['jobDetails'];
      
    })
  }


  reject(udata:any,status:any){
    this.service.deleteAppiledJobUser(udata.id).subscribe((res:any)=>{
      console.log(res);
      if(res['success']=="true"){
        this.getAppiledJobUsers();
        const body = {
          userId:udata.userId,
          rejectedRole:udata.applyedRole,
          email:udata.email,
          name: udata.firstName + " "+udata.lastName,
          status:status
        }
         this.service.saveRejectUser(body).subscribe((res:any)=>{
          console.log(res);
          if(res['success']==="true"){
            this.getShortlistJobs();
          }
          
         })
      }else{
        this.toastr.error('Unable to Reject Job ','ERROR');
      }
     
    })
  }


  getShortlistJobs(){
    this.service.getRejectJobdetails().subscribe((res:any)=>{
      console.log(res);
  
      
    })
    }

}
