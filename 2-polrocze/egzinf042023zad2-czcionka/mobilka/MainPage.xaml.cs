namespace egzinf042023zad2_czionka
{
    public partial class MainPage : ContentPage
    {
        //int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

        private void sldRozmiar_ValueChanged(object sender, ValueChangedEventArgs e)
        {
            int obecnyRozmiar = (int)sldRozmiar.Value;
            lblRozmiar.Text = $"Rozmiar: {obecnyRozmiar}";
            lblCzcionka.FontSize = obecnyRozmiar;
        }

        private void btnApply_Clicked(object sender, EventArgs e)
        {
            Random rnd = new Random();
            string[] powitania = { "Dzień dobry", "Good morning", "Buenos dias" };
            int losowyIndeks = rnd.Next(0, powitania.Length);
            lblCzcionka.Text = powitania[losowyIndeks];
        }

        //private void OnCounterClicked(object? sender, EventArgs e)
        //{
        //    count++;

        //    if (count == 1)
        //        CounterBtn.Text = $"Clicked {count} time";
        //    else
        //        CounterBtn.Text = $"Clicked {count} times";

        //    SemanticScreenReader.Announce(CounterBtn.Text);
        //}
    }
}
