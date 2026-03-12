using System;

Osoba2 p2 = new Osoba2("Dominik", 18);
p2.Wyswietl();

class Osoba2
{
    public string imie;
    public int wiek;

    public Osoba2(string imie, int wiek)
    {
        this.imie = imie;
        this.wiek = wiek;
    }

    public void Wyswietl()
    {
        Console.WriteLine($"imie {imie}, wiek {wiek}");
    }
}