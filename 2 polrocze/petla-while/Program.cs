// 1 - Liczenie do 10
using System.Text.Json.Serialization.Metadata;

Console.WriteLine("---------------------------------");
Console.WriteLine("Zad 1 - Liczenie do 10");
Console.WriteLine("---------------------------------");
int i = 0;
while (i<10)
{
    i++;
    Console.WriteLine(i);
}

// 2 - Suma liczb od 1 do N
Console.WriteLine("---------------------------------");
Console.WriteLine("Zad 2 - Suma liczb od 1 do N");
Console.WriteLine("---------------------------------");
Console.WriteLine("Podaj liczbe N: ");
int n = int.Parse(Console.ReadLine());
int a = 1;
int suma = 0;

while (a <= n) 
{
    suma += a;
    a++;
}

Console.WriteLine($"Suma Liczb od 1 do N wynosi: {suma}");

// 3 - Zgadywanie liczby
Console.WriteLine("---------------------------------");
Console.WriteLine("Zad 3 - Zgadywanie Liczby");
Console.WriteLine("---------------------------------");
Random random = new Random();
int wylosowana = random.Next(1, 21);
int strzal = 0;
while (strzal != wylosowana)
{
    Console.Write("Zgadnij liczbe (1-20): ");
    strzal = int.Parse(Console.ReadLine());
    if (strzal < wylosowana)
    {
        Console.WriteLine("Za mało!");
    }
    else if (strzal > wylosowana)
    {
        Console.WriteLine("Za dużo!");
    }
    else
    {
        Console.WriteLine("Gratulacje! Zgadłeś!");
    }
}
// 4 - Liczby Parzyste
Console.WriteLine("---------------------------------");
Console.WriteLine("Zad 4 - Liczby Parzyste");
Console.WriteLine("---------------------------------");
int b= 0;
while (b< 20)
{
    b++;
    if (b% 2 == 0)
    {
        Console.WriteLine($"{b}");
    };
};
// Zad 5 - Konto oszczędnościowe
Console.WriteLine("---------------------------------");
Console.WriteLine("Zad 5 - Konto Oszczędnościowe");
Console.WriteLine("---------------------------------");
int c = 0;
int stan_konta = 0;
while (stan_konta < 100)
{
    c++;
    stan_konta += 10;
    Console.WriteLine($"Stan konta wynosi: {stan_konta}");
}
// Zad 6 - Liczenie cyfr liczby
Console.WriteLine("---------------------------------");
Console.WriteLine("Zad 6 - Liczenie Cyfr Liczby");
Console.WriteLine("---------------------------------");
Console.WriteLine("Podaj liczbę: ");
int liczba = int.Parse(Console.ReadLine());
int d = 0;
while (d < liczba.ToString().Length)
{
    d++;
}
Console.WriteLine($"Liczba cyfr liczby wynosi: {d}");
// Zad 7 - Liczba kroków do zera
Console.WriteLine("---------------------------------");
Console.WriteLine("Zad 7 Liczba kroków do zera");
Console.WriteLine("---------------------------------");
Console.WriteLine("Podaj liczbę całkowitą: ");
int calkowita  = int.Parse(Console.ReadLine());
int e  = 0;
while (e > 0)
{
    e--;
    Console.WriteLine($"{e}");
}