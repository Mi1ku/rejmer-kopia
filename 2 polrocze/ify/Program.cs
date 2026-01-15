using System;

// wiek_kategorii
Console.WriteLine("------------------------------");
Console.WriteLine("wiek_kategorii - Apka");
Console.WriteLine("------------------------------");
Console.Write("Podaj wiek: ");
if (int.TryParse(Console.ReadLine(), out int wiek))
{
    if (wiek < 0)
    {
        Console.WriteLine("Podano zly wiek!");
    }
    else if (wiek <= 12)
    {
        Console.WriteLine("Jesteś dzieckiem");
    }
    else if (wiek <= 17)
    {
        Console.WriteLine("Jesteś nastolatkiem");
    }
    else if (wiek <= 64)
    {
        Console.WriteLine("Jesteś dorosłym");
    }
    else
    {
        Console.WriteLine("Jesteś seniorem");
    }
}
else
{
    Console.WriteLine("To nie jest poprawna liczba!");
}

// czy_parzysta
Console.WriteLine("------------------------------");
Console.WriteLine("czy_parzysta - Apka");
Console.WriteLine("------------------------------");
Console.Write("Podaj liczbe: ");
if (int.TryParse(Console.ReadLine(), out int liczba))
{
    if (liczba % 2 == 0)
    {
        Console.WriteLine("Liczba jest parzysta");
    }
    else
    {
        Console.WriteLine("Liczba jest nieparzysta");
    }
}
else
{
    Console.WriteLine("Błędne dane!");
}

// ocena_student
Console.WriteLine("------------------------------");
Console.WriteLine("ocena_student - Apka");
Console.WriteLine("------------------------------");
Console.Write("Podaj wynik testu od 0 do 100: ");
if (int.TryParse(Console.ReadLine(), out int wynik_testu))
{
    if (wynik_testu < 0 || wynik_testu > 100)
    {
        Console.WriteLine("Wynik poza zakresem!");
    }
    else if (wynik_testu >= 90)
    {
        Console.WriteLine("A");
    }
    else if (wynik_testu >= 80)
    {
        Console.WriteLine("B");
    }
    else if (wynik_testu >= 70)
    {
        Console.WriteLine("C");
    }
    else if (wynik_testu >= 60)
    {
        Console.WriteLine("D");
    }
    else
    {
        Console.WriteLine("F");
    }
}
else
{
    Console.WriteLine("Wpisz cyfry, nie litery!");
}

// czy_pierwsza
Console.WriteLine("------------------------------");
Console.WriteLine("czy_pierwsza - Apka");
Console.WriteLine("------------------------------");
Console.Write("Podaj liczbę: ");
if (int.TryParse(Console.ReadLine(), out int liczba_pierwsza))
{
    if (liczba_pierwsza < 2)
    {
        Console.WriteLine("Liczba nie jest pierwsza (musi być >= 2).");
    }
    else
    {
        bool jestPierwsza = true;
        for (int i = 2; i <= Math.Sqrt(liczba_pierwsza); i++)
        {
            if (liczba_pierwsza % i == 0)
            {
                jestPierwsza = false;
                break;
            }
        }

        if (jestPierwsza)
        {
            Console.WriteLine("Liczba jest pierwsza");
        }
        else
        {
            Console.WriteLine("Liczba nie jest pierwsza");
        }
    }
}
else
{
    Console.WriteLine("To nie jest poprawna liczba!");
}

// zakres_liczb
Console.WriteLine("------------------------------");
Console.WriteLine("zakres_liczb - Apka");
Console.WriteLine("------------------------------");
Console.WriteLine("Podaj liczbę (10-20): ");
if (int.TryParse(Console.ReadLine(), out int liczba_zakres))
{
    if (liczba_zakres >= 10 && liczba_zakres <= 20)
    {
        Console.WriteLine("Liczba w zakresie");
    }
    else
    {
        Console.WriteLine("Liczba poza zakresem");
    }
}

// najwieksza_z_trzech
Console.WriteLine("------------------------------");
Console.WriteLine("najwieksza_z_trzech - Apka");
Console.WriteLine("------------------------------");
Console.Write("Podaj 1 liczbe: ");
int x = int.Parse(Console.ReadLine());
Console.Write("Podaj 2 liczbe: ");
int y = int.Parse(Console.ReadLine());
Console.Write("Podaj 3 liczbe: ");
int z = int.Parse(Console.ReadLine());

