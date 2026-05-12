namespace inf04_2022_czer_zad1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Wartownik obiekt = new Wartownik();
            const int rozmiar = 50;
            int[] tablica = new int[rozmiar + 1];
            Wartownik.WypelnijTablice(tablica, rozmiar);
            Console.Write("Podaj wartosc do wyszukania (1-100): ");
            int szukana = int.Parse(Console.ReadLine());
            int indeks = Wartownik.SzukajZWartownikiem(tablica, rozmiar, szukana);
            Console.WriteLine("/nZawartosc tablicy:");
            for (int i = 0; i < rozmiar; i++)
            {
                Console.Write(tablica[i] + ", ", tablica[0..rozmiar]);
            }
            if (indeks != -1)
            {
                Console.WriteLine($"Znaleziono {szukana} na indeksie: {indeks}");
            }
            else
            {
                Console.WriteLine($"Nie znaleziono {szukana} w tablicy.");
            }
        }
        
    }
}

