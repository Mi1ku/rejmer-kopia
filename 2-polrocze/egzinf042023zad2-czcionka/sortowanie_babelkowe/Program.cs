using System;

namespace sortowanie_babelkowe
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] tablicaLiczb = new int[100];
            Random rnd = new Random();

            Console.WriteLine("Nieposortowana Tablica:");
            Console.Write("[ ");
            for (int i = 0; i < tablicaLiczb.Length; i++)
            {
                tablicaLiczb[i] = rnd.Next(0, 1001);
                Console.Write(tablicaLiczb[i] + " ");
            }
            Console.WriteLine("]");

            SortujBabelkowo(tablicaLiczb);

            Console.WriteLine("\nPosortowana Tablica:");
            Console.Write("[ ");
            foreach (int liczba in tablicaLiczb)
            {
                Console.Write(liczba + " ");
            }
            Console.WriteLine("]");

            Console.ReadKey();
        }

        static void SortujBabelkowo(int[] tab)
        {
            for (int a = 0; a < tab.Length - 1; a++)
            {
                for (int b = 0; b < tab.Length - 1 - a; b++)
                {
                    if (tab[b] > tab[b + 1])
                    {
                        int temp = tab[b];
                        tab[b] = tab[b + 1];
                        tab[b + 1] = temp;
                    }
                }
            }
        }
    }
}