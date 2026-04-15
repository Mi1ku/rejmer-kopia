using System;

namespace szyfr_cezara
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Szyfr Cezara");
            Console.Write("Podaj tekst jawny: ");
            string tekst_jawny = Console.ReadLine() ?? string.Empty;
            Console.Write("Podaj klucz (liczbę): ");
            if (!int.TryParse(Console.ReadLine(), out int klucz))
            {
                klucz = 0;
            }
            string tekst_zaszyfrowany = SzyfrCezara(tekst_jawny, klucz);
            Console.WriteLine($"Oryginalny tekst: {tekst_jawny}, Klucz: {klucz}, Zaszyfrowany tekst: {tekst_zaszyfrowany}");
        }
        public static string SzyfrCezara(string tekst_jawny, int klucz)
        {
            if (string.IsNullOrEmpty(tekst_jawny)) return string.Empty;
            string tekst_zaszyfrowany = "";
            klucz = klucz % 26;
            foreach (char znak in tekst_jawny)
            {
                if (znak == ' ')
                {
                    tekst_zaszyfrowany += ' ';
                }
                else if (znak >= 'a' && znak <= 'z')
                {
                    int przesuniety = znak + klucz;
                    if (przesuniety > 'z') przesuniety -= 26;
                    if (przesuniety < 'a') przesuniety += 26;
                    tekst_zaszyfrowany += (char)przesuniety;
                }
                else
                {
                    tekst_zaszyfrowany += znak;
                }
            }
            return tekst_zaszyfrowany;
        }
    }
}