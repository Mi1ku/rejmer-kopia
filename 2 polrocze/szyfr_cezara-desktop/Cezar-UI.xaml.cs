using System;
using System.IO;
using System.Text;

namespace szyfr_cezara_desktop;

public partial class Cezar_UI : ContentPage
{
    public Cezar_UI()
    {
        InitializeComponent();
    }

    public static string SzyfrCezara(string tekst_jawny, int klucz)
    {
        if (string.IsNullOrEmpty(tekst_jawny)) return string.Empty;
        string tekst_zaszyfrowany = "";
        klucz = klucz % 26;
        foreach (char znak in tekst_jawny)
        {
            if (znak == ' ')
            {
                tekst_zaszyfrowany += ' ';
            }
            else if (znak >= 'a' && znak <= 'z')
            {
                int przesuniety = znak + klucz;
                if (przesuniety > 'z') przesuniety -= 26;
                if (przesuniety < 'a') przesuniety += 26;
                tekst_zaszyfrowany += (char)przesuniety;
            }
            else
            {
                tekst_zaszyfrowany += znak;
            }
        }
        return tekst_zaszyfrowany;
    }

    private void zaszyfruj_button_Clicked(object sender, EventArgs e)
    {
        if (!int.TryParse(klucz.Text, out int k)) k = 0;
        zaszyfrowany_tekst.Text = SzyfrCezara(tekst_jawny.Text ?? "", k);
    }

    private async void zapisz_szyfr_w_pliku_Clicked(object sender, EventArgs e)
    {
        string tresc = zaszyfrowany_tekst.Text ?? string.Empty;
        using var strumien = new MemoryStream(Encoding.UTF8.GetBytes(tresc));
        await CommunityToolkit.Maui.Storage.FileSaver.Default.SaveAsync("szyfr.txt", strumien, default);
    }
}