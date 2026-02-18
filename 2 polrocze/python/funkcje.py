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
def czy_pierwsza(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    
    pierwiastek = int(math.sqrt(n))
    for i in range(3, pierwiastek + 1, 2):
        if n % i == 0:
            return False
    return True

print(f"Czy 7 jest pierwsza? {czy_pierwsza(7)}")
print(f"Czy 15 jest pierwsza? {czy_pierwsza(15)}")

# 7. odwroc_tekst
print("\n--- 7. Odwroc tekst ---")
def odwroc_tekst(tekst):
    return tekst[::-1]

print(f"Odwrotność 'python': {odwroc_tekst('python')}")

# 8. kalkulator
print("\n--- 8. Kalkulator ---")
def kalkulator(a, b, op):
    if op == "+":
        return a + b
    elif op == "-":
        return a - b
    elif op == "*":
        return a * b
    elif op == "/":
        return a / b if b != 0 else 0
    return 0

print(f"Wynik 10 / 2: {kalkulator(10, 2, '/')}")

# 9. rozdziel_slowa
print("\n--- 9. Rozdziel slowa ---")
def rozdziel_slowa(zdanie):
    return zdanie.split(' ')

slowa = rozdziel_slowa("To jest proste")
for slowo in slowa:
    print(slowo)
