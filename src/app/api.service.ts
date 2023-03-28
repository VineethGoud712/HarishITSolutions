import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();


  
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  saveregisterform(body:any){
    return this.http.post('http://localhost:8080/save',body)
  }

  getUsers(){
    return this.http.get("http://localhost:8080/userDetails");
  }

  deketeuser(id:any){
    return this.http.delete("http://localhost:8080/delete/"+id);
  }


  loginform(body:any){
    return this.http.post('http://localhost:8080/login',body)
  }


  saveJob(body:any){

    return this.http.post('http://localhost:8080/saveJob',body)
  }

  saveContact(body:any){

    return this.http.post('http://localhost:8080/saveContact',body)
  }



  loggedIn(){
    return !!localStorage.getItem('username');
  }

  }

