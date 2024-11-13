using System.ComponentModel.DataAnnotations;

namespace ProjetoJunto.Server.Dtos
{
    public class PostoDTOGas
    {
        [Required]
        public float? Gasolina { get; set; }
        [Required]
        public float? Diesel { get; set; }
        [Required]
        public float? Etanol { get; set; }
    }
}
