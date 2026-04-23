namespace kostkawspolna_maui
{
    public partial class MainPage : ContentPage
    {
        // int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

        private void rzutKoscmi_Clicked(object sender, EventArgs e)
        {
            // tablica zawierajaca 5 liczb calkowitych - wynikow rzutow
            int[] dice = new int[5];
            // obiekt generatora liczb losowych
            Random r = new Random();
            for (int i = 0; i < 5; i++)
            {
                // losowanie liczby z zakresu 1-6
                dice[i] = r.Next(1, 7);
            }
            // wyświetlanie wyników rzutu koścmi
            k1.Source = "k" + dice[0] + ".jpg";
            k2.Source = "k" + dice[1] + ".jpg";
            k3.Source = "k" + dice[2] + ".jpg";
            k4.Source = "k" + dice[3] + ".jpg";
            k5.Source = "k" + dice[4] + ".jpg";
            // policz wynik losowania calkowity
            for (int oczko = 1; oczko <= 6; oczko++)
            {
                //iterujemy przez ilość kości
                //pierwszy przebieg sprawdz ile jest jedynek
                //drugi ile dwojek itd
                //definiujemy sobie liczni kosci o
                //zadanej ilosci oczek
                int licznik = 0; // na poczatek 0 kosci
                // druga petla iterujaca po tablicy z kosciami
                for (int koscIndex = 0; koscIndex <= 5; koscIndex++)
                {
                    if (dice[koscIndex] == oczko)
                    {
                        licznik++;
                    }
                }
                int punktyZaLiczbe = licznik * oczko;
            }
        }

        private void resetWynik_Clicked(object sender, EventArgs e)
        {
            k1.Source = "question.jpg";
            k2.Source = "question.jpg";
            k3.Source = "question.jpg";
            k4.Source = "question.jpg";
            k5.Source = "question.jpg";
        }
        /*
        private void OnCounterClicked(object? sender, EventArgs e)
        {
        count++;

        if (count == 1)
            CounterBtn.Text = $"Clicked {count} time";
        else
            CounterBtn.Text = $"Clicked {count} times";

        SemanticScreenReader.Announce(CounterBtn.Text);
        }
        */
    }
}
