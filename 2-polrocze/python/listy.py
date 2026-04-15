import random

items = ["jabłko", "banan", "pomarańcza", "gruszka", "marchewka", "pomidor", "cytryna", "borówka", "czereśnia", "śliwka"]

# Ćwiczenie 1: Wyświetlanie listy
# Nazwa pliku: wyswietlanie_listy.py
print("-" * 20)
print("Pełna lista:")
print(items)

# Ćwiczenie 2: Dostęp do elementów listy
# Nazwa pliku: pierwszy_i_ostatni.py
print("-" * 20)
print(f"Pierwszy element: {items[0]}")
print(f"Ostatni element: {items[-1]}")

# Ćwiczenie 3: Dodawanie elementów
# Nazwa pliku: dodawanie_elementu.py
print("-" * 20)
items.append("truskawka")
print("Po dodaniu elementu:")
print(items)

# Ćwiczenie 4: Usuwanie elementów
# Nazwa pliku: usuwanie_elementu.py
print("-" * 20)
items.remove("banan")
print("Po usunięciu banana:")
print(items)

# Ćwiczenie 5: Zmiana elementów
# Nazwa pliku: zmiana_elementu.py
print("-" * 20)
items[0] = "malina"
print("Po zmianie pierwszego elementu na malinę:")
print(items)

# Ćwiczenie 6: Sortowanie listy
# Nazwa pliku: sortowanie_listy.py
print("-" * 20)
items.sort()
print("Po posortowaniu:")
print(items)

# Ćwiczenie 7: Liczenie elementów
# Nazwa pliku: liczenie_elementow.py
print("-" * 20)
print(f"Liczba wystąpień 'jabłko': {items.count('jabłko')}")

# Ćwiczenie 8: Sprawdzenie obecności elementu
# Nazwa pliku: czy_jest_na_liscie.py
print("-" * 20)
if "pomidor" in items:
    print("Pomidor jest na liście.")
else:
    print("Pomidora nie ma na liście.")

# Ćwiczenie 9: Łączenie list
# Nazwa pliku: laczenie_list.py
print("-" * 20)
nowa_lista = ["kiwi", "ananas"]
polaczona = items + nowa_lista
print("Po połączeniu z nową listą:")
print(polaczona)

# Ćwiczenie 10: Kopiowanie listy
# Nazwa pliku: kopiowanie_listy.py
print("-" * 20)
kopia = items.copy()
kopia[0] = "test-kopii"
print(f"Oryginał (pierwsze 3): {items[:3]}")
print(f"Kopia (pierwsze 3): {kopia[:3]}")

# Ćwiczenie 11: Losowy element z listy
# Nazwa pliku: losowanie_listy.py
print("-" * 20)
random_item = random.choice(items)
print(f"Losowy element: {random_item}")
