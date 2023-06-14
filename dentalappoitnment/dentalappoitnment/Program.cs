// See https://aka.ms/new-console-template for more information
using System;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Runtime.Intrinsics.Arm;

namespace crudOperations
{
    class Program
    {
        static void Main(string[] args)
        {

            SqlConnection sqlConnection;
            string connectionString = @"Data Source=DESKTOP-JJPAKAQ\SQLEXPRESS;Initial Catalog=makeDoctorAppointmentDB;Integrated Security=True";
            try
            {
                sqlConnection = new SqlConnection(connectionString);
                sqlConnection.Open();
                int x = 1;
                while (x==1) 
                {
                    Console.WriteLine("1: LogIN\n2: SignUp\n3:Doctor");
                    int choice = Convert.ToInt32(Console.ReadLine());
                    switch (choice)
                    {
                        case 1:
                            Console.Write("enter EmailID");
                            var email = Console.ReadLine();
                            Console.Write("enter Password");
                            var password = Console.ReadLine();
                            SqlCommand LoginSelectCommand = new SqlCommand("spcheckIfRegisteredUser", sqlConnection);
                            LoginSelectCommand.CommandType = CommandType.StoredProcedure;
                            LoginSelectCommand.Parameters.AddWithValue("@emailId", email);
                            LoginSelectCommand.Parameters.AddWithValue("@password", password);
                            SqlDataReader loginReader = LoginSelectCommand.ExecuteReader();
                            if (loginReader.Read())
                            {
                                if (Convert.ToInt32(loginReader.GetValue(0)) == 1)
                                {
                                    Console.WriteLine("login successfull");
                                    loginReader.Close();
                                    Console.WriteLine("enter 1: Make Appointment \n2: LogOut");
                                    int option = Convert.ToInt32(Console.ReadLine());
                                    switch (option)
                                    {
                                        case 1:
                                            Console.Write("enter name");
                                            var patientName = Console.ReadLine();
                                            Console.Write("enter EmailID");
                                            email = Console.ReadLine();
                                            Console.Write("enter mobile number");
                                            var contactNumber = Console.ReadLine();
                                            Console.Write("enter date of appointment(yyyy-mm-dd)");
                                            var appointmentDate = Console.ReadLine();
                                            Console.Write("enter time slot");
                                            var timeSlot = Console.ReadLine();
                                            var insertQuery = "insert into tblPatientDetails VALUES('" + patientName + "' , '" + email + "' , '" + contactNumber + "' ,'" + appointmentDate + "', '" + timeSlot + "')";
                                            SqlCommand insertCommand = new SqlCommand(insertQuery, sqlConnection);
                                            insertCommand.ExecuteNonQuery(); //for query dt doesnt return anything nonquery is used
                                            Console.WriteLine("appointment made successfully !!");
                                            break;
                                        case 2:
                                            Console.WriteLine("logged out successfully");
                                            break;
                                    }

                                }
                                else
                                    Console.WriteLine("invalid username & password");
                                
                            }
                            
                            break;
                        case 2:
                            Console.Write("enter name");
                            var name = Console.ReadLine();
                            Console.Write("enter EmailID");
                            var emailToRegister = Console.ReadLine();
                            Console.Write("enter mobile number");
                            var phoneNumber = Console.ReadLine();
                            Console.Write("enter password");
                            var passwordToRegister = Console.ReadLine();
                            Console.Write("confirm password");
                            var confirmPassword = Console.ReadLine();
                            if (passwordToRegister == confirmPassword)
                            {
                                try
                                {
                                    string SignUpInsertQuery = "insert into tblSignUP VALUES('" + name + "' , '" + emailToRegister + "' , '" + phoneNumber + "' ,'" + passwordToRegister + "')";
                                    SqlCommand insertCommand = new SqlCommand(SignUpInsertQuery, sqlConnection);
                                    insertCommand.ExecuteNonQuery();
                                    Console.Write("registration completed successfully !!");
                                }
                                catch (SqlException ex) {
                                    if (ex.Number == 2627)
                                        Console.WriteLine("already existing user !!");

                                }   
                            }
                            else
                                Console.WriteLine("password and confirm password are not matching");
                            break;
                        case 3:
                            Console.WriteLine("1: View Appointments on particular date\n2: Delete old appointments");
                            int ch = Convert.ToInt32(Console.ReadLine());
                            switch (ch)
                            { 
                                case 1:
                                    Console.Write("enter date");
                                    var date = Console.ReadLine();
                                    string queryString = "select * from dbo.tblPatientDetails" + " where [date] like @date;";
                                    SqlCommand FetchAppointmentsCommand = new SqlCommand(queryString, sqlConnection);
                                    FetchAppointmentsCommand.Parameters.AddWithValue("@date", date);
                                    SqlDataReader AppointmentsReader = FetchAppointmentsCommand.ExecuteReader();
                                    Console.WriteLine("Name" + "\t\t\t" + "Email ID" + "\t\t" +"Contact Number" + "\t\t" + "Time Slot");
                                    int dataPresent = 0;
                                    while (AppointmentsReader.Read())
                                    {
                                        dataPresent = 1;
                                        Console.WriteLine(AppointmentsReader.GetValue(0)+"\t"+AppointmentsReader.GetValue(1)+"\t"+AppointmentsReader.GetValue(2)+"\t\t"+ AppointmentsReader.GetValue(4));
                                    }
                                    if (dataPresent == 0)
                                        Console.WriteLine("No appointments on this day");
                                    AppointmentsReader.Close();

                                    break;

                                case 2:
                                    Console.Write("enter date");
                                    var dateToDelete = Console.ReadLine();
                                    string deleteQuery = "delete from dbo.tblPatientDetails" + " where [date] like @date;";
                                    SqlCommand DeleteAppointmentsCommand = new SqlCommand(deleteQuery, sqlConnection);
                                    DeleteAppointmentsCommand.Parameters.AddWithValue("@date", dateToDelete);
                                    int res= DeleteAppointmentsCommand.ExecuteNonQuery();
                                    if(res>0)
                                        Console.WriteLine("deleted the appointments");
                                    else
                                        Console.WriteLine("no appointments on this day");
                                    break;
                            }
                                break;
                    }
                    Console.WriteLine("enter 1 to continue and any number to exit");
                    x = Convert.ToInt32(Console.ReadLine());

                }
               
                
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
      
    }

}


