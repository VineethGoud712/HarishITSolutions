import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

usersdata:any;

constructor(private service:ApiService){

}

  ngOnInit() {
    this.getPersons();
  }

  getPersons(){
    this.service.getUsers().subscribe((res:any)=>{
      console.log(res);
      this.usersdata = res['userDetails'];
      
    })
  }

  deleteUser(id:any){
 this.service.deketeuser(id).subscribe(res=>{
  console.log(res);
  this.getPersons();
  
 })
  }

  EditUser(id:any){

  }

}
