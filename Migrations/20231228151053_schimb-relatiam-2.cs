using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Incerc_Site1.Migrations
{
    public partial class schimbrelatiam2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Foods_Origins_OriginsOriginId",
                table: "Foods");

            migrationBuilder.RenameColumn(
                name: "OriginsOriginId",
                table: "Foods",
                newName: "OriginId");

            migrationBuilder.RenameIndex(
                name: "IX_Foods_OriginsOriginId",
                table: "Foods",
                newName: "IX_Foods_OriginId");

            migrationBuilder.AddForeignKey(
                name: "FK_Foods_Origins_OriginId",
                table: "Foods",
                column: "OriginId",
                principalTable: "Origins",
                principalColumn: "OriginId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Foods_Origins_OriginId",
                table: "Foods");

            migrationBuilder.RenameColumn(
                name: "OriginId",
                table: "Foods",
                newName: "OriginsOriginId");

            migrationBuilder.RenameIndex(
                name: "IX_Foods_OriginId",
                table: "Foods",
                newName: "IX_Foods_OriginsOriginId");

            migrationBuilder.AddForeignKey(
                name: "FK_Foods_Origins_OriginsOriginId",
                table: "Foods",
                column: "OriginsOriginId",
                principalTable: "Origins",
                principalColumn: "OriginId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
