using System;
using System.Collections.Generic;
using System.Text;

namespace egz2026stycz_zad2_konsola
{
    internal class PytanieZamkniete : Pytanie
    {
        private string tresc_odp_A;
        private string tresc_odp_B;
        private string tresc_odp_C;
        private char poprawna_odp;

        public PytanieZamkniete(string tresc, string nazwaPliku, string odpA, string odpB, string odpC, char poprawna)
            : base(tresc, nazwaPliku)
        {
            this.tresc_odp_A = odpA;
            this.tresc_odp_B = odpB;
            this.tresc_odp_C = odpC;
            this.poprawna_odp = poprawna;
        }

        public override bool SprawdzOdpowiedz(char odpowiedzUzytkownika)
        {
            if (odpowiedzUzytkownika == poprawna_odp)
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
}
