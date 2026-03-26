using szyfr_cezara;

namespace cezar_test
{
    [TestClass]
    public sealed class TestySzyfruCezara
    {
        [TestMethod]
        public void DanePodstawowe()
        {
            string wejscie = "abc";
            int klucz = 3;
            string oczekiwane = "def";
            string wynik = Program.SzyfrCezara(wejscie, klucz);
            Assert.AreEqual(oczekiwane, wynik);
        }
        [TestMethod]
        public void Zawijanie()
        {
            string wejscie = "xyz";
            int klucz = 3;
            string oczekiwane = "abc";
            string wynik = Program.SzyfrCezara(wejscie, klucz);
            Assert.AreEqual(oczekiwane, wynik);
        }
        [TestMethod]
        public void Odszyfrowanie()
        {
            string wejscie = "def";
            int klucz = -3;
            string oczekiwane = "abc";
            string wynik = Program.SzyfrCezara(wejscie, klucz);
            Assert.AreEqual(oczekiwane, wynik);
        }
        [TestMethod]
        public void Klucz_wiekszy_niz_dlugosc_alfabetu()
        {
            string wejscie = "abc";
            int klucz = 29;
            string oczekiwane = "def";
            string wynik = Program.SzyfrCezara(wejscie, klucz);
            Assert.AreEqual(oczekiwane, wynik);
        }
        [TestMethod]
        public void Spacja_w_tekscie()
        {
            string wejscie = "ab cd";
            int klucz = 2;
            string oczekiwane = "cd ef";
            string wynik = Program.SzyfrCezara(wejscie, klucz);
            Assert.AreEqual(oczekiwane , wynik);
        }
    }
}