import { query } from '@angular/animations';
import { HttpClient, HttpParams , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/model/Appointment';
import { Registration } from 'src/app/model/Registration';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private insertUrl = "InsertUser";
  private appointmentsUrl = "InsertPatientDetails";
  

  constructor(private http : HttpClient) { }

  // public getEmployees() : Observable<Employees[]>{

      
  //     return this.http.get<Employees[]>(`${environment.apiUrl}/${this.url}`  )
       
  // }
//   public deleteEmployees(eid:Number) : Observable<void>{

      
//      return this.http.delete<void>(
//       `${environment.apiUrl}/${this.url}/${eid}` 
//       );
     
// }
// public updateEmployees(eid:Number, amt: Number) : Observable<ArrayBuffer>{
//   // let params = new HttpParams()
//   //   .set('salary', '1000000');
//   //   console.log(params.toString());
//   return this.http.put<ArrayBuffer>(`${environment.apiUrl}/${this.url}/${eid}` , {}, {params: { salary: amt.toString()}});
  
// }
public insertUsers(userInsert:Registration):Observable<number>{
  return this.http.post<number>(`${environment.apiUrl}/${this.insertUrl}`,userInsert)
}
public insertAppointments(patientInsert:Appointment):Observable<number>{
  return this.http.post<number>(`${environment.apiUrl}/${this.appointmentsUrl}`,patientInsert)
}

public viewAppointmentsAtdate(date: string):Observable<Appointment[]>{
 
  return this.http.get<Appointment[]>(`${environment.apiUrl}`,{params: { date: date}});
}

public CheckValidUser(email: string, password:string):Observable<number[]>{
 
  return this.http.get<number[]>(`${environment.apiUrl}/${"LoginCheck"}`,{params: { email: email, password:password}});
}
}
