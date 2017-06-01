import { Component, Injectable } from '@angular/core';

export interface myData {
    "_id": String,
    "name": String,
    "code": String,
    "description": String,
    "minexperience": Number,
    "maxexperience": Number,
    "skills": String,
    "status": String
  
}

@Injectable()
export class InfoService {

  constructor() { }
  sharingData: myData={
    "_id": "5915f21b6b438823201acb37",
    "name": "UX Developer",
    "code": "UX",
    "description": "Design",
    "minexperience": 3,
    "maxexperience": 5,
    "skills": "Photoshop",
    "status": "Created",
  };
  saveData(str){
    console.log(str.name);
    this.sharingData=str;
    console.log(this.sharingData.code) 
  }
  getData(){
    console.log('get service called');
    return this.sharingData;
  }

}
