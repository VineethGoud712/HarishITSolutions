import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


 

  constructor(private http:HttpClient) { }

 

  getSizesOfTabs(){
    return this.http.get("http://localhost:8080/getSizesOfTabs");
  }
}
