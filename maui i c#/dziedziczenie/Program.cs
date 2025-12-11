using System;
using System.Runtime.InteropServices;

public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public virtual string Greeting()
    {
        return $"Cześć, nazywam się {Name}, mam {Age} lat.";
    }
}

public class Student : Person
{
    public string School { get; set; }

    public Student(string name, int age, string school) : base(name, age)
    {
        School = school;
    }

    public override string Greeting()
    {
        return $"Cześć, nazywam się {Name}, mam {Age} lat, uczę się w {School}.";
    }
}

public class Program
{
    static void Main()
    {
        Student x = new Student("Mikołaj", 18, "ZSA Sławno");
        Console.WriteLine(x.Greeting());
    }
}
