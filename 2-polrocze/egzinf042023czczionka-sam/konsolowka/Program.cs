namespace konsolowka
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] tablicaLiczb = new int[100];
            Random rnd = new Random();
            for (int i = 0; i < tablicaLiczb.Length; i++)
            {
                tablicaLiczb[i] = rnd.Next(1, 1001);
            }
            Console.WriteLine("<------------------------------------->");
            Console.WriteLine("          Posortowana tablica          ");
            Console.WriteLine("<------------------------------------->");
            SortowanieBabelkowe(tablicaLiczb);

        }
        static void SortowanieBabelkowe(int[] tablicaLiczb)
        {
            for (int i = 0; i < tablicaLiczb.Length - 1; i++)
            {
                for (int j = 0; j < tablicaLiczb.Length - i - 1; j++)
                {
                    if (tablicaLiczb[j] > tablicaLiczb[j + 1])
                    {
                        int temp = tablicaLiczb[j];
                        tablicaLiczb[j] = tablicaLiczb[j + 1];
                        tablicaLiczb[j + 1] = temp;
                    }
                }
            }
            foreach (int i in tablicaLiczb)
            {
                Console.Write(i + " | ");
            }
        }
    }
}
