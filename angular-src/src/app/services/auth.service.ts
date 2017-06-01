import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:Http) {}

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers: headers})
      .map(res => res.json());
  }

  getAllJobs(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/jobs/getAllJobs',{headers: headers})
      .map(res => res.json());
  }

  createJob(newJob){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/jobs/createjob', newJob,{headers: headers})
      .map(res => res.json());
  }

  updateJob(id,newJob){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/jobs/updateJob/'+id, newJob,{headers: headers})
      .map(res => res.json());
  }

  deletejob(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.delete('http://localhost:3000/jobs/deletejob/'+id,{headers: headers})
      .map(res => res.json());
  }
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
