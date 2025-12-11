using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics.CodeAnalysis;
using Kalkulator;

[TestClass]
public class KalkulatorTests
{
    private Kalkulator kalk;

    [TestInitialize]
    public void Setup()
    {
        kalk = new Kalkulator();
    }

    [TestMethod]
    public void Dodaj_PrawidlowoSumuje()
    {
        Assert.AreEqual(5, kalk.Dodaj(2, 3));
    }

    [TestMethod]
    public void Odejmij_PrawidlowoOdejmuje()
    {
        Assert.AreEqual(1, kalk.Odejmij(3, 2));
    }

    [TestMethod]
    public void Pomnoz_PrawidlowoMnozy()
    {
        Assert.AreEqual(6, kalk.Pomnoz(2, 3));
    }

    [TestMethod]
    public void Podziel_PrawidlowoDzieli()
    {
        Assert.AreEqual(2, kalk.Podziel(6, 3));
    }

    [TestMethod]
    [ExpectedException(typeof(DivideByZeroException))]
    public void Podziel_DzielPrzezZero_RzucaWyjatek()
    {
        kalk.Podziel(5, 0);
    }
}
