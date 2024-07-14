using Microsoft.EntityFrameworkCore;
using UrlShortner.Data.Models;

namespace UrlShortner.Data
{

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base()
        {
        }
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<UrlMapping>().HasIndex(u => u.shortUrl).IsUnique();
        }
        public DbSet<UrlMapping> UrlMappings => Set<UrlMapping>();
    }
}
