using CommunityToolkit.Maui.Alerts;
using CommunityToolkit.Maui.Core;
using Microsoft.Maui;
using Microsoft.Maui.Controls;
using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace ColorPicker
{
    public partial class ColorPicker : ContentPage
    {
        string hexValue = "";
        bool isRandom;

        public ColorPicker()
        {
            InitializeComponent();
        }

        private void Slider_ValueChanged(object sender, ValueChangedEventArgs e)
        {
            if (!isRandom)
            {
                var red = sldRed.Value;
                var green = sldGreen.Value;
                var blue = sldBlue.Value;

                Color color = Color.FromRgb(red, green, blue);
                SetColor(color);
            }
        }

        private void SetColor(Color color)
        {
            Debug.WriteLine(color.ToString());

            RandomButton.BackgroundColor = color;
            Container.BackgroundColor = color;
            hexValue = color.ToHex();
            lblHex.Text = hexValue;
        }

        private void RandomButton_Clicked(object sender, EventArgs e)
        {
            isRandom = true;
            var random = new Random();

            var color = Color.FromRgb(
                random.Next(0, 256),
                random.Next(0, 256),
                random.Next(0, 256)
            );

            SetColor(color);

            sldRed.Value = color.Red;
            sldGreen.Value = color.Green;
            sldBlue.Value = color.Blue;

            isRandom = false;
        }
        private async void ImageButton_Clicked(object sender, EventArgs e)
        {
                await Clipboard.SetTextAsync(hexValue);
                var toast = Toast.Make("Color copied", ToastDuration.Short, 12);
                await toast.Show();
        }
    }
}
