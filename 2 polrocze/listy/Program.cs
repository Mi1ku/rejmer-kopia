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
for (int i = 0; i < items.Count; i++)
{
    if (items[i] == "Śliwka")
    {
        i++;
        Console.Write(i);
    }
}