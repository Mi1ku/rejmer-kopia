using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Calculator.Library.Tests.Math
{
    [TestClass] 
    public class CalculatorTests
    {
        [TestMethod]
        public void Add_AddsTwoNumbers_SumOfThoseNumbers()
        {
            // Arrange
            var calculator = new Calculator();

            // Act
            var result = calculator.Add(5, 10);

            // Assert
            Assert.AreEqual(15, result);
        }
    }
}