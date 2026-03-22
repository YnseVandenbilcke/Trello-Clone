using Microsoft.AspNetCore.Mvc;
using TrelloClone.Api.Models;
using TrelloClone.Api.Repositories;
using System.Threading.Tasks;
using TrelloClone.Api.Dtos;

namespace TrelloClone.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ColumnsController : ControllerBase
    {
        private readonly IColumnRepository _columnRepository;

        public ColumnsController(IColumnRepository columnRepository)
        {
            _columnRepository = columnRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<ColumnDto>>> GetColumns()
        {
            var columns = await _columnRepository.GetAllAsync();
            List<ColumnDto> columnDtos = columns.Select(b => ColumnToDto(b)).ToList();
            return Ok(columnDtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ColumnDto>> GetColumnById(Guid id)
        {
            var column = await _columnRepository.GetByIdAsync(id);
            if (column == null)
            {
                return NotFound();
            }

            ColumnDto columnDto = ColumnToDto(column);

            return Ok(columnDto);
        }

        [HttpPost]
        public async Task<ActionResult<Column>> CreateColumn(Column column)
        {
            var created = await _columnRepository.CreateAsync(column);
            return CreatedAtAction(nameof(GetColumnById), new { id = created.Id }, created);
        }

        private ColumnDto ColumnToDto(Column column)
        {
            return new ColumnDto
            {
                Id = column.Id,
                Name = column.Name,
                Tasks = column.Tasks?.Select(t => new TaskDto
                {
                    Id = t.Id,
                    Title = t.Title,
                    Description = t.Description,
                    ColumnId = t.ColumnId,
                    Type = t.TaskType,
                }).ToList()
            };
        }
    }
}