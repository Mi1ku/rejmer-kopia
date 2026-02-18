# 1. wypisywanie_liczb
print("--- 1. Wypisywanie 1-10 ---")
for i in range(1, 11):
    print(i)

# 2. suma_liczb
print("\n--- 2. Sumowanie 1-50 ---")
suma = sum(range(1, 51))
print(f"Wynik: {suma}")

# 3. iloczyn_liczb
print("\n--- 3. Mnożenie 1-5 ---")
iloczyn = 1
for i in range(1, 6):
    iloczyn *= i
print(f"Wynik: {iloczyn}")

# 4. wypisywanie_znakow
print("\n--- 4. Wypisywanie znaków ---")
tekst = input("Podaj tekst: ")
for znak in tekst:
    print(znak)

# 5. odwrotna_petla
print("\n--- 5. Odwrócona pętla ---")
for i in range(20, 0, -1):
    print(i)

# 6. liczby_parzyste
print("\n--- 6. Liczby parzyste 1-50 ---")
for i in range(2, 51, 2):
    print(i)

# 7. tabliczka_mnozenia
print("\n--- 7. Tabliczka mnożenia ---")
for i in range(1, 11):
    for j in range(1, 11):
        print(f"{i * j}", end="\t")
    print()

# 8. odwrocony_tekst
print("\n--- 8. Odwrócony tekst ---")
doOdwrocenia = input("Wpisz tekst: ")
print(f"Wynik: {doOdwrocenia[::-1]}")

# 9. filtracja_listy
print("\n--- 9. Filtracja listy ---")
liczby = [5, 12, 7, 20, 3, 11, 9]
for liczba in liczby:
    if liczba > 10:
        print(liczba)

# 10. najwieksza_liczba
print("\n--- 10. Znajdowanie największej liczby ---")
lista_input = input("Podaj liczby oddzielone spacją: ")
moje_liczby = [int(x) for x in lista_input.split()]
if moje_liczby:
    najwieksza = moje_liczby[0]
    for l in moje_liczby:
        if l > najwieksza:
            najwieksza = l
    print(f"Największa liczba to: {najwieksza}")
else:
    print("Lista jest pusta.")
