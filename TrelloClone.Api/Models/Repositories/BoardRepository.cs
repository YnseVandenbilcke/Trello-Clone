using Microsoft.EntityFrameworkCore;
using TrelloClone.Api.Data;
using TrelloClone.Api.Models;
using System;
using System.Threading.Tasks;

namespace TrelloClone.Api.Repositories
{
    public class BoardRepository : IBoardRepository
    {
        private readonly AppDbContext _context;

        public BoardRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Board>> GetAllAsync()
        {
            return await _context.Boards
                .Include(b => b.Columns)
                .ThenInclude(c => c.Tasks)
                .ToListAsync();
        }

        public async Task<Board?> GetByIdAsync(Guid id)
        {
            return await _context.Boards
                .Include(b => b.Columns)
                .ThenInclude(c => c.Tasks)
                .FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<Board> CreateAsync(Board board)
        {
            _context.Boards.Add(board);
            await _context.SaveChangesAsync();
            return board;
        }

        public async Task DeleteAsync(Guid id)
        {
            var board = await _context.Boards.FindAsync(id);
            if (board != null)
            {
                _context.Boards.Remove(board);
                await _context.SaveChangesAsync();
            }
        }

        public async Task UpdateAsync(Board board)
        {
            _context.Boards.Update(board);
            await _context.SaveChangesAsync();
        }
    }
}