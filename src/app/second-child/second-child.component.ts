import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '.././shared/shared-service.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {
  public user_name : string;
  public user_age : number;
  
  constructor(private service: SharedServiceService) { }

  ngOnInit() {
    console.log('second child loaded successfully.');
    this.user_name = this.service.getName();
    this.user_age = this.service.getAge();
  }

}
