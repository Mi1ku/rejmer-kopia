// Lista z owocami
List<string> items = new List<string>
{
    "jabłko", "banan", "pomarańcza",
    "gruszka", "marchewka", "pomidor",
    "cytryna", "borówka", "czereśnia",
    "śliwka"
};

// wyswietlanie_listy 
Console.WriteLine("--------------------------------");
Console.WriteLine("Wyswietlanie_listy - Program");
Console.WriteLine("--------------------------------");
foreach (string owoc in items)
{
    Console.WriteLine($"{owoc}");
}
// pierwszy_i_ostatni
Console.WriteLine("--------------------------------");
Console.WriteLine("pierwszy_i_ostatni - Program");
Console.WriteLine("--------------------------------");
Console.WriteLine($"Pierwszy element listy to: {items[0]}");
Console.WriteLine($"Ostatni element listy to: {items[items.Count - 1]}");

// dodawanie_elementu
Console.WriteLine("--------------------------------");
Console.WriteLine("dodawanie_elementu - Program");
Console.WriteLine("--------------------------------");
items.Add("Korotusz");
foreach (string owoc in items)
{
    Console.WriteLine($"{owoc}");
}

// usuwanie_elementu
Console.WriteLine("--------------------------------");
Console.WriteLine("usuwanie_elementu - Program");
Console.WriteLine("--------------------------------");
items.Remove("Korotusz");
foreach (string owoc in items)
{
    Console.WriteLine($"{owoc}");
}

// zmiana_elementu
Console.WriteLine("--------------------------------");
Console.WriteLine("zmiana_elementu - Program");
Console.WriteLine("--------------------------------");
items[0] = "Gej";
foreach (string owoc in items)
{
    Console.WriteLine($"{owoc}");
}

// sortowanie_listy
Console.WriteLine("--------------------------------");
Console.WriteLine("sortowanie_listy - Program");
Console.WriteLine("--------------------------------");
items.Sort();
foreach (string owoc in items)
{
    Console.WriteLine($"{owoc}");
}
// liczenie_elementow
Console.WriteLine("--------------------------------");
Console.WriteLine("liczenie_elementow - Program");
Console.WriteLine("--------------------------------");
string szukany = "śliwka";
int ilosc = 0;
foreach (var owoc in items)
{
    if (owoc == szukany) ilosc++;
}
Console.WriteLine($"{szukany} występuje {ilosc} razy");
// czy_jest_na_liscie
Console.WriteLine("--------------------------------");
Console.WriteLine("czy_jest_na_liscie - Program");
Console.WriteLine("--------------------------------");
string szukane = "jabłko";

if (items.Contains(szukane))
{
    Console.WriteLine($"{szukane} znajduje się na liście");
}
// laczenie_list
Console.WriteLine("--------------------------------");
Console.WriteLine("laczenie_list - Program");
Console.WriteLine("--------------------------------");
List<string> systemy = ["Windows", "Linux", "MacOS"];
List<string> laczona = [.. systemy, .. items];

foreach (var el in laczona)
{
    Console.Write(el + " ");
}
// kopiowanie_listy
Console.WriteLine("--------------------------------");
Console.WriteLine("kopiowanie_listy - Program");
Console.WriteLine("--------------------------------");
List<string> nowa = [.. items];
nowa[0] = "Cwaniaczek";
Console.WriteLine("<- Lista items ->");
foreach (string owoc in items)
{
    Console.WriteLine(owoc + " ");
}
Console.WriteLine("---------------------------------");
Console.WriteLine("<- Lista nowa ->");
foreach (string nowy  in nowa)
{
    Console.WriteLine(nowy + " ");
}
// Losowy element z listy
Console.WriteLine("--------------------------------");
Console.WriteLine("losowanie_listy - Program");
Console.WriteLine("--------------------------------");
var random =  new Random();
var losowy = random.NextInt64(0, items.Count);
var nok = (int) losowy;
Console.WriteLine($"{items[nok]}");