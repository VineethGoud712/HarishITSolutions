import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { UsersService } from '../users.service';


const USERS:any = [];


@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit{

  degreeFlag:boolean | undefined;
  degreeFlag1:boolean = true;
  registerForm:any;
  options:any;
 
  users:any = [];
  page = 1;
	pageSize = 8;
	collectionSize = USERS.length;
	countries:any;
  login :any;

	constructor(private toastr: ToastrService,private service :ApiService,private route:ActivatedRoute,private userService:UsersService) {
		this.refreshUsers();
	}
  ngOnInit() {
    this.getUsers();

    this.route.queryParams.subscribe(res=>{
      console.log(res);
      // alert(JSON.stringify(res))
      this.login = res['login'];
    })

    this.options = {opacity:1};
    this.createForm();
  }

  

  getUsers(){
    this.service.getUsers().subscribe((res:any)=>{
      console.log(res);
      this.users = res['userDetails'];
      
    })
  }

	refreshUsers() {
		this.countries =  this.users.map((users:any, i:number) => ({ id: i + 1, ...users })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}


  createForm(){
    this.registerForm =  new FormGroup(
      {
        
        jobTitle:new FormControl('',[Validators.required]),
        jobResponsibilites:new FormControl('',[Validators.required]),
      
        jobRequirments:new FormControl('',[Validators.required]),
  
      }
    );
  }

  registerHere(){
    console.log();

  }





onlyAlphabetsAllowed(event:any): boolean {
  const charCode = event.keyCode;
 
  if ((charCode < 65 || (charCode > 90 && charCode < 97 )) || (charCode < 97 || charCode > 122) ) {
    return false;
  }
  return true;

}


get f() { return this.registerForm.controls; }

  

saveJob(){
this.service.saveJob(this.registerForm.value).subscribe(res=>{
  console.log(res);
  
})
}

deleteUser(id:any){
  this.service.deketeuser(id).subscribe(res=>{
    console.log(res);
    this.getUsers();
  })
}


}
