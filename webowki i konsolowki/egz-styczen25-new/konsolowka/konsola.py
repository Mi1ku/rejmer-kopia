"""
nazwa Klasy: Klasa
opis klasy: Reprezentuje tablicę liczb całkowitych o określonym rozmiarze.

nazwa metody: __init__
opis metody: konstruktor klasy
parametry: rozmiar
zwracany typ i opis: brak

nazwa metody: Wyswietl
opis metody: wyświetla elementy tablicy wraz z ich indeksami
parametry: brak
zwracany typ i opis: brak

nazwa metody: Nieparzyste
opis metody: wyświetla elementy tablicy o nieparzystych indeksach
parametry: brak
zwracany typ i opis: lista indeksów

nazwa metody: Srednia
opis metody: wyświetla średnią wszystkich elementów tablicy
parametry: brak
zwracany typ i opis: średnia

nazwa metody: Wyszukaj
opis metody: zwraca indeks znalezionej liczby, natomiast jesli nie zostala znaleziona zwraca -1
parametry: int liczba
zwracany typ i opis: indeks lub -1

autor: Mikołaj Kuś
"""
import random 

class Klasa:
    def __init__(self, rozmiar):
        self.__liczba_elementow = int(rozmiar)
        self.__tab = []
        for i in range(self.__liczba_elementow):
            self.__tab.append(random.randint(1, 1000))
    def Wyswietl(self):
        for indeks, wartosc in enumerate(self.__tab):
            print(f"{indeks}: {wartosc}")
    def Nieparzyste(self):
        print("Liczby nieparzyste:")
        nieparzyste = []
        for indeks, wartosc in enumerate(self.__tab):
            if wartosc % 2 != 0:
                nieparzyste.append(indeks)
                print(f"{wartosc}")
        return nieparzyste
    def Srednia(self):
        suma = 0
        for wartosc in self.__tab:
            suma += wartosc
        return round(suma / self.__liczba_elementow)
    def Wyszukaj(self, liczba):
        for indeks, liczba in enumerate (self.__tab):
            if indeks == liczba:
                return indeks
        return -1


if __name__ == "__main__":
    obiekt = Klasa(20)
    obiekt.Wyswietl()
    print(f"Razem nieparzystych: {len(obiekt.Nieparzyste())}")
    print(f"Średnia wszystkich elementów: {obiekt.Srednia()}")
    print(f"Znaleziono szulaną wartość na indeksie: {obiekt.Wyszukaj(10)}")
