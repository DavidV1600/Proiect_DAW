namespace Incerc_Site1.Models
{
    using System.ComponentModel.DataAnnotations;

    public class AuthenticateRequest
    {
        [Required]
        public string? Username { get; set; }

        [Required]  
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }
    }
}
