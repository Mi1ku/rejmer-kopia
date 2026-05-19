const int n = 10;
bool[] A = new bool[n +1];
WypelnijTablice(A, n);
Console.WriteLine("Liczby pierwsze w przedziale 2..100: ");
for (int i = 2; i <= n; i++)
{
    if A[i] == true) Console.Write(i + " ");
}

static void WypelnijTablice(bool[] A, int n)
{
    for (int i =2; i < n; i++)
    {
        A[i] = true;
    }
    for (int i = 2; i <= Math.Sqrt(n); i++)
    {
        if (A[i])
        {
            for (int j = 2 * i; j <= n ; j+=i)
            {
                A[j] = false;
            }
        }
    }

}