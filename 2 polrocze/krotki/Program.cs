using System;
using System.Linq;
using System.Runtime.InteropServices;
string[] items =
{
    "jabłko", "banan", "pomarańcza",
    "gruszka", "marchewka", "pomidor",
    "cytryna", "borówka", "czereśnia",
    "śliwka", "banan"
};

// 1. Wyswietlanie_tablicy
Console.WriteLine("--------------------------------");
Console.WriteLine("Wyswietlanie_tablicy - Program");
Console.WriteLine("--------------------------------");
foreach (string owoc in items)
{
    Console.WriteLine(owoc);
}

// 2. Pierwszy_i_ostatni
Console.WriteLine("\n--------------------------------");
Console.WriteLine("pierwszy_i_ostatni - Program");
Console.WriteLine("--------------------------------");
Console.WriteLine($"Pierwszy element tablicy to: {items[0]}");
Console.WriteLine($"Ostatni element tablicy to: {items[^1]}");

// 3. Dodawanie_elementu 
Console.WriteLine("\n--------------------------------");
Console.WriteLine("dodawanie_elementu - Program");
Console.WriteLine("--------------------------------");
string[] lista = [..items, "David Jasper"];
foreach (string item in lista)
{
    Console.WriteLine(item); 
}

// Dodawanie_elementu 2 rozwiazanie
Console.WriteLine("\n--------------------------------");
Console.WriteLine("dodawanie_elementu 2 - Program");
Console.WriteLine("--------------------------------");
string[] items2 = new string[items.Length + 1];
int i = 0;
foreach (string item in items)
{
    items2[i] = item;
    i++;
}
items2[i] = "kot w butach";
foreach (string item in items2)
{
    Console.WriteLine(item);
}

// Dodawanie elementu 3 rozwiazanie
Console.WriteLine("\n--------------------------------");
Console.WriteLine("dodawanie_elementu 3 - Program");
Console.WriteLine("--------------------------------");
string[] newItems = new string[items.Length + 1];
for (int a = 0; a < items.Length; a++)
    newItems[a] = items[a];
newItems[newItems.Length - 1] = "nowy";
foreach (string item in newItems)
{ 
    Console.WriteLine(item); 
}

// 4. Usuwanie_elementu
Console.WriteLine("\n--------------------------------");
Console.WriteLine("usuwanie_elementu - Program");
Console.WriteLine("--------------------------------");
var listka = items.ToList();
listka.Remove("jabłko");
var tablicaPoUsunieciu = listka.ToArray();
foreach (var item in tablicaPoUsunieciu)
{
    Console.WriteLine(item);
}

// 4. Usuwanie_elementu - alternatywa
Console.WriteLine("\n--------------------------------");
Console.WriteLine("usuwanie_elementu alternatywa - Program");
Console.WriteLine("--------------------------------");
string doUsuniecia = "banan";
int index = Array.IndexOf(items, doUsuniecia);
if (index == -1)
{
    Console.WriteLine("Nie znaleziono elementu");
    return;
}
string[] noweItemy = new string[items.Length - 1];
int b = 0;

// 5. Zmiana_elementu
Console.WriteLine("\n--------------------------------");
Console.WriteLine("zmiana_elementu - Program");
Console.WriteLine("--------------------------------");
items[0] = "Smartfon OPPO Reno15 Pro 5G";
foreach (var item in items)
{
    Console.WriteLine(item);
}

// 6. Sortowanie_tablicy
Console.WriteLine("\n--------------------------------");
Console.WriteLine("sortowanie_tablicy - Program");
Console.WriteLine("--------------------------------");
Array.Sort(items);
foreach (var item in items)
{
    Console.WriteLine(item);
}

// 7. Liczenie_elementow (Pętla)
Console.WriteLine("\n--------------------------------");
Console.WriteLine("liczenie_elementow - Program");
Console.WriteLine("--------------------------------");
string szukany = items[0];
int licznik = 0;
foreach (var item in items)
{
    if (item == szukany) licznik++;
}
Console.WriteLine($"Element {szukany} występuje w liście {licznik} razy.");

// Liczenie_elementow - 2 wersja (LINQ)
Console.WriteLine("\n--------------------------------");
Console.WriteLine("liczenie_elementow 2 - Program");
Console.WriteLine("--------------------------------");
string elementDoLiczenia = items[0];
int count = items.Count(y => y == elementDoLiczenia);
Console.WriteLine($"Element {elementDoLiczenia} występuje w liście {count} razy.");

// 8. Czy_jest_w_tablicy
Console.WriteLine("\n--------------------------------");
Console.WriteLine("czy_jest_w_tablicy - Program");
Console.WriteLine("--------------------------------");
string podanyelement = "banan";
bool czyIstnieje = items.Contains(podanyelement);
Console.WriteLine($"Czy element {podanyelement} występuje w liście? {czyIstnieje}");

// 9. Laczenie_tablic
Console.WriteLine("\n--------------------------------");
Console.WriteLine("laczenie_tablic - Program");
Console.WriteLine("--------------------------------");
string[] osoby = { "Dominik", "Maks", "Szymon" };
string[] laczona = [.. osoby, .. items];
foreach (var item in laczona)
{
    Console.WriteLine(item);
}

// 10. Kopiowanie_tablicy
Console.WriteLine("\n--------------------------------");
Console.WriteLine("kopiowanie_tablicy - Program");
Console.WriteLine("--------------------------------");
string[] nowalista = [.. items];
nowalista[0] = "Zmieniony tekst";
Console.WriteLine($"Oryginał [0]: {items[0]}");
Console.WriteLine($"Kopia [0]: {nowalista[0]}");

// 11. Losowanie_z_tablicy
Console.WriteLine("\n--------------------------------");
Console.WriteLine("losowanie_tablicy - Program");
Console.WriteLine("--------------------------------");
var random = new Random();
int index = random.Next(0, items.Length);
Console.WriteLine($"Wylosowano: {items[index]}");