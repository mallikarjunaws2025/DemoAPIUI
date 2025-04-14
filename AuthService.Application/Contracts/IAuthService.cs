using AuthService.Application.SourceDTOs;
using AuthService.Domain.Entities;

namespace AuthService.Application.Contracts
{
    public interface IAuthService
    {
        Task<bool> UpdateUserAsync(int id, LoginRequest updatedUser);
        Task AddUserAsync(User user);
        Task<bool> DeleteUserAsync(int id);
        Task<User?> GetUserAsync(string username);
    }
}
