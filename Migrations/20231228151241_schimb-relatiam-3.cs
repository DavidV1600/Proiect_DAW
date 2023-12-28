using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Incerc_Site1.Migrations
{
    public partial class schimbrelatiam3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Foods_Origins_OriginId",
                table: "Foods");

            migrationBuilder.DropIndex(
                name: "IX_Foods_OriginId",
                table: "Foods");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Foods_OriginId",
                table: "Foods",
                column: "OriginId");

            migrationBuilder.AddForeignKey(
                name: "FK_Foods_Origins_OriginId",
                table: "Foods",
                column: "OriginId",
                principalTable: "Origins",
                principalColumn: "OriginId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
