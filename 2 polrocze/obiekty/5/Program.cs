KontoBankowe mk = new KontoBankowe();
mk.numerkonta = "921212112121290921921021";
mk.saldo = 20;
mk.Wplata(1000);
mk.Wyplata(100);

class KontoBankowe()
{
    public string numerkonta;
    public int saldo;
    
    public void Wplata(int wplata)
    {
        saldo += wplata;
        Console.WriteLine($"Stan konta po wplacie: {saldo}");
    }
    public void Wyplata(int wyplata)
    {
        saldo -= wyplata;
        Console.WriteLine($"Stan konta po wyplacie: {saldo}");
    }
}