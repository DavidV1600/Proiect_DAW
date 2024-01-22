using Incerc_Site1.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MyAppContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Obiecte")));

// Configure the HttpClient to ignore SSL certificate errors for development
builder.Services.AddHttpClient("PostMan")
    .ConfigurePrimaryHttpMessageHandler(() => new HttpClientHandler
    {
        ServerCertificateCustomValidationCallback = (sender, certificate, chain, sslPolicyErrors) =>
        {
            // Always return true to ignore SSL certificate errors (for development/testing only)
            return true;
        }
    });
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAll"); // Add this line

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();