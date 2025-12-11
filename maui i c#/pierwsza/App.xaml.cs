namespace pierwsza
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();
            var navPage = new NavigationPage(new MainPage());
            navPage.BarBackground = Colors.Cornsilk;
            navPage.BarTextColor = Colors.Coral;
            navPage.BackgroundColor = Colors.Coral;
            MainPage = navPage;
        }
    }
}
