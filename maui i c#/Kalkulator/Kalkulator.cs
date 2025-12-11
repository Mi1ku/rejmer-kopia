namespace Kalkulator
{
    public class Kalkulator
    {
        public int Dodaj(int a, int b) => a + b;
        public int Odejmij(int a, int b) => a - b;
        public int Pomnoz(int a, int b) => a * b;
        public int Podziel(int a, int b)
        {
            if (b == 0)
                throw new DivideByZeroException();
            return a / b;
        }
    }
}
