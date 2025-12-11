namespace PerfectPayFilm;

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

    private void CalculateTotal()
    {
        if (noPersons == 0) noPersons = 1;

        // Total tip
        var totalTip = (bill * tip) / 100;

        // Tip by person
        var tipByPerson = totalTip / (decimal)noPersons;
        lblTipByPerson.Text = $"{tipByPerson:C}";

        // Subtotal
        var subTotal = bill / (decimal)noPersons;
        lblSubtotal.Text = $"{subTotal:C}"; 

        // Total
        var TotalByPerson = (bill + totalTip) / (decimal)noPersons;
        lblTotal.Text = $"{TotalByPerson:C}"; 
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

    private void btnMinus_Clicked(object sender, EventArgs e)
    {
        if (noPersons > 1)
        {
            noPersons--;
        }
        lblNoPersons.Text = noPersons.ToString();
        CalculateTotal();
    }

    private void btnPlus_Clicked(object sender, EventArgs e)
    {
        noPersons++;
        lblNoPersons.Text = noPersons.ToString();
        CalculateTotal();
    }
}