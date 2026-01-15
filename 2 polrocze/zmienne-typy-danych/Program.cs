// Zad 1
int wiek = 18;
string imie = "Mikołaj";
Console.WriteLine($"Mam {wiek} lat i nazywam sie {imie}");
// Zad 2
int liczba1 = 20;
int liczba2 = 2;
Console.WriteLine(liczba1 + liczba2);
Console.WriteLine(liczba1 - liczba2);
Console.WriteLine(liczba1 * liczba2);
Console.WriteLine(liczba1 / liczba2);
// Zad 3
int calk = 20;
calk += 30;
calk -= 12;
calk *= 2;
calk /= 2;
Console.WriteLine(calk);
// Zad 4
bool pada = true;
if (pada == true)
{
    Console.WriteLine("Pada deszcz");
}
else
{
    Console.WriteLine("Nie pada deszcz");
}
// Zad 5
int metry = 20;
int m_to_cm = metry * 100;
Console.WriteLine($"Wynik w centymetrach to: {m_to_cm}");
// Zad 6
string imie2 = "Mikołaj";
string powitanie = "Witaj";
Console.WriteLine($"{powitanie} {imie2}");
// Zad 7
string tekst = "mikolaj to SiGmA SkIbIDi!";
Console.WriteLine(tekst.ToLower());
Console.WriteLine(tekst.ToUpper());
// Zad 8 
string miasto = "Darłowo";
Console.WriteLine(miasto.Substring(0, miasto.Length - 4));
// Zad 9 
string zdanie = "jebać policje";
string szukane_slowo = "jebać";
if (zdanie.Contains(szukane_slowo))
{
    Console.WriteLine($"Zdanie: {zdanie}, zawiera słowo {szukane_slowo}");
}
else
{
    Console.WriteLine($"Zdanie nie zawiera szukanego slowa!");
}
// Zad 10
string zdanie2 = "kocham male kotki";
string noweZdanie = zdanie2.Replace("male", "duze");

Console.WriteLine("Po zmianie: " + noweZdanie);
// Ćw 11
string dlugitekst = "Maksa boli brzuch";
Console.WriteLine($"Ten tekst ma: {dlugitekst.Length} znaków");
// Ćw 12
string ciagcyfr = "19998271721";
Console.WriteLine(ciagcyfr.Length);
// Ćw 13
string tekst1 = "Ala ma kota";
int liczbaa1 = 2;
float liczbaa2 = 3.5f;
Console.WriteLine(tekst1.GetType());
Console.WriteLine(liczbaa1.GetType());
Console.WriteLine(liczbaa2.GetType());
// Ćw 14
int liczba5 = 20;
string liczba6 = liczba5.ToString();
Console.WriteLine(liczba6.GetType());
// Ćw 15



