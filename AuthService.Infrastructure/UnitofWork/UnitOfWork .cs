using AuthService.Domain.IRepositories;
using AuthService.Domain.UOW;
using AuthService.Infrastructure.Data;

namespace AuthService.Infrastructure.UnitofWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AuthDbContext _context;

        public IUserRepository Users { get; }

        public UnitOfWork(AuthDbContext context,
                          IUserRepository userRepository)
        {
            _context = context;
            Users = userRepository;
        }

        public async Task<int> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync();
        }
    }
}
