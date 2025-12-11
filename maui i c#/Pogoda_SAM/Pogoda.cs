namespace PogodaApp
{
    public class Pogoda
    {
        public string Sprawdz(int temperatura)
        {
            return temperatura >= 20 ? "ciepło" : "zimno";
        }
    }
}
