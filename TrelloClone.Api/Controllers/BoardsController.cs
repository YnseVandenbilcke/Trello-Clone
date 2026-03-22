using Microsoft.AspNetCore.Mvc;
using TrelloClone.Api.Models;
using TrelloClone.Api.Repositories;
using Swashbuckle.AspNetCore.Annotations;
using System.Threading.Tasks;
using TrelloClone.Api.Dtos;

namespace TrelloClone.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BoardController : ControllerBase
    {
        private readonly IBoardRepository _boardRepository;

        public BoardController(IBoardRepository boardRepository)
        {
            _boardRepository = boardRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<BoardDto>>> GetBoards()
        {
            var boards = await _boardRepository.GetAllAsync();
            List<BoardDto> boardDtos = boards.Select(b => BoardToDto(b)).ToList();
            return Ok(boardDtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BoardDto>> GetBoardById(Guid id)
        {
            var board = await _boardRepository.GetByIdAsync(id);
            if (board == null)
            {
                return NotFound();
            }

            BoardDto boardDto = BoardToDto(board);

            return Ok(boardDto);
        }

        [HttpPost]
        public async Task<ActionResult<Board>> CreateBoard(Board board)
        {
            var created = await _boardRepository.CreateAsync(board);
            return CreatedAtAction(nameof(GetBoardById), new { id = created.Id }, created);
        }

        private BoardDto BoardToDto(Board board)
        {
            return new BoardDto
            {
                Id = board.Id,
                Name = board.Name,
                Columns = board.Columns?.Select(c => new ColumnDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Tasks = c.Tasks?.Select(t => new TaskDto
                    {
                        Id = t.Id,
                        Title = t.Title,
                        Description = t.Description,
                        ColumnId = t.ColumnId,
                        Type = t.TaskType,
                    }).ToList()
                }).ToList()
            };
        }
    }
}