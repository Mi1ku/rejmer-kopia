using System;
using System.Collections.Generic;
using System.Text;

namespace egz2026stycz_zad2_konsola
{
    internal abstract class Pytanie
    {
        protected string trescPytania;
        protected string nazwaPlikuZdjecia;
        protected bool czyPoprawna;

        public Pytanie(string tresc, string nazwaPliku)
        {
            this.trescPytania = tresc;
            this.nazwaPlikuZdjecia = nazwaPliku;
            this.czyPoprawna = false;
        }

        public abstract bool SprawdzOdpowiedz(char odpowiedzUzytkownika);
    }
}