namespace nowyprojekcik
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
            // MainPage = navPage;
            // MainPage = new TabbedPageDemo();
            // MainPage = new StackLayoutPageDemo();
            // MainPage = new HorizontalStackLayoutDemo();
            // MainPage = new GridDemoPage();
            // MainPage = new GridZadanie();
            // MainPage = new AbsoluteLayoutPage();
            // MainPage = new FlexLayoutPage();
            // MainPage = new Controls();
            // MainPage = new Domek();
         //MainPage = new CommandsControls();
     //  MainPage = new InputControlsDemo();
         // MainPage = new TextControlsDemo();
         MainPage = new CollectionsControlsDemo();
        }
    }
}