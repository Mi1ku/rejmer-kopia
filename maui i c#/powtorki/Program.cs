using System;
using System.Runtime.InteropServices;

public class Osoba
{
    public string Imie { get; set; }
    public int Wiek { get; set; }

    public Osoba(string imie, int wiek)
    {
        Imie = imie;
        Wiek = wiek;
    }

    public virtual string Powitanie()
    {
        return $"Cześć, nazywam się {Imie}, mam {Wiek} lat.";
    }
}

public class Student : Osoba
{
    public string School { get; set; }

    public Student(string imie, int wiek, string school) : base (imie, wiek)
    {
        School = school;
    }

    public override string Powitanie()
    {
        return $"Cześć, nazywam się {Imie}, mam {Wiek} lat, uczę się w {School}.";
    }
}

public class Program
{
    static void Main()
    {
        Student x = new Student("Mikołaj", 18, "ZSA Sławno");
        Console.WriteLine(x.Powitanie());
    }
}