int najwieksza = x;

if (y > najwieksza)
{
    najwieksza = y;
}

if (z > najwieksza)
{
    najwieksza = z;
}

Console.WriteLine("Największa to: " + najwieksza);

// czy_rok_przestepny
Console.WriteLine("------------------------------");
Console.WriteLine("czy_rok_przestepny - Apka");
Console.WriteLine("------------------------------");
Console.Write("Podaj rok: ");
int rok = int.Parse(Console.ReadLine());
if ((rok % 4 == 0 && rok % 100 != 0) || (rok % 400 == 0))
{
    Console.WriteLine("Rok " + rok + " jest przestępny.");
}
else
{
    Console.WriteLine("Rok " + rok + " nie jest przestępny.");
}

// haslo_dostepu
Console.WriteLine("------------------------------");
Console.WriteLine("Haslo Dostepu - Apka");
Console.WriteLine("------------------------------");
Console.WriteLine("Wprowadz haslo dostepu (inf04): ");
string wprowadzone_haslo = Console.ReadLine();
string domyslne_haslo = "inf04";
if (wprowadzone_haslo == domyslne_haslo)
{
    Console.WriteLine("Dostep przyznany");
}
else
{
    Console.WriteLine("Dostep zabroniony");
}

// czy_trojkat
Console.WriteLine("------------------------------");
Console.WriteLine("czy_trojkat - Apka");
Console.WriteLine("------------------------------");
Console.WriteLine("Podaj dlugosc pierwszego boku: ");
int a = int.Parse(Console.ReadLine());
Console.WriteLine("Podaj dlugosc drugiego boku: ");
int b = int.Parse(Console.ReadLine());
Console.WriteLine("Podaj dlugosc trzeciego boku: ");
int c = int.Parse(Console.ReadLine());

if (a + b > c && a + c > b && b + c > a)
{
    Console.WriteLine("Można z nich zbudować trójkąt");
}
else
{
    Console.WriteLine("Nie można z nich zbudować trójkąta");
}

// cena_biletu
Console.WriteLine("------------------------------");
Console.WriteLine("cena_bilety - Apka");
Console.WriteLine("------------------------------");
Console.WriteLine("Podaj swoj wiek: ");
int bilet_wiek = int.Parse(Console.ReadLine());
int cena_bilet = 0;
if (bilet_wiek >= 0 && bilet_wiek <= 12)
{
    cena_bilet = 10;
    Console.WriteLine($"Cena biletu dla ciebie to: {cena_bilet}");
}
else if (bilet_wiek > 12 && bilet_wiek <= 17)
{
    cena_bilet = 15;
    Console.WriteLine($"Cena biletu dla ciebie to: {cena_bilet}");
}
else if (bilet_wiek > 17 && bilet_wiek <= 64)
{
    cena_bilet = 20;
    Console.WriteLine($"Cena biletu dla ciebie to: {cena_bilet}");
}
else if (bilet_wiek >= 65)
{
    cena_bilet = 12;
    Console.WriteLine($"Cena biletu dla ciebie to: {cena_bilet}");
}
else
{
    Console.WriteLine("Podano ujemny wiek!");
}

// kalkulator
Console.WriteLine("------------------------------");
Console.WriteLine("Kalkulator - apka");
Console.WriteLine("------------------------------");
Console.Write("Podaj pierwszą liczbę: ");
double l1 = double.Parse(Console.ReadLine());
Console.Write("Podaj drugą liczbę: ");
double l2 = double.Parse(Console.ReadLine());
Console.WriteLine("Wybierz operację: +, -, *, /");
string operacja = Console.ReadLine();

if (operacja == "+")
{
    Console.WriteLine($"Wynik: {l1 + l2}");
}
else if (operacja == "-")
{
    Console.WriteLine($"Wynik: {l1 - l2}");
}
else if (operacja == "*")
{
    Console.WriteLine($"Wynik: {l1 * l2}");
}
else if (operacja == "/")
{
    if (l2 != 0)
    {
        Console.WriteLine($"Wynik: {l1 / l2}");
    }
    else
    {
        Console.WriteLine("Nie dziel przez zero cholero");
    }
}
else
{
    Console.WriteLine("Nieznana operacja cieciu!");
}