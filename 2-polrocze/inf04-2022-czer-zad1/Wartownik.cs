using System;
using System.Collections.Generic;
using System.Text;

namespace inf04_2022_czer_zad1
{

    internal class Wartownik
    {
        public static void WypelnijTablice(int[] tablica, int n)
        {
            Random rnd = new Random();
            for (int i = 0; i < n; i++)
            {
                tablica[i] = rnd.Next(1, 101);
            }
        }
        public static int SzukajZWartownikiem(int[] tablica,int n,int szukana)
        {
            tablica[n] = szukana;
            int i = 0;
            while (tablica[i] != szukana)
            {
                i++;
            }
            return i < n ? i : -1;
        }
    }
}
