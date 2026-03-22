using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TrelloClone.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddTaskTypeToTaskItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TaskType",
                table: "Tasks",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TaskType",
                table: "Tasks");
        }
    }
}
