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

  getUsersDetails(id:any){
    return this.http.get("http://localhost:8080/user/"+id);
  }

  getAppiledUsers(){
    return this.http.get("http://localhost:8080/getAppliedJobdetails");
  }

  getAppliedJobsByUserId(userId:any){
    return this.http.get("http://localhost:8080/getAppliedJobsByUserId/"+userId);
  }

 
  deketeuser(id:any){
    return this.http.delete("http://localhost:8080/delete/"+id);
  }

  updateuser(id:any,body:any){
    return this.http.put("http://localhost:8080/update/"+id,body);
  }

  deleteAppiledJobUser(id:any){
    return this.http.delete("http://localhost:8080/deleteAppiledJobUser/"+id);
  }


  loginform(body:any){
    return this.http.post('http://localhost:8080/login',body)
  }


  saveJob(body:any){

    return this.http.post('http://localhost:8080/saveJob',body)
  }

  saveAppiledJob(body:any){

    return this.http.post('http://localhost:8080/saveAppliedJobUsers',body)
  }

  saveContact(body:any){

    return this.http.post('http://localhost:8080/saveContact',body)
  }



  loggedIn(){
    return !!localStorage.getItem('username');
  }

  isAdmin(){
    if(localStorage.getItem('username') === 'ADMIN'){
      return true;
    }else{
      return false;
    }
  }

  }

