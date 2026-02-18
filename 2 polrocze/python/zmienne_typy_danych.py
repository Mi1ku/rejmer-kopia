# Ćwiczenia na zmienne

# wiek_imie.py – Utwórz zmienne reprezentujące swój wiek oraz imię.
wiek = 20
imie = "Jan"
print(f"Mam {wiek} lat i nazywam się {imie}.")

# operacje_na_liczbach.py – Stwórz dwie zmienne z wartościami liczbowymi.
a = 10
b = 5
print(f"Dodawanie: {a + b}")
print(f"Odejmowanie: {a - b}")
print(f"Mnożenie: {a * b}")
print(f"Dzielenie: {a / b}")

# modyfikacja_zmiennej.py – Zainicjuj zmienną liczbą całkowitą.
x = 10
x += 5
x -= 3
x *= 2
print(f"Wynik modyfikacji zmiennej: {x}")

# czy_pada.py – Utwórz zmienną o wartości logicznej.
czy_pada = True
if czy_pada:
    print("Weź parasol, pada deszcz!")
else:
    print("Nie pada, możesz iść bez parasola.")

# konwersja_jednostek.py – Zdefiniuj zmienną z wartością w metrach.
metry = 5
centymetry = metry * 100
print(f"{metry} metrów to {centymetry} centymetrów.")

# Ćwiczenia na operacje na stringach

# powitanie.py – Stwórz dwie zmienne z wyrażeniem powitania oraz swoim imieniem.
powitanie = "Witaj"
moje_imie = "Anna"
pelne_powitanie = powitanie + " " + moje_imie
print(pelne_powitanie)

# wielkosc_liter.py – Utwórz zmienną z tekstem.
tekst = "Programowanie w Pythonie"
print(tekst.upper())
print(tekst.lower())

# miasto_litery.py – Przypisz nazwę dowolnego miasta do zmiennej.
miasto = "Warszawa"
print(f"Pierwsze trzy litery: {miasto[:3]}")
print(f"Ostatnie trzy litery: {miasto[-3:]}")

# sprawdzenie_slowa.py – Stwórz zdanie zawierające kilka słów.
zdanie = "Python jest niesamowitym językiem"
szukane_slowo = "niesamowitym"
if szukane_slowo in zdanie:
    print(f"Słowo '{szukane_slowo}' znajduje się w zdaniu.")
else:
    print(f"Słowo '{szukane_slowo}' nie znajduje się w zdaniu.")

# zamiana_slow.py – Utwórz zdanie, a następnie zmień w nim jedno z użytych słów na inne.
zdanie2 = "Lubię jeść jabłka"
nowe_zdanie = zdanie2.replace("jabłka", "banany")
print(nowe_zdanie)

# Ćwiczenia (Inne)

# dlugosc_tekstu.py – Stwórz zmienną z tekstem zawierającym dowolne zdanie.
tekst_dlugosc = "To jest przykładowe zdanie."
print(f"Długość tekstu: {len(tekst_dlugosc)}")

# dlugosc_cyfry.py – Przypisz do zmiennej długi ciąg cyfr zapisanych jako tekst.
cyfry_tekst = "123456789012345"
print(f"Długość ciągu cyfr: {len(cyfry_tekst)}")

# typy_danych.py – Utwórz trzy różne zmienne – int, float, str.
zmienna_int = 100
zmienna_float = 12.5
zmienna_str = "Python"
print(f"Typ zmienna_int: {type(zmienna_int)}")
print(f"Typ zmienna_float: {type(zmienna_float)}")
print(f"Typ zmienna_str: {type(zmienna_str)}")

# rzutowanie.py – Zainicjuj zmienną liczbą, a następnie przekształć ją na tekst.
liczba_do_rzutu = 42
liczba_jako_tekst = str(liczba_do_rzutu)
print(f"Po konwersji: {liczba_jako_tekst}, Typ: {type(liczba_jako_tekst)}")

# typ_i_dlugosc.py – Utwórz zmienną z tekstem lub liczbą.
zmienna_test = "Kolejny tekst"
print(f"Typ: {type(zmienna_test)}")
if isinstance(zmienna_test, (str, list, tuple, dict, set)):
    print(f"Długość: {len(zmienna_test)}")
else:
    print("Dla tego typu nie można obliczyć długości.")
