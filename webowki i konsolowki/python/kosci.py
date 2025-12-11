import random

def Rzut_Koscmi():
    while True:
        ilosc = int(input("Ile kostek chcesz rzucić(3 - 10)"))
        kostki = []
        while(ilosc < 3 or ilosc > 10):
            ilosc = int(input("Ile kostek chcesz rzucić(3 - 10)"))

        for x in range(1, ilosc + 1):
            kostka = random.randint(1, 6)
            kostki.append(kostka)
        
        def Zlicz_punkty(kostki):
            punkty = 0
            for x in kostki:
                

        i = 0
        for _ in kostki:
            print(f"Kostka {i +1}: {kostki[i]}")
            i+=1
        
        jeszczeraz = input("Jeszcze raz? (t/n)")
        if jeszczeraz == "t":
            pass
        else:
            return

Rzut_Koscmi()