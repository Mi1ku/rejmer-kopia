//int[,] numery =
//{
//    {1,4,2},
//    {3,6,8 }
//};
//numery[0, 0] = 5;
//numery[1, 1] = 4;
//numery[0, 2] = 11;
//int[] numerki = [2, 1, 3, 7, 6, 9];
//// Wypisanie elementów tablicy numerki
//Console.WriteLine("Elementy tablicy numerki");
//for (int i = 0; i < numerki.Length; i++)
//{
//       Console.WriteLine(numerki[i]);
//}
//// Wypisanie elementów tablicy numery foreachem
//Console.WriteLine("Elementy tablicy numery foreachem");
//foreach (int i in numery)
//{
//       Console.WriteLine(i);
//}
//// Wypisanie elementów tablicy numery forem
//Console.WriteLine("Elementy tablicy numery forem");
//for (int i = 0; i < numery.GetLength(0); i++)
//{
//       for (int j = 0; j < numery.GetLength(1); j++)
//       {
//              Console.WriteLine(numery[i, j]);
//       }
//}
int liczbaKolumn = 6;
Console.WriteLine("Podaj liczbę wierszy:");
int liczbaWierszy = int.Parse(Console.ReadLine());
int[,] tablica = new int[liczbaWierszy, liczbaKolumn];
Random rand = new Random();
Console.WriteLine("Elementy tablicy:");
for (int i = 0; i < tablica.GetLength(0); i++)
{
    for (int j = 0; j < tablica.GetLength(1); j++)
    {
        tablica[i, j] = rand.Next(1, 101);
        Console.WriteLine(tablica[i, j]);
    }
}