using Microsoft.EntityFrameworkCore;
using TrelloClone.Api.Data;
using TrelloClone.Api.Models;
using System;
using System.Threading.Tasks;

namespace TrelloClone.Api.Repositories
{
    public class ColumnRepository : IColumnRepository
    {
        private readonly AppDbContext _context;

        public ColumnRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Column>> GetAllAsync()
        {
            return await _context.Columns
                .Include(b => b.Tasks)
                .ToListAsync();
        }

        public async Task<Column?> GetByIdAsync(Guid id)
        {
            return await _context.Columns
                .Include(b => b.Tasks)
                .FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<Column> CreateAsync(Column column)
        {
            _context.Columns.Add(column);
            await _context.SaveChangesAsync();
            return column;
        }

        public async Task DeleteAsync(Guid id)
        {
            var column = await _context.Columns.FindAsync(id);
            if (column != null)
            {
                _context.Columns.Remove(column);
                await _context.SaveChangesAsync();
            }
        }

        public async Task UpdateAsync(Column column)
        {
            _context.Columns.Update(column);
            await _context.SaveChangesAsync();
        }
    }
}