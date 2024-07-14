using System.Security.Cryptography;
using UrlShortner.Data;
using UrlShortner.Data.Models;

public class ShortenService
{
    public const int shortenurlLength = 7;
    public const string Urlchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    private readonly Random _random = new();
    private readonly ApplicationDbContext _context;
    public ShortenService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<string> GenerateCode()
    {
        var shortUrlchars = new char[shortenurlLength];
        while (true)
        {
            for (var i = 0; i < shortenurlLength; i++)
            {
                var index = _random.Next(Urlchars.Length - 1);
                shortUrlchars[i] = Urlchars[index];

            }
            var urlcode = new string(shortUrlchars);
            if (!_context.UrlMappings.Any(s => s.shortUrl == urlcode))
                return urlcode;
        }
    }
}