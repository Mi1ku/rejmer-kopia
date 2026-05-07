namespace egzinf042023czczionka_sam
{
    public partial class MainPage : ContentPage
    {
        //int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

        private void btnApply_Clicked(object sender, EventArgs e)
        {
            Random rnd = new Random();
            string[] cytaty = ["Dzień dobry", "Good morning", "Buenos dias"];
            int losowyIndex = rnd.Next(0, cytaty.Length);
            lblCytat.Text = cytaty[losowyIndex];
        }

        private void sldRozmiar_ValueChanged(object sender, ValueChangedEventArgs e)
        {
            int wartoscSlidera = (int)sldRozmiar.Value;
            lblRozmiar.Text = $"Rozmiar: {wartoscSlidera}";
            lblCytat.FontSize = wartoscSlidera;
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
