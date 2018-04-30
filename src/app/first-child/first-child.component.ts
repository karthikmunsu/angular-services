import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '.././shared/shared-service.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {
  public user_name: string;
  public user_age: number;
  
  constructor(private service: SharedServiceService, private route: Router) { }

  ngOnInit() {
    console.log('First child component loaded successfully.');
    console.log(`user name Stored ${this.service.getName()} `);
    this.user_name = this.service.getName();
    this.user_age = this.service.getAge();
  }

  goto = () => this.route.navigate(['/second']);

}
