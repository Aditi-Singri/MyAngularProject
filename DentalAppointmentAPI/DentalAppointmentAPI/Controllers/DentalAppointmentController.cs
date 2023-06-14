using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using Dapper;

namespace DentalAppointmentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DentalAppointmentController : Controller
    {
        private readonly IConfiguration _config;

        public DentalAppointmentController(IConfiguration config)
        {
            this._config = config;
        }

        [HttpGet]
        public async Task<ActionResult<List<AppointmentDetails>>> ViewAppointments([FromQuery] string date)
        {

            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var appointments = await connection.QueryAsync<AppointmentDetails>("select * from tblPatientDetails where date=@appointmentDate;", new { appointmentDate = date });
            return Ok(appointments);
        }

        [HttpGet]
        [Route("LoginCheck")]
        public async Task<ActionResult<int>> LoginCheck(string email, string password)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var res = await connection.QueryAsync<int>("EXECUTE spcheckIfRegisteredUser @email, @password",new {email = email , password = password });
            return Ok(res);
        }

        [HttpPost]
        [Route("InsertUser")]
        public async Task<int> InsertUser(RegistrationDetails user)
        {
            try
            {
                using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
                var result = await connection.ExecuteAsync("insert into tblSignUP values(@name, @email, @phoneNumber, @password);", user);
                return result;
            }
            catch (Exception ) { return 0; }
        }

        [HttpPost]
        [Route("InsertPatientDetails")]
        public async Task<int> InsertPatientDetails(AppointmentDetails patient)
        {

            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var result = await connection.ExecuteAsync("insert into tblPatientDetails values(@name, @email, @phoneNumber, @date, @timeslot);", patient);
            return result;
        }
        

        [HttpDelete("{date}")]

        public async Task<ActionResult> deletePatients(string date)
        {

            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("delete from tblPatientDetails where date=@aptDate;", new { aptDate = date });
            return Ok();
        }


    }
}

