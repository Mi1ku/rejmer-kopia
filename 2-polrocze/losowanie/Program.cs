using System;

class Program
{
    static int[] wystapienia = new int[50];
    static Random rand = new Random();
    static void Main()
    {
        Console.WriteLine("Ile wygenerować losowań?");
        int ile = int.Parse(Console.ReadLine());
        GenerujLosowania(ile);
        WypiszWystapienia();
    }
    static void GenerujLosowania(int ile)
    {
        for (int i = 0; i < ile; i++)
        {
            Console.Write($"Losowanie {i + 1}: ");
            for (int j = 0; j < 6; j++)
            {
                int wylosowana = rand.Next(1, 50);
                wystapienia[wylosowana]++;
                Console.Write(wylosowana + " ");
            }
            Console.WriteLine();
        }
    }
    static void WypiszWystapienia()
    {
        for (int i = 1; i < 50; i++)
        {
            Console.WriteLine($"Wystąpienia liczby {i}: {wystapienia[i]}");
        }
    }
}