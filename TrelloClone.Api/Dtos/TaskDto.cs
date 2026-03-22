using System;
using TrelloClone.Api.Models;

namespace TrelloClone.Api.Dtos
{
    public class TaskDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string? Description { get; set; }
        public TaskType Type { get; set; }
        public Guid ColumnId { get; set; }
    }
}
