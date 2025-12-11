namespace liczbypierwsze
{
    internal class Program
    {
        static void Main(string[] args)
        {
            for (var number = 2; number <= 20; number++)
            {
                Boolean check = true;
                for (var test = 2; test < number; test++)
                {
                    if (number % test == 0)
                    {
                        check = false;
                        break;
                    }
                }
                if (check)
                {
                    Console.WriteLine(number);
                }
            }
        }
    }
}