using System;

namespace TrelloClone.Api.Models
{
    public class Column
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid BoardId { get; set; }
        public Board? Board { get; set; }
        public List<TaskItem> Tasks { get; set; } = [];
    }
}