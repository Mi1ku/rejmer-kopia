using szyfr_cezara_dekstop.Models;
using szyfr_cezara_dekstop.PageModels;

namespace szyfr_cezara_dekstop.Pages
{
    public partial class MainPage : ContentPage
    {
        public MainPage(MainPageModel model)
        {
            InitializeComponent();
            BindingContext = model;
        }
    }
}