using AuthService.Domain.Entities;
using AuthService.Domain.IRepositories;
using AuthService.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace AuthService.Infrastructure.Repositories
{
    public class UserRepository : GenericRepository<User, int>, IUserRepository
    {
        public UserRepository(AuthDbContext context) : base(context) { }
        public async Task<User?> GetByUsernameAsync(string username)
        {
            return await _dbSet.FirstOrDefaultAsync(u => u.Username == username);
        }

        public async Task<User?> GetByIDAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }
    }
}
