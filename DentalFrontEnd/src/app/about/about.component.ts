import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  ImagePath: string;
  loginservice: LoginService;
  
  constructor(private router: Router) {
    //image location
    this.ImagePath = '../assets/img/about-img.jpg'
  }
  ngOnInit(): void {
  }
 
}

