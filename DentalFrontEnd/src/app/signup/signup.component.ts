import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter , Output, ElementRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AppointmentService } from 'src/service/appointment.service';
import { LoginService } from '../login.service';
import { Registration } from '../model/Registration';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  @ViewChild('pass') pass: ElementRef;
  @ViewChild('confirmpass') confirmpass: ElementRef;
  
  validpasswords:boolean
  existinguser:boolean
  @Output('newEventItemSignup') newItemEvent = new EventEmitter<boolean>();

  addNewItem() {
    this.newItemEvent.emit();
  }
  userInsert : Registration={
     name: "",
     email:"",
     phoneNumber:"",
     password:""
     
  }
  constructor(private http : HttpClient, private router:Router ,private appointmentService : AppointmentService) { }

  ngOnInit() {
  }
  checkpasswords(){
    if(this.pass.nativeElement.value===this.confirmpass.nativeElement.value)
      this.validpasswords=true
    else
      this.validpasswords=false
  }
 
   insertUsers(){
    this.appointmentService.insertUsers(this.userInsert).subscribe((value) => {console.log(value)
    if(value==1)
      this.router.navigate(['Login']);
    else
      alert("existing user");
      this.form.reset()
    }
    );

    //this.router.navigate(['Login'])

  }
  
 
  }


  
