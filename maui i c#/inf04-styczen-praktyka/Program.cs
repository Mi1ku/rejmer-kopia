using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;

namespace inf04_styczen_praktyka
{
    internal class Losowe
    {
        private int[] tablica;
        private int liczbaElementow;

        public Losowe(int rozmiar)
        {
            liczbaElementow = rozmiar;
            tablica = new int[rozmiar];
            Random rnd = new Random();
            for (int i = 0; i < liczbaElementow; i++)
            {
                tablica[i] = rnd.Next(1, 1001);
            }
        }
        public void Wyswietl()
        {
            for (int i = 0; i < liczbaElementow; i++)
            {
                Console.WriteLine($"{i + 1}: {tablica[i]}");
            }
        }
        public void Wyszukaj(int wartosc)
        {
            for (int i = 0; i < liczbaElementow; i++)
            {
                if (tablica[i] == wartosc)
                {
                    Console.WriteLine($"{i + 1}");
                }
            }
            Console.WriteLine($"-1");
        }
        public void Nieparzyste()
        {
            int licznik = 0;
            Console.WriteLine("Liczby nieparzyste: ");
            for (int i = 0; i < liczbaElementow; i++)
            {
                if (tablica[i] % 2 != 0)
                {
                    licznik++;
                    Console.WriteLine($"{tablica[i]}");
                }
            }
            Console.WriteLine($"Razem nieparzystych: {licznik}");
        }
        public double Średnia()
        {
            int suma = 0;
            for (int i = 0; i < liczbaElementow; i++)
            {
                suma += tablica[i];
            }
            return (double)suma / liczbaElementow;
        }
        static void Main(string[] args)
        {
            Losowe losowe = new Losowe(20);
            losowe.Wyswietl();
            losowe.Wyszukaj(20);
            losowe.Nieparzyste();
            losowe.Średnia();
        }
    }
}