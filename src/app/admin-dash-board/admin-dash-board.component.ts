import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { UsersService } from '../users.service';
import { ContactListComponent } from '../contact-list/contact-list.component';

const USERS: any = [];

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css'],
})
export class AdminDashBoardComponent implements OnInit, AfterViewInit {

  contactListNumb: any;
  totalUsernumb:any;
  appiledUsers:any;
  shortlistnumb:any;
  rejectlistnumb:any;

  @ViewChild(ContactListComponent) contactList: any;
  Shortlistlength: any;
  Shortlists: any;
  RejectsList: any;

  constructor(
    private toastr: ToastrService,
    private service: ApiService,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngAfterViewInit() {
    this.contactListNumb = this.contactList.TotalContacts;
  }

  ngOnInit() {
    this.getSizesOfTabs();
    this.getShortlistJobs();

  this.service.refreshNeeds.subscribe(()=>{
   
    setTimeout(() => {
      this.getSizesOfTabs();
      this.getShortlistJobs();
    }, 1000);
  
 
   })

  }

  getSizesOfTabs(){
    this.userService.getSizesOfTabs().subscribe((res:any)=>{
      if(res['success']=="true"){

        this.totalUsernumb = res['TotalUsers'] || '';
        this.appiledUsers = res['TotalAppileUsers'] || '';
        this.contactListNumb = res['TotalContactUs'] || '';

      }
    })
  }

  getShortlistJobs(){
    this.service.getRejectJobdetails().subscribe((res:any)=>{
      console.log(res);
  
      if(res['success']==="true"){
        this.Shortlistlength = res['RejectjobDetails'] || [];
       this.Shortlists =  this.Shortlistlength.filter((x:any)=>{return x.status == 'Shortlisted'});
       console.log(this.Shortlists.length);
       this.shortlistnumb = this.Shortlists.length;

       this.RejectsList =  this.Shortlistlength.filter((x:any)=>{return x.status == 'Rejected'});

       this.rejectlistnumb = this.RejectsList.length;
      
      }else{
  
      }
      
    })
    }


}
