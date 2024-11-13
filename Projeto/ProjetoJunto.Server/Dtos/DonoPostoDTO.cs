using System.ComponentModel.DataAnnotations;

namespace ProjetoJunto.Server.Dtos
{
    public class DonoPostoDTO
    {
        [Required]
        [MinLength(10, ErrorMessage = "Email muito curto")]
        public string? email { get; set; }
        [Required]
        [MinLength(5, ErrorMessage = "Senha muito curta")]
        public string? senha { get; set; }
    }
}
