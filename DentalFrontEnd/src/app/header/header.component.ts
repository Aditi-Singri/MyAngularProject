import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('loggedIn') isLoggedIn:boolean;
 
  title = 'my_first_app';
  item_name= "login/signup"
  ImagePath: string;
  logg:boolean;
  constructor(private activatedroute:ActivatedRoute , public loginservice: LoginService , private router : Router){
    this.ImagePath = '../assets/img/icons8-user-30.png'
  
  }
  ngOnInit(){
  }
  
  openlogin(){
    if(!this.loginservice.loggedIn){
      this.router.navigate(['Login'])
    }
    else{
      this.loginservice.login()
      this.router.navigate(['Home'])
    }
  }
    openloginbefore(){
      if(!this.loginservice.loggedIn){
        
        this.router.navigate(['Login'])

      }
    }

}
