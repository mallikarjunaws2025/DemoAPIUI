using AuthService.Domain.IRepositories;

namespace AuthService.Domain.UOW
{
    public interface IUnitOfWork
    {
        IUserRepository Users { get; }
        Task<int> SaveChangesAsync();
    }
}
