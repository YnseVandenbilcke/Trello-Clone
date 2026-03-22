using System;
using TrelloClone.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace TrelloClone.Api.Repositories
{
    public interface IBoardRepository
    {
        Task<List<Board>> GetAllAsync();
        Task<Board?> GetByIdAsync(Guid id);
        Task<Board> CreateAsync(Board board);
        Task DeleteAsync(Guid id);
        Task UpdateAsync(Board board);
    }
}
