using PogodaApp;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PogodaTest
{
    [TestClass]
    public class PogodaTest
    {
        [TestMethod]
        public void TestGoraco()
        {
            var p = new Pogoda();
            Assert.AreEqual("ciepło", p.Sprawdz(25));
        }
        [TestMethod]
        public void TestZimno()
        {
            var p = new Pogoda();
            Assert.AreEqual("zimno", p.Sprawdz(15));
        }
    }
}
