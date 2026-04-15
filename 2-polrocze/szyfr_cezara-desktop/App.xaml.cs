using Microsoft.Extensions.DependencyInjection;

namespace szyfr_cezara_desktop
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();
        }

        protected override Window CreateWindow(IActivationState? activationState)
        {
            return new Window(new Cezar_UI());
        }
    }
}