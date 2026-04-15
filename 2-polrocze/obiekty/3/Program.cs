using System;

Osoba p1 = new Osoba();
p1.imie = "Mikołaj";
p1.wiek = 19;
p1.ZwiekszWiek();
p1.Wyswietl();

class Osoba
{
    public string imie;
    public int wiek;

    public void Wyswietl()
    {
        Console.WriteLine($"imie {imie}, wiek {wiek}");
    }

    public void ZwiekszWiek()
    {
        wiek++;
    }
}