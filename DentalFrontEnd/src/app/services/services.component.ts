import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  ImagePath1: string;
  ImagePath2: string;
  ImagePath3: string;
  ImagePath4: string;
  ImagePath5: string;
  ImagePath6: string;
  constructor() {
    //image location
    this.ImagePath1 = '../assets/img/icon-1.svg'
    this.ImagePath2 = '../assets/img/icon-2.svg'
    this.ImagePath3 = '../assets/img/icon-3.svg'
    this.ImagePath4 = '../assets/img/icon-4.svg'
    this.ImagePath5 = '../assets/img/icon-5.svg'
    this.ImagePath6 = '../assets/img/icon-6.svg'
  }

  ngOnInit(): void {
  }

}
