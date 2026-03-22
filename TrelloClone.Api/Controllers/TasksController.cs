using Microsoft.AspNetCore.Mvc;
using TrelloClone.Api.Models;
using TrelloClone.Api.Repositories;
using System.Threading.Tasks;
using TrelloClone.Api.Dtos;

namespace TrelloClone.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly ITaskRepository _taskRepository;

        public TasksController(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<TaskDto>>> GetTasks()
        {
            var tasks = await _taskRepository.GetAllAsync();
            List<TaskDto> taskDtos = tasks.Select(t => TaskToDto(t)).ToList();
            return Ok(taskDtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TaskDto>> GetTaskById(Guid id)
        {
            var task = await _taskRepository.GetByIdAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            TaskDto taskDto = TaskToDto(task);

            return Ok(taskDto);
        }

        [HttpPost]
        public async Task<ActionResult<TaskItem>> CreateTask(TaskItem task)
        {
            var created = await _taskRepository.CreateAsync(task);
            return CreatedAtAction(nameof(GetTaskById), new { id = created.Id }, created);
        }

        [HttpDelete]
        public async Task DeleteTask(Guid taskId)
        {
            await _taskRepository.DeleteAsync(taskId);
        }

        private TaskDto TaskToDto(TaskItem task)
        {
            return new TaskDto
            {
                Id = task.Id,
                Title = task.Title,
                Description = task.Description,
                ColumnId = task.ColumnId,
                Type = task.TaskType,
            };
        }
    }
}