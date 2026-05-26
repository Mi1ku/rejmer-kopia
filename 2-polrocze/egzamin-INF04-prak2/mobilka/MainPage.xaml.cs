using System;
using System.Collections.Generic;
using System.IO;

namespace odtwarzacz
{
    public partial class MainPage : ContentPage
    {
        public class Album
        {
            public string artist { get; set; }
            public string album { get; set; }
            public int songsNumber { get; set; }
            public int year { get; set; }
            public int downloadNumber { get; set; }
        }

        public static List<Album> albumy = new List<Album>();
        private int obecnyIndeks = 0;

        public MainPage()
        {
            InitializeComponent();
            WczytajDane();
        }

        private void WczytajDane()
        {
            string sciezka = "C:\\Users\\czwarta\\Documents\\GitHub\\rejmer-kopia\\2-polrocze\\egzinf4czprak2sam\\Data.txt";
            if (File.Exists(sciezka))
            {
                string[] linie = File.ReadAllLines(sciezka);
                for (int i = 0; i < linie.Length; i += 6)
                {
                    Album nowy = new Album();
                    nowy.artist = linie[i];
                    nowy.album = linie[i + 1];
                    nowy.songsNumber = int.Parse(linie[i + 2]);
                    nowy.year = int.Parse(linie[i + 3]);
                    nowy.downloadNumber = int.Parse(linie[i + 4]);
                    albumy.Add(nowy);
                }
            }
            WyswietlAlbum(0);
        }

        private void WyswietlAlbum(int index)
        {
            if (albumy.Count > 0)
            {
                var a = albumy[index];
                lblArtysta.Text = a.artist;
                lblTytul.Text = a.album;
                lblNumeryCount.Text = $"{a.songsNumber} utworów";
                lblRok.Text = a.year.ToString();
                lblPobrania.Text = a.downloadNumber.ToString();
            }
        }


        private void btnWczesniej_Clicked(object sender, EventArgs e)
        {
            obecnyIndeks--;
            if (obecnyIndeks < 0) obecnyIndeks = albumy.Count - 1;
            WyswietlAlbum(obecnyIndeks);
        }

        private void btnDalej_Clicked(object sender, EventArgs e)
        {
            obecnyIndeks++;
            if (obecnyIndeks >= albumy.Count) obecnyIndeks = 0;
            WyswietlAlbum(obecnyIndeks);
        }

        private void btnPobierz_Clicked(object sender, EventArgs e)
        {
            albumy[obecnyIndeks].downloadNumber++;
            WyswietlAlbum(obecnyIndeks);
        }
    }
}