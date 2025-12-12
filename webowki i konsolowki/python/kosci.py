import random

def Rzut_Koscmi():
    while True:
        ilosc = 0
        while ilosc < 3 or ilosc > 10:
                ilosc = int(input("Ile kostek chcesz rzucić (3 - 10): "))

        kostki = []
        for i in range(ilosc):
            kostka = random.randint(1, 6)
            kostki.append(kostka)
        
        def Zlicz_punkty(kostki):
            punkty = 0
            for kostka in kostki:
                if kostki.count(kostka) >= 2:
                    punkty += kostka * kostki.count(kostka)
            print(f"Liczba uzyskanych punktów: {punkty}")
            return punkty
            
                

        for i, wartosc in enumerate(kostki):
            print(f"Kostka {i + 1}: {wartosc}")
        Zlicz_punkty(kostki)
        
        jeszczeraz = input("Jeszcze raz? (t/n)")
        if jeszczeraz == "t":
            pass
        else:
            return

Rzut_Koscmi()