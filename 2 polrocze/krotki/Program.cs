// tablica z owocami
string[] items =
{
    "jabłko", "banan", "pomarańcza",
    "gruszka", "marchewka", "pomidor",
    "cytryna", "borówka", "czereśnia",
    "śliwka", "banan"
};

// wyswietlanie_tablicy
Console.WriteLine("--------------------------------");
Console.WriteLine("Wyswietlanie_tablicy - Program");
Console.WriteLine("--------------------------------");
foreach(string owoc in items)
{
    Console.WriteLine(owoc);
}
// pierwszy_i_ostatni
Console.WriteLine("--------------------------------");
Console.WriteLine("pierwszy_i_ostatni - Program");
Console.WriteLine("--------------------------------");
Console.WriteLine($"Pierwszy element tablicy to: {items[0]}");
Console.WriteLine($"Ostatni element tablicy to: {items[^1]}");

// dodawanie_elementu
Console.WriteLine("--------------------------------");
Console.WriteLine("dodawanie_elementu - Program");
Console.WriteLine("--------------------------------");
var lista = items.ToList();
lista.Add("Korotusz");
var tablica = lista.ToArray();
foreach (var item in tablica)
{
    Console.WriteLine(item); 
}
// usuwanie_elementu
Console.WriteLine("--------------------------------");
Console.WriteLine("usuwanie_elementu - Program");
Console.WriteLine("--------------------------------");
var listka = items.ToList();
listka.Remove("jabłko");
var tablicka = listka.ToArray();
foreach (var item in tablicka)
{
    Console.WriteLine(item); 
}
// zmiana_elementu
Console.WriteLine("--------------------------------");
Console.WriteLine("zmiana_elementu - Program");
Console.WriteLine("--------------------------------");
items[0] = "Smartfon OPPO Reno15 Pro 5G 12/512GB 120Hz";
foreach  (var item in items)
{
    Console.WriteLine($"{item}");
}
// sortowanie_tablicy
Console.WriteLine("--------------------------------");
Console.WriteLine("sortowanie_tablicy - Program");
Console.WriteLine("--------------------------------");
items.Sort();
foreach  (var item in items)
{
    Console.WriteLine(item);
}
// liczenie_elementow
Console.WriteLine("--------------------------------");
Console.WriteLine("liczenie_elementow - Program");
Console.WriteLine("--------------------------------");
string danyelement = items[0];
int i = 0;
foreach (var item in items)
{
    if (item == danyelement)
    {
        i++;
    }
}
Console.WriteLine($"Element {danyelement} występuje w liście {i} razy.");
// czy_jest_w_tablicy
Console.WriteLine("--------------------------------");
Console.WriteLine("czy_jest_w_tablicy - Program");
Console.WriteLine("--------------------------------");
string podanyelement = items[9];
int x = 0;
foreach (var item in items)
{
    if (item == danyelement)
    {
        x++;
    }
}
Console.WriteLine($"Element {podanyelement} występuje w liście.");
// laczenie_tablic
Console.WriteLine("--------------------------------");
Console.WriteLine("laczenie_tablic - Program");
Console.WriteLine("--------------------------------");
string[] cwele =
{
    "Dominik Korotusz", "Maks Kowalski",
    "Mazur Szymon", "Sebastian Domaliński"
};
string[] laczona = [.. cwele, .. items];
foreach  (var item in laczona)
{
    Console.WriteLine(item); 
}
// kopiowanie_tablicy
Console.WriteLine("--------------------------------");
Console.WriteLine("kopiowanie_tablicy - Program");
Console.WriteLine("--------------------------------");
string[] nowalista = [.. items];
nowalista[0] = "kocham policje";
Console.WriteLine("<- Lista nowalista ->");
foreach  (var item in nowalista)
{
    Console.WriteLine(item); 
}
Console.WriteLine("--------------------------------");
Console.WriteLine("<- Lista items ->");
foreach (var owoc in items)
{
    Console.WriteLine(owoc);
}
// losowanie_tablicy
Console.WriteLine("--------------------------------");
Console.WriteLine("losowanie_tablicy - Program");
Console.WriteLine("--------------------------------");
var random = new Random();
var cos = random.NextInt64(0,items.Length);
var cwe = items[cos];
Console.WriteLine($"{cwe}");