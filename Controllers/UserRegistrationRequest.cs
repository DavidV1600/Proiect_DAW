using System.ComponentModel.DataAnnotations;

namespace Incerc_Site1.Controllers
{
    public class UserRegistrationRequest
    {
        public string Username { get; set; }
        //public string Email { get; set; }
        //public string Password { get; set; }
         [Required]
         [EmailAddress]
         public string Email { get; set; }

         [Required]
         [MinLength(6)]
         public string Password { get; set; }

         public string ConfirmPassword { get; set; }
    }

}
