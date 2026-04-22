using Microsoft.Extensions.DependencyInjection;

namespace inf4_cz24_prak1
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();
        }

        protected override Window CreateWindow(IActivationState? activationState)
        {
            return new Window(new Kostka());
        }
    }
}