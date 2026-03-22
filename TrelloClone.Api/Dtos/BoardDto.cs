using System;
using TrelloClone.Api.Models;

namespace TrelloClone.Api.Dtos
{
    public class BoardDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<ColumnDto> Columns { get; set; }
    }
}
