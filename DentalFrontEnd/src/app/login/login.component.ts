import { NgForm } from '@angular/forms';
import { Component , OnInit , ComponentRef, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { AppointmentService } from 'src/service/appointment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('myform') form: NgForm
  @ViewChild('mail') mail: ElementRef;
  @ViewChild('pass') pass: ElementRef;
  @Output('newEventItem') newItemEvent = new EventEmitter<boolean>();

  addNewItem() {
    this.newItemEvent.emit();
  }
  @Output('newEventItem1') newItemEvent1 = new EventEmitter<boolean>();

  addNewItem1() {
    this.newItemEvent1.emit();
  }
  
  all_users=[]
  mailid:string
  password:string
  validuser:boolean
 constructor(private router:Router, private loginService:LoginService,private http : HttpClient, private appointmentService : AppointmentService){

 }
  ngOnInit() {
  
  }
  loggedinpage(){
    this.mailid =this.mail.nativeElement.value 
    this.password= this.pass.nativeElement.value
    console.log(this.mailid , this.password)
    this.appointmentService.CheckValidUser(this.mailid,this.password).subscribe((result)=>{
      if (result[0]==1){
        this.loginService.login() ;
        this.router.navigate(['Home']);
      }
      else
      {
      alert('invalid user id & password')
      this.form.reset();
      }

    })
 
  }
  opensignup(){
  
        this.router.navigate(['Signup']);

   }
  
 
}

