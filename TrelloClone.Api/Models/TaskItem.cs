using System;
namespace TrelloClone.Api.Models
{
    public class TaskItem
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string? Description { get; set; }
        public TaskType TaskType { get; set; }

        public Guid ColumnId { get; set; }
        public Column? Column { get; set; }
    }
}