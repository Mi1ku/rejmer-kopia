using CommunityToolkit.Maui.Alerts;
using CommunityToolkit.Maui.Core;

namespace ColorPicker_Cwiczenie;

public partial class ColorPicker : ContentPage
{
    public ColorPicker()
    {
        InitializeComponent();
    }

    private void slider_ValueChanged(object sender, ValueChangedEventArgs e)
    {
        var red = (int)sldRed.Value;
        var green = (int)sldGreen.Value;
        var blue = (int)sldBlue.Value;

        Color color = Color.FromRgb(red, green, blue);
        setColor(color);
    }

    private void setColor(Color color)
    {
        Container.BackgroundColor = color;

        int r = (int)(color.Red * 255);
        int g = (int)(color.Green * 255);
        int b = (int)(color.Blue * 255);

        string hex = $"#{r:X2}{g:X2}{b:X2}";
        lblHex.Text = $"{hex}";
    }
    private async void ImageButton_Clicked(object sender, EventArgs e)
    {
        string hexValue = lblHex.Text;

        await Clipboard.SetTextAsync(hexValue);

        var toast = Toast.Make($"Skopiowano Kolor: {hexValue}",
                               ToastDuration.Short,
                               14);
        await toast.Show();
    }

    private void Button_Clicked(object sender, EventArgs e)
    {
        var random = new Random();
        int r = random.Next(256);
        int g = random.Next(256);
        int b = random.Next(256);

        sldRed.Value = r;
        sldGreen.Value = g;
        sldBlue.Value = b;

        setColor(Color.FromRgb(r, g, b));
    }
}
