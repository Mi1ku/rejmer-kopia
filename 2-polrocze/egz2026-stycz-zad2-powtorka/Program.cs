namespace egz2026_stycz_zad2_powtorka
{
    internal class Program
    {

    }
    abstract class Pytanie
    {
        protected string trescPytania, nazwa_Pliku;
        protected bool czyPoprawna;  

        public Pytanie(string trescPytania, string nazwa_Pliku, bool czyPoprawna)
        {
            this.trescPytania = trescPytania;
            this.nazwa_Pliku = nazwa_Pliku;
            this.czyPoprawna = czyPoprawna;
        }
        public abstract bool SprawdzOdpowiedz(char odpowiedz);
    }
    class PytanieZamkniete : Pytanie
    {
        private string odpA, odpB, odpC;
        private char poprawnaOdp;
        public PytanieZamkniete(string trescPytania, string nazwa_Pliku, string a, string b, string c, char czyPoprawna)
            : base(trescPytania,nazwa_Pliku)
        {
            odpA = a;
            odpB = b;
            odpC = c;
            czyPoprawna = poprawna;
        }
    }
}
