using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Incerc_Site1.Migrations
{
    public partial class addmmIdFoodTag5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FoodTag");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FoodTag",
                columns: table => new
                {
                    FoodsFoodId = table.Column<int>(type: "int", nullable: false),
                    TagsTagId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FoodTag", x => new { x.FoodsFoodId, x.TagsTagId });
                    table.ForeignKey(
                        name: "FK_FoodTag_Foods_FoodsFoodId",
                        column: x => x.FoodsFoodId,
                        principalTable: "Foods",
                        principalColumn: "FoodId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FoodTag_Tags_TagsTagId",
                        column: x => x.TagsTagId,
                        principalTable: "Tags",
                        principalColumn: "TagId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FoodTag_TagsTagId",
                table: "FoodTag",
                column: "TagsTagId");
        }
    }
}
