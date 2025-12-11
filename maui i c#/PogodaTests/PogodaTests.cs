using Microsoft.VisualStudio.TestTools.UnitTesting;
using PogodaApp;

[TestClass]
public class PogodaTests
{
    [TestMethod]
    public void Sprawdz_ZwracaCieplo()
    {
        var p = new Pogoda();
        Assert.AreEqual("ciepło", p.Sprawdz(25));
    }

    [TestMethod]
    public void Sprawdz_ZwracaZimno()
    {
        var p = new Pogoda();
        Assert.AreEqual("zimno", p.Sprawdz(10));
    }
}
