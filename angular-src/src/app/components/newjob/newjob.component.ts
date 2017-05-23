import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

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


  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.status = 'Created';
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
    this.authService.createJob(newjob).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You have successfully created the Job '+newjob.name, {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/newjob']);
      }
    });
  }


}
