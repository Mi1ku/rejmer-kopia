namespace nowyprojekcik;

public partial class InputControlsDemo : ContentPage
{
	public InputControlsDemo()
	{
		InitializeComponent();
	}

    private void slider_ValueChanged(object sender, ValueChangedEventArgs e)
    {
		lblSlider.Text= slider.Value.ToString();
    }
	private void stopper_ValueChanged(object sender, ValueChangedEventArgs e)
    {
		if (stopper != null)
		{
			lblSlider.Text = stopper.Value.ToString();
        }
    }
}