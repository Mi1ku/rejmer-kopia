import random

# 1. Liczenie do 10
print("--- Zad 1: Liczenie do 10 ---")
i = 1
while i <= 10:
    print(i)
    i += 1

# 2. Suma liczb od 1 do N
print("\n--- Zad 2: Suma od 1 do N ---")
try:
    n = int(input("Podaj N: "))
    suma = 0
    licznik = 1
    while licznik <= n:
        suma += licznik
        licznik += 1
    print(f"Suma: {suma}")
except ValueError:
    print("Błędne dane!")

# 3. Zgadywanie liczby
print("\n--- Zad 3: Zgadywanie ---")
wylosowana = random.randint(1, 20)
strzal = 0
while strzal != wylosowana:
    try:
        strzal = int(input("Zgadnij (1-20): "))
        if strzal < wylosowana:
            print("Za mało!")
        elif strzal > wylosowana:
            print("Za dużo!")
    except ValueError:
        print("To nie jest liczba!")
print("Brawo!")

# 4. Liczby parzyste
print("\n--- Zad 4: Parzyste 1-20 ---")
p = 1
while p <= 20:
    if p % 2 == 0:
        print(p)
    p += 1

# 5. Konto oszczędnościowe
print("\n--- Zad 5: Oszczędzanie ---")
stan = 0
while stan < 100:
    stan += 10
    print(f"Stan konta: {stan} zł")

# 6. Liczenie cyfr
print("\n--- Zad 6: Liczenie cyfr ---")
try:
    liczba_do_cyfr = abs(int(input("Podaj liczbę: ")))
    cyfry = 0
    if liczba_do_cyfr == 0:
        cyfry = 1
    else:
        temp = liczba_do_cyfr
        while temp > 0:
            temp //= 10
            cyfry += 1
    print(f"Liczba ma cyfr: {cyfry}")
except ValueError:
    print("Błędne dane!")

# 7. Liczba kroków do zera
print("\n--- Zad 7: Do zera ---")
try:
    do_zera = int(input("Podaj liczbę startową: "))
    while do_zera >= 0:
        print(do_zera)
        do_zera -= 1
except ValueError:
    print("Błędne dane!")

# 8. Tabliczka mnożenia
print("\n--- Zad 8: Tabliczka mnożenia ---")
try:
    liczba_tab = int(input("Podaj liczbę: "))
    m = 1
    while m <= 10:
        print(f"{liczba_tab} * {m} = {liczba_tab * m}")
        m += 1
except ValueError:
    print("Błędne dane!")

# 9. Sprawdzenie hasła
print("\n--- Zad 9: Hasło ---")
haslo = ""
while haslo != "Python123":
    haslo = input("Podaj hasło: ")
print("Hasło poprawne!")

# 10. Odliczanie do startu
print("\n--- Zad 10: Odliczanie ---")
odliczanie = 10
while odliczanie >= 1:
    print(f"{odliczanie}...")
    odliczanie -= 1
print("Start!")
