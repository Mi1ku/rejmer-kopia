namespace ColorPicker;

public partial class ColorPicker : ContentPage
{
    public ColorPicker()
    {
        InitializeComponent();
    }

    private void zmienKolor()
    {
        double r = sld_Red.Value;
        double g = sld_Green.Value;
        double b = sld_Blue.Value;

        Color kolor = Color.FromRgba(r, g, b, 1.0);

        tlo.BackgroundColor = kolor;
        hex.Text = kolor.ToHex();
    }

    private void rnd_Color_Clicked(object sender, EventArgs e)
    {
        Random r = new Random();

        sld_Red.Value = r.NextDouble();
        sld_Green.Value = r.NextDouble();
        sld_Blue.Value = r.NextDouble();

        zmienKolor();
    }

    private void zmienSuwak(object sender, ValueChangedEventArgs e)
    {
        zmienKolor();
    }
}