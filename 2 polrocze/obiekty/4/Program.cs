Prostokat prostokat1 = new Prostokat();
prostokat1.dlugosc = 5;
prostokat1.szerokosc = 10;
prostokat1.Pole();
prostokat1.Obwod();

class Prostokat
{
    public int dlugosc;
    public int szerokosc;

    public void Pole()
    {
        Console.WriteLine($"Pole wynosi: {dlugosc * szerokosc}");
    }
    
    public void Obwod()
    {
        Console.WriteLine($"Obwód wynosi: {2 * dlugosc + 2 * szerokosc}");
    }
}