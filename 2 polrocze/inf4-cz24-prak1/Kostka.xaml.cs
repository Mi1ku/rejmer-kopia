using System.Security.Cryptography.X509Certificates;

namespace inf4_cz24_prak1;

public partial class Kostka : ContentPage
{
    public Kostka()
    {
        InitializeComponent();
    }

    private void rzućKoścmi_Clicked(object sender, EventArgs e)
    {
        Random r = new Random();
        int[] rzuty_koscmi = new int[5];
        int wynikRzutu = 0;
        int calkowityWynikGry = 0;
        for (int i = 0; i < 5; i++)
        {
            rzuty_koscmi[i] = r.Next(1, 7);
        }
        k1.Source = $"k{rzuty_koscmi[0]}.jpg";
        k2.Source = $"k{rzuty_koscmi[1]}.jpg";
        k3.Source = $"k{rzuty_koscmi[2]}.jpg";
        k4.Source = $"k{rzuty_koscmi[3]}.jpg";
        k5.Source = $"k{rzuty_koscmi[4]}.jpg";

        for (int i = 1; i <= 6; i++)
        {
            int licznik = 0;
            for (int j = 0; j < 5; j++)
            {
                if (rzuty_koscmi[j] == i) licznik++;
            }

            if (licznik > 1)
            {
                wynikRzutu += (i * licznik);
            }
        }

        calkowityWynikGry += wynikRzutu;
        textWynikLosowania.Text = $"Wynik tego losowania: {wynikRzutu}";
        textWynikGry.Text = $"Wynik gry: {calkowityWynikGry}";
    }
    private void resetWynik_Clicked(object sender, EventArgs e)
    {
        int calkowityWynikGry;
        calkowityWynikGry = 0;
        textWynikLosowania.Text = "Wynik tego losowania: 0";
        textWynikGry.Text = "Wynik gry: 0";
        k1.Source = "question.jpg";
        k2.Source = "question.jpg";
        k3.Source = "question.jpg";
        k4.Source = "question.jpg";
        k5.Source = "question.jpg";
    }
}