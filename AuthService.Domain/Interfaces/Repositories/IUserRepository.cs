using AuthService.Domain.Entities;

namespace AuthService.Domain.IRepositories
{
    public interface IUserRepository : IRepository<User, int>
    {
        Task<User?> GetByUsernameAsync(string username);
        Task<User?> GetByIDAsync(int id);
    }
}
