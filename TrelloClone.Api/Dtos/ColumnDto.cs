using System;

namespace TrelloClone.Api.Dtos
{
    public class ColumnDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<TaskDto> Tasks { get; set; }
    }
}
