import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reject-list',
  templateUrl: './reject-list.component.html',
  styleUrls: ['./reject-list.component.css']
})
export class RejectListComponent  implements OnInit{

  rejectList:any;
  rejectLists:any;
  totalRejectedJob:any;
  constructor(private service :ApiService){



  }


  ngOnInit(){
    this.getRejectJobs();
  }


  getRejectJobs(){
  this.service.getRejectJobdetails().subscribe((res:any)=>{
    console.log(res);

    if(res['success']==="true"){
      this.rejectList = res['RejectjobDetails'] || [];
     this.rejectLists =  this.rejectList.filter((x:any)=>{return x.status == 'Rejected'});
     console.log(this.rejectLists);
     
      this.totalRejectedJob = res['TotalRejectJobs'];
    }else{

    }
    
  })
  }

}
