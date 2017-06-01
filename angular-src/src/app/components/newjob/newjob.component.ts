import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.css']
})
export class NewjobComponent implements OnInit {
  name : String;
  code : String;
  description : String;
  minexperience : Number;
  maxexperience : Number;
  skills : String;
  status : String;
  id : String;


  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router,
    private infoService : InfoService
  ) { }

  ngOnInit() {
    const jobdata = this.infoService.getData();
    this.name = jobdata.name;
    this.code = jobdata.code;
    this.description = jobdata.description;
    this.minexperience = jobdata.minexperience;
    this.maxexperience = jobdata.maxexperience;
    if(jobdata.status == 'Created'){
      this.status = 'Update';
      this.id = jobdata._id;
    }else{
      this.status = 'Created';
    }
    this.skills = jobdata.skills;
  }
  newJobSubmit(){
    const newjob = {
      name : this.name,
      code : this.code,
      description : this.description,
      minexperience : this.minexperience,
      maxexperience : this.maxexperience,
      skills : this.skills,
      status : this.status
    }
    console.log(newjob);
     // Create new JOb user
     if(newjob.status=='Created'){
        this.authService.createJob(newjob).subscribe(data => {
          if(data.success){
            this.flashMessage.show('You have successfully created the Job '+newjob.name, {cssClass: 'alert-success', timeout: 3000});
            this.router.navigate(['/dashboard']);
          } else {
            this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
            this.router.navigate(['/newjob']);
          }
        });

     }else{
        this.authService.updateJob(this.id,newjob).subscribe(data => {
          if(data.success){
            this.flashMessage.show('You have updated created the Job '+newjob.name, {cssClass: 'alert-success', timeout: 3000});
            this.router.navigate(['/dashboard']);
          } else {
            this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
            this.router.navigate(['/newjob']);
          }
        });

     }
  }


}
