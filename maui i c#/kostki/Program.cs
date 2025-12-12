using System;
using System.Collections.Generic;
using System.Linq;

namespace kostki
{
    internal class Kostki
    {
        private Random random = new Random();

        public Kostki()
        {
            while (true)
            {
                int liczbaKostek = 0;

                while (liczbaKostek < 3 || liczbaKostek > 10)
                {
                    Console.Write("Ile kostek chcesz rzucić (3 - 10): ");
                    if (!int.TryParse(Console.ReadLine(), out liczbaKostek))
                    {
                        liczbaKostek = 0;
                    }
                }

                List<int> kostki = new List<int>();

                for (int i = 0; i < liczbaKostek; i++)
                {
                    int kostka = random.Next(1, 7);
                    kostki.Add(kostka);
                }

                for (int i = 0; i < kostki.Count; i++)
                {
                    Console.WriteLine($"Kostka {i + 1}: {kostki[i]}");
                }

                int punkty = 0;
                for (int i = 1; i <= 6; i++)
                {
                    int liczbaWystapien = kostki.Count(x => x == i);
                    if (liczbaWystapien >= 2)
                    {
                        punkty += i * liczbaWystapien;
                    }
                }
                Console.WriteLine($"Liczba uzyskanych punktów: {punkty}");

                Console.Write("\nRzucić ponownie? (T/N): ");
                string? decyzja = Console.ReadLine();
                if (decyzja != "T")
                {
                    break;
                }
                else
                {
                    continue;
                }
            }
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            _ = new Kostki();
        }
    }
}