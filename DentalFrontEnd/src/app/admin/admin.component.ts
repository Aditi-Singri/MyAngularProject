import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AppointmentService } from 'src/service/appointment.service';
import { Appointment } from '../model/Appointment';
import { patients } from '../model/patients';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  @ViewChild('date') date: ElementRef;
  appointmentDate:string
  allPatients:Appointment[]=[];
  number_of_patients=-1
  constructor(private router:Router , private http : HttpClient, private appointmentService : AppointmentService) { }

  ngOnInit(): void {
  }
  displayPatients(){
    console.log(this.date.nativeElement.value.toString())
    this.appointmentService.viewAppointmentsAtdate(this.date.nativeElement.value.toString()).subscribe((result)=>
    {
      
      console.log(result);
      this.allPatients = result;
      console.log(this.allPatients);
      this.number_of_patients=this.allPatients.length;
    
    })
  }
}
