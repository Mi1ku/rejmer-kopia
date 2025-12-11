class Osoba:
    def __init__(self, imie, wiek):
        self.imie = imie
        self.wiek = wiek
    def powitanie(self):
        return f"Cześć, nazywam się {self.imie}, mam {self.wiek} lat."

o = Osoba("Mikołaj",18)
print(o.powitanie())

class Student(Osoba):
    def __init__(self, imie, wiek, school):
        super().__init__(imie, wiek)
        self.school = school
    def powitanie(self):
        return f"Cześć, nazywam się {self.imie}, mam {self.wiek} lat, uczę się w {self.school}."

x = Student("Mikołaj",18,"ZSA Sławno")
print(x.powitanie())