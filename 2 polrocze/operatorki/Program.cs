using System;

// Zad 1 
int a = 2;
int b = 3;
int pole = a * b;
Console.WriteLine(pole);

// Zad 2
int l1 = 6;
int l2 = 7;
int l3 = 8;
int srednia = (l1 + l2 + l3) / 3;
Console.WriteLine(srednia);

// Zad 3
int lj1 = 6;
int lj2 = 4;
int resztazdzielenia = lj1 % lj2;
Console.WriteLine(resztazdzielenia);

// Zad 4
int liczba10 = 10;
liczba10 += 5;
Console.WriteLine(liczba10);

// Zad 5
int liczba4 = 4;
liczba4 *= 3;
Console.WriteLine(liczba4);

// Zad 6
int liczba2 = 2;
int wynikPotegi = (int)Math.Pow(liczba2, 3);
Console.WriteLine(wynikPotegi);

// Zad 7
int wiek1 = 25;
int wiek2 = 30;
bool czyRowne = wiek1 == wiek2;
Console.WriteLine("Czy wieki są równe? " + czyRowne);

if (wiek1 > wiek2)
{
    Console.WriteLine("Pierwszy wiek jest większy.");
}
else if (wiek1 < wiek2)
{
    Console.WriteLine("Drugi wiek jest większy.");
}
else
{
    Console.WriteLine("Oba wieki są takie same.");
}

// Zad 8
int dowolna = 15;
bool czyWPrzedziale = dowolna >= 10 && dowolna <= 20;
Console.WriteLine($"Czy liczba {dowolna} mieści się w przedziale [10, 20]? {czyWPrzedziale}");

// Zad 9 
int dowolnaliczba = 9;
if (dowolnaliczba%2==0 && dowolnaliczba%3==0)
{
    Console.WriteLine($"Liczba {dowolnaliczba} jest podzielna przez 2 i 3");
}
else
{
    Console.WriteLine($"Liczba {dowolnaliczba} nie jest podzielna przez 2 i 3");
}

// Zad 10
bool czy_Pada = true;
czy_Pada = !czy_Pada;
if  (czy_Pada == true)
{
    Console.WriteLine("Pada");
}
else
{
    Console.WriteLine("Nie pada");
}