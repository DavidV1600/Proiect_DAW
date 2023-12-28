using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Incerc_Site1.Migrations
{
    public partial class addmmIdFoodTag4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Foods_Tags_TagsTagId",
                table: "Foods");

            migrationBuilder.DropIndex(
                name: "IX_Foods_TagsTagId",
                table: "Foods");

            migrationBuilder.DropColumn(
                name: "TagsTagId",
                table: "Foods");

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

            migrationBuilder.CreateTable(
                name: "FoodTags",
                columns: table => new
                {
                    FoodId = table.Column<int>(type: "int", nullable: false),
                    TagId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FoodTags", x => new { x.FoodId, x.TagId });
                    table.ForeignKey(
                        name: "FK_FoodTags_Foods_FoodId",
                        column: x => x.FoodId,
                        principalTable: "Foods",
                        principalColumn: "FoodId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FoodTags_Tags_TagId",
                        column: x => x.TagId,
                        principalTable: "Tags",
                        principalColumn: "TagId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FoodTag_TagsTagId",
                table: "FoodTag",
                column: "TagsTagId");

            migrationBuilder.CreateIndex(
                name: "IX_FoodTags_TagId",
                table: "FoodTags",
                column: "TagId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FoodTag");

            migrationBuilder.DropTable(
                name: "FoodTags");

            migrationBuilder.AddColumn<int>(
                name: "TagsTagId",
                table: "Foods",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Foods_TagsTagId",
                table: "Foods",
                column: "TagsTagId");

            migrationBuilder.AddForeignKey(
                name: "FK_Foods_Tags_TagsTagId",
                table: "Foods",
                column: "TagsTagId",
                principalTable: "Tags",
                principalColumn: "TagId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
