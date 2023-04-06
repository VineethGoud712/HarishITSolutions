import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
})
export class AddJobComponent implements OnInit {
  registerForm: any;

  constructor(
    private toastr: ToastrService,
    private service: ApiService,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = new FormGroup({
      jobTitle: new FormControl('', [Validators.required]),
      jobResponsibilites: new FormControl('', [Validators.required]),

      jobRequirments: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  saveJob() {
    this.service.saveJob(this.registerForm.value).subscribe((res: any) => {
      console.log(res);
      if (res['success'] === 'true') {
        this.toastr.success(res['message'], 'SUCCESS');
        this.createForm();
      } else {
        this.toastr.error(res['message'], 'ERROR');
      }
    });
  }
}
