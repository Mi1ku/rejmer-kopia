using kalkulator1;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Kalkulator1Tests
{
    [TestClass]
    public sealed class Kalkulator1Tests
    {
        [TestMethod]
        public void TestDodawanie()
        {
            var k = new Kalkulator1();
            Assert.AreEqual(5, k.Dodawanie(2, 3));
        }
    }
}
