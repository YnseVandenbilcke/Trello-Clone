using System;
using TrelloClone.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace TrelloClone.Api.Repositories
{
    public interface IColumnRepository
    {
        Task<List<Column>> GetAllAsync();
        Task<Column?> GetByIdAsync(Guid id);
        Task<Column> CreateAsync(Column column);
        Task DeleteAsync(Guid id);
        Task UpdateAsync(Column column);
    }
}
