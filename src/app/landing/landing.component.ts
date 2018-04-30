import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '.././shared/shared-service.service';
import { Userdetails } from '.././shared/userdetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

constructor(private service : SharedServiceService, private route: Router) {}

  ngOnInit() {
  }

  public save = (name, age) => {
    console.log(age);
    if(name !== undefined && name.trim().length !== 0 && age !== undefined) {
      let data: Userdetails = {
        _name : name,
        _age: age
      };
      this.service.setAll(data); 
      alert('user details saved');
      this.route.navigate(['/first']);
    }else 
      alert('Enter all the details');
  }
}
