using AuthService.Application.SourceDTOs;
using AuthService.Domain.Entities;
using AuthService.Domain.IRepositories;
using AuthService.Domain.UOW;
using Microsoft.AspNetCore.Mvc;

namespace AuthService.API.APIControllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
       private readonly IRepository<User,long> _userService;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserRepository _userRepo;

        public AuthController(IRepository<User, long> userService, IUnitOfWork unitOfWork, IUserRepository userRepo)
        {
            _userService = userService;
            _unitOfWork = unitOfWork;
            _userRepo = userRepo;
        }

        [HttpPost("/create")]
        public async Task<IActionResult> CreateLogin(LoginRequest request)
        {
            var user = new User
            {
                Username = request.Username,
                PasswordHash = request.Password
            };
           
            await _userRepo.AddAsync(user);
            await _unitOfWork.SaveChangesAsync();

            return Ok(new { status = "Subscribed" });
        }

        [HttpGet("/getbyid/{id}")]
        public async Task<IActionResult> GetLogin(int id)
        {
            var user = await _userRepo.GetByIDAsync(id);
            if (user == null)
                return NotFound(new { status = "Invalid Details" });

            return Ok(new { status = "LoggedIn" });
        }

        [HttpGet("/getbyname/{name}")]
        public async Task<IActionResult> GetLoginByName(string name)
        {
            var user = await _userRepo.GetByUsernameAsync(name);
            if (user == null)
                return NotFound(new { status = "Invalid Details" });

            return Ok(new { status = "LoggedIn" });
        }

        [HttpPut("/update")]
        public async Task<IActionResult> UpdateUser([FromBody] LoginRequest updatedUser)
        {
            var user = await _userRepo.GetByUsernameAsync(updatedUser.Username);
            if (user == null)
                return NotFound(new { status = "Invalid Details" });

            User usr = new User {Username = user.Username, PasswordHash = updatedUser.Password };
            _userRepo.Update(usr);
            await _unitOfWork.SaveChangesAsync();

            return Ok(new { status = "Updated" });

        }

        [HttpDelete("/delete/{name}")]
        public async Task<IActionResult> DeleteUser(string name)
        {
            var user = await _userRepo.GetByUsernameAsync(name);
            if (user == null)
                return NotFound(new { status = "Invalid Details" });

            _userRepo.Delete(user);
            await _unitOfWork.SaveChangesAsync();

            return Ok(new { status = "Unsubscribed" });
        }
    }
}
