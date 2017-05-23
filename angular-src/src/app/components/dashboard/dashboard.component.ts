import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:Object;

  constructor(private authService:AuthService, private router:Router) { }
  
  ngOnInit() {
    this.authService.getAllJobs().subscribe(profile => {
      this.user = profile;
    },
    err => {
      console.log(err);
      return false;
    });
  }
  craeteNewJob(){
    this.router.navigate(['/newjob']);
    return false;
  }

}
