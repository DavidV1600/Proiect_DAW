using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Incerc_Site1.Migrations
{
    public partial class add_one_to_many : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ObiecteVanzare_CategorieId",
                table: "ObiecteVanzare",
                column: "CategorieId");

            migrationBuilder.AddForeignKey(
                name: "FK_ObiecteVanzare_Categories_CategorieId",
                table: "ObiecteVanzare",
                column: "CategorieId",
                principalTable: "Categories",
                principalColumn: "CategorieId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ObiecteVanzare_Categories_CategorieId",
                table: "ObiecteVanzare");

            migrationBuilder.DropIndex(
                name: "IX_ObiecteVanzare_CategorieId",
                table: "ObiecteVanzare");
        }
    }
}
