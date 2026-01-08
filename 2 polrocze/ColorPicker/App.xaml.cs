using Microsoft.Maui.Controls;

namespace ColorPicker
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();
            MainPage = new ColorPicker();
        }
    }
}