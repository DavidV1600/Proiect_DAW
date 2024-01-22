using System.ComponentModel.DataAnnotations;

namespace Incerc_Site1.Controllers
{
    public class UserRegistrationRequest
    {
        public string Username { get; set; }
        //public string Email { get; set; }
        //public string Password { get; set; }

        // Optional: if you want the user to confirm the password
        public string ConfirmPassword { get; set; }

        // Add any other registration related properties here
        // Example: public string FullName { get; set; }

        // You can also add validation attributes if needed, for example:
         [Required]
         [EmailAddress]
         public string Email { get; set; }

         [Required]
         [MinLength(6)]
         public string Password { get; set; }
    }

}
