namespace nowyprojekcik;

public partial class CommandsControls : ContentPage
{
	public CommandsControls()
	{
		InitializeComponent();
	}

    private void btnTest_Clicked(object sender, EventArgs e)
    {
		DisplayAlert("Sigma Skibidibi","HelloWorld(Print)","Ok","No");
    }

    private void RadioButton_CheckedChanged(object sender, CheckedChangedEventArgs e)
    {
        DisplayAlert("RadioButton", $"Changed: {e.Value}", "Ok");
    }

    private void SearchBar_SearchButtonPressed(object sender, EventArgs e)
    {
        DisplayAlert("Searching", $"Searching: {searchControl.Text}", "Ok");
    }

    private void SwipeItem_Invoked(object sender, EventArgs e)
    {
        DisplayAlert("SwipeView", $"Element Tapped", "Ok");
    }
}