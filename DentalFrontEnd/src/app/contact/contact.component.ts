import { NgForm } from '@angular/forms';
import { Component , OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentService } from 'src/service/appointment.service';
import { Appointment } from '../model/Appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  formvalid=true;
  @ViewChild('myform') form: NgForm

  patientInsert : Appointment={
    name: "",
    email:"",
    phoneNumber:"",
    date:"",
    timeslot:""
    
 }
  constructor(private http: HttpClient , private appointmentService : AppointmentService , private router : Router){

  }
  ngOnInit() {
    // this.onSubmit()
  }
  
  insertAppointments(){
    this.appointmentService.insertAppointments(this.patientInsert).subscribe((value) => {console.log(value)
    if(value==1)
    {
      alert("appointment successfull !!")
      this.router.navigate(['Home']);
    }
    else
      
      this.form.reset()
    }
    );
  
}
}
