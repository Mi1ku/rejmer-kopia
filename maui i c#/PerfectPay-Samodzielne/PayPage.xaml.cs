namespace PerfectPay_Samodzielne;

public partial class PayPage : ContentPage
{
    decimal bill;
    int tip;
    int noPersons;
    public PayPage()
	{
		InitializeComponent();
        tip = 0;
        noPersons = 1;

        CalculateTotal();
	}

    private void CalculateTotal()
    {
        // Total Tip
        var totalTip = (bill * tip) / 100;

        // TipbyPerson
        var tipByPerson = (totalTip / noPersons);
        lblTipByPerson.Text = $"{tipByPerson:C}";

        // subTotal
        var subTotal = (bill / noPersons);
        lblSubTotal.Text = $"{subTotal:C}";

        // Total
        var total = tipByPerson + subTotal;
        lblTotal.Text = $"{total:C}";
    }
    private void txtBill_Completed(object sender, EventArgs e)
    {
        if (decimal.TryParse(txtBill.Text, out decimal result))
        {
            bill = result;
            CalculateTotal();
        }
        else
        {
            bill = 0;
            CalculateTotal();
        }
    }

    private void sldTip_ValueChanged(object sender, ValueChangedEventArgs e)
    {
        tip = (int)sldTip.Value;
        lblTip.Text = $"Tip: {tip}%";
        CalculateTotal();
    }

    private void Button_Clicked(object sender, EventArgs e)
    {
        if (sender is Button button)
        {
            var percentage = int.Parse(button.Text.Replace("%", ""));
            sldTip.Value = percentage;
        }
    }

    private void lblMinus_Clicked(object sender, EventArgs e)
    {
        if (noPersons > 1)
        {
            noPersons--;
        }
        lblNoPersons.Text = noPersons.ToString();
        CalculateTotal();
    }

    private void lblPlus_Clicked(object sender, EventArgs e)
    {
        noPersons++;
        lblNoPersons.Text = noPersons.ToString();
        CalculateTotal();
    }
}