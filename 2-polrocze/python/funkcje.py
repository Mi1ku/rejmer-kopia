import math

# 1. pole_prostokata
print("--- 1. Pole prostokata ---")
def pole_prostokata(a, b):
    return a * b

print(f"Pole (5x10): {pole_prostokata(5, 10)}")

# 2. czy_parzysta
print("\n--- 2. Czy parzysta ---")
def czy_parzysta(liczba):
    return liczba % 2 == 0

print(f"Czy 4 jest parzysta? {czy_parzysta(4)}")

# 3. powitanie
print("\n--- 3. Powitanie ---")
def powitanie(imie):
    print(f"Cześć, {imie}!")

powitanie("Marek")

# 4. suma_listy
print("\n--- 4. Suma listy ---")
def suma_listy(liczby_do_sumy):
    return sum(liczby_do_sumy)

dane = [1, 2, 3, 4, 5]
print(f"Suma: {suma_listy(dane)}")

# 5. silnia
print("\n--- 5. Silnia ---")
def silnia(n):
    wynik = 1
    for i in range(1, n + 1):
        wynik *= i
    return wynik

print(f"Silnia z 5: {silnia(5)}")

# 6. czy_pierwsza
print("\n--- 6. Czy pierwsza ---")
def czy_pierwsza(liczba):
    pierwsza = True
    if liczba < 2:
        pierwsza = False
    else:
        for i in range(2, liczba):
            if liczba % i == 0:
                pierwsza = False
                break
    return pierwsza
print(f"Czy 7 jest pierwsza? {czy_pierwsza(7)}")
print(f"Czy 10 jest pierwsza? {czy_pierwsza(10)}")

# 7. odwracanie_tekstu
tekst = input("Podaj tekst do odwrócenia: ")
def odwracanie_tekstu(tekst):
    return tekst[::-1]
print(f"Odwrócony tekst: {odwracanie_tekstu(tekst)}")

# 8. kalkulator
def kalkulator(a, b, operator):
    if operator == "+":
        return a + b
    elif operator == "-":
        return a - b
    elif operator == "*":
        return a * b
    elif operator == "/":
        if b != 0:
            return a / b
        else:
            return "Nie można dzielić przez zero!"
    else:
        return "Nieznany operator!"
a = float(input("Podaj pierwszą liczbę: "))
b = float(input("Podaj drugą liczbę: "))
operator = input("Podaj operator (+, -, *, /): ")
print(f"Wynik: {kalkulator(a, b, operator)}")

# 8.1 kalkulator switch
def kalkulator_switch(a, b, operator):
    return {
        "+": a + b,
        "-": a - b,
        "*": a * b,
        "/": a / b if b != 0 else "Nie można dzielić przez zero!"
    }.get(operator, "Nieznany operator!")
print(f"Wynik (switch): {kalkulator_switch(a, b, operator)}")

# 9. rozbijanie zdań na słowa
zdanie = input("Podaj zdanie do rozbicia: ")
def rozbijanie_zdan_na_slowa(zdanie):
    return zdanie.split()
print(f"Słowa: {rozbijanie_zdan_na_slowa(zdanie)}")