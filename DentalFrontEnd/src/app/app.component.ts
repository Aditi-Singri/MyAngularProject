import { Component , OnChanges, OnInit , ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  
  @ViewChild('loggedIn') isLoggedIn:boolean;
 
  title = 'my_first_app';
  item_name= "login/signup"
  ImagePath: string;
  logg:boolean;
  constructor(private activatedroute:ActivatedRoute , private loginservice: LoginService , private router : Router){
    this.ImagePath = '../assets/img/icons8-user-30.png'
    if(this.loginservice.loggedIn)
      this.item_name="logout";
  }
  ngOnInit(){
  }
  
  openlogin(){
    if(this.item_name== "login/signup"){
      this.router.navigate(['Login'])
    }
    else{
      this.loginservice.loggedIn=false
      this.item_name= "login/signup"
      this.router.navigate(['Home'])
    }
  }
    openloginbefore(){
      if(!this.loginservice.loggedIn){
        
        this.router.navigate(['Login'])

      }
    }
    
  change(event){
    
    this.item_name="logout"
  }

 
  //  change1(event){
    
  //   this.SignUp=false;
  //   this.x=true;
  //   this.sections=false;
  //  }
  
  // ngDoCheck (){}

}
