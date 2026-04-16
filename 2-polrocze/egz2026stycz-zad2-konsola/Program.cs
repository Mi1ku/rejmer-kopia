using System;

namespace egz_inf04_2026_stycz_zad2
{
    abstract class Pytanie // Klasa Pytanie (Nie mozna jej powolac)
    {
        protected string trescPytania; // Wartosc tekstowa z trescia pytania
        protected string nazwaPlikuZdjecia; // Nazwa pliku zawierajacego zdjecie do pytania
        protected bool czyPoprawna; // Informacja czy odpowiedz na pytanie jest poprawna typu logicznego

        public Pytanie(string tresc, string plik) // Konstruktor dwuargumentowy z argumentami tresc pytania i nazwa pliku dla pytania
        {
            trescPytania = tresc; // ustawienie wartosci tresci
            nazwaPlikuZdjecia = plik; // ustawienie wartosci zdjecia
            czyPoprawna = false; // ustawienie wartosci logicznej czyPoprawna
        }
        /*
        Publiczna abstrakcyjna metoda sprawdzajaca odpowiedz
        */
        public abstract bool SprawdzOdpowiedz(char odpowiedzUzytkownika);
    }

    // klasa pytaniezamkniete na bazie klasy pytanie
    class PytanieZamkniete : Pytanie
    {
        /*
        / pola dostepne jedynie w klasie niedostepne w potomnych
        */
        private string odpA, odpB, odpC;
        private char poprawnaOdp;

        /*
        Konstruktor sześcioargumentowy o argumentach:
         - tresc pytania
         - nazwa pliku graficznego dla pytania
         - tresc odpowiedzi A
         - tresc odpowiedzi B
         - tresc odpowiedzi C
         - Informacja o poprawnej odpowiedzi (znak 'A' lub 'B' lub 'C')
        */
        public PytanieZamkniete(string tresc, string plik, string a, string b, string c, char poprawna)
            : base(tresc, plik) // Konstruktor wywoluje konstruktor klasy po ktorej dziediczy
        {
            /*
            Przypisuje treści odpowiedzi oraz poprawną odpowiedz do pol klasy
            */
            odpA = a;
            odpB = b;
            odpC = c;
            poprawnaOdp = poprawna;
        }
        /*
         Implementacja Metody abstrakcyjnej sprawdzajacej odpowiedz ktora:
          - Sprawdza czy odpowiedz jest poprawna i w zaleznosci
            od wyniku, przypisuje odpowiednia wartosc do pola
            logicznego
          - Zwraca wartosc pola logicznego
        */
        public override bool SprawdzOdpowiedz(char odpowiedzUzytkownika)
        {

            if (char.ToUpper(odpowiedzUzytkownika) == char.ToUpper(poprawnaOdp))
            {
                czyPoprawna = true;
            }
            else
            {
                czyPoprawna = false;
            }
            return czyPoprawna;
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            /*
                Test 1 - Mozliwosc utworzenia obiektu klasy Pytanie (Błąd)
                Zrzut ekranu o nazwie test1.png
             */
            // Pytanie p = new Pytanie("Tresc", "foto.jpg"); 

            /*
             Obiekt klasy PytanieZamkniete, dane do konstruktora wczytaj
             z klawiatury. Wczytaj z klawiatury odpowiedz na pytanie.
             Sprawdz za pomoca metody poprawnosc odpowiedzi i wyswietl
             na ekranie tekst "Odpowiedz prawidlowa" lub "Odpowiedz nieprawidlowa"
             Wykonaj zrzut zrzut ekranu o nazwie test2.png
            */
            Console.WriteLine("--- Inicjalizacja Pytania ---");
            Console.Write("Treść pytania: ");
            string t = Console.ReadLine();

            Console.Write("Plik graficzny: ");
            string f = Console.ReadLine();

            Console.Write("Odp A: ");
            string a = Console.ReadLine();

            Console.Write("Odp B: ");
            string b = Console.ReadLine();

            Console.Write("Odp C: ");
            string c = Console.ReadLine();

            Console.Write("Poprawna litera (A/B/C): ");
            char popr = Console.ReadKey().KeyChar;
            Console.WriteLine("\n");

            PytanieZamkniete quiz = new PytanieZamkniete(t, f, a, b, c, popr);

            Console.WriteLine("PODAJ ODPOWIEDŹ NA PYTANIE:");
            char userAns = Console.ReadKey().KeyChar;
            Console.WriteLine();

            if (quiz.SprawdzOdpowiedz(userAns))
            {
                Console.WriteLine("Odpowiedź prawidłowa");
            }
            else
            {
                Console.WriteLine("Odpowiedź nieprawidłowa");
            }

            Console.WriteLine("\nNaciśnij dowolny klawisz, aby zakończyć...");
            Console.ReadKey();
        }
    }
}