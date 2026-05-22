using Aplicatie.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Aplicatie.API.Data
{
    public class AplicatieDbContext : DbContext
    {
        public AplicatieDbContext(DbContextOptions<AplicatieDbContext> options) : base(options)
        {
        }

        // Tabelul Angajati va fi creat in baza de date
        public DbSet<Angajat> Angajati { get; set; }
    }
}