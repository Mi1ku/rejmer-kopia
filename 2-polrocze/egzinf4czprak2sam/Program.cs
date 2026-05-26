using System;
using System.Collections.Generic;
using System.IO;

namespace AplikacjaKonsolowa
{
    public class Album
    {
        public string artist { get; set; }
        public string album { get; set; }
        public int songsNumber { get; set; }
        public int year { get; set; }
        public int downloadNumber { get; set; }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            List<Album> listaAlbumow = WczytajZPliku("C:\\Users\\czwarta\\Documents\\GitHub\\rejmer-kopia\\2-polrocze\\egzinf4czprak2sam\\Data.txt");
            WyswietlWszystko(listaAlbumow);
        }

        public static List<Album> WczytajZPliku(string sciezka)
        {
            List<Album> lista = new List<Album>();
            string[] linie = File.ReadAllLines(sciezka);

            for (int i = 0; i < linie.Length; i += 6)
            {
                Album a = new Album();
                a.artist = linie[i];
                a.album = linie[i + 1];
                a.songsNumber = int.Parse(linie[i + 2]);
                a.year = int.Parse(linie[i + 3]);
                a.downloadNumber = int.Parse(linie[i + 4]);
                lista.Add(a);
            }

            return lista;
        }

        public static void WyswietlWszystko(List<Album> lista)
        {
            foreach (Album a in lista)
            {
                Console.WriteLine(a.artist);
                Console.WriteLine(a.album);
                Console.WriteLine(a.songsNumber);
                Console.WriteLine(a.year);
                Console.WriteLine(a.downloadNumber);
                Console.WriteLine();
            }
        }
    }
}