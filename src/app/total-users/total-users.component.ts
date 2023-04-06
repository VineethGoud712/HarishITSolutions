import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.css']
})
export class TotalUsersComponent implements OnInit{
users:any;
  constructor(private toastr: ToastrService,private service :ApiService,private route:ActivatedRoute) {
	
	}

  
  ngOnInit() {
   
    this.getUsers();
 


  
  }

  

  getUsers(){
    this.service.getUsers().subscribe((res:any)=>{
      console.log(res);
      this.users = res['userDetails'];
      
    })
  }

  
deleteUser(udata:any){
  this.service.deketeuser(udata.id).subscribe(res=>{
    console.log(res);
    this.getUsers();
  })
}

}
