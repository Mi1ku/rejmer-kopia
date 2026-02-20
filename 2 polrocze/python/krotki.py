import random

# Krotka (tuple) jest niezmienna, więc niektóre operacje wykonujemy przez konwersję na listę lub tworzenie nowej krotki.
items = ("jabłko", "banan", "pomarańcza", "gruszka", "marchewka", "pomidor", "cytryna", "borówka", "czereśnia", "śliwka")

# Ćwiczenie 1: Wyświetlanie krotki
print("-" * 20)
print("Pełna krotka:")
print(items)

# Ćwiczenie 2: Dostęp do elementów
print("-" * 20)
print(f"Pierwszy element: {items[0]}")
print(f"Ostatni element: {items[-1]}")

# Ćwiczenie 3: Dodawanie elementów (przez połączenie)
print("-" * 20)
items = items + ("truskawka",)
print("Po dodaniu elementu (nowa krotka):")
print(items)

# Ćwiczenie 4: Usuwanie elementów (przez konwersję na listę)
print("-" * 20)
lista_temp = list(items)
lista_temp.remove("banan")
items = tuple(lista_temp)
print("Po usunięciu banana:")
print(items)

# Ćwiczenie 5: Zmiana elementów (przez konwersję na listę)
print("-" * 20)
lista_temp = list(items)
lista_temp[0] = "malina"
items = tuple(lista_temp)
print("Po zmianie pierwszego elementu na malinę:")
print(items)

# Ćwiczenie 6: Sortowanie krotki
print("-" * 20)
posortowana = tuple(sorted(items))
print("Po posortowaniu:")
print(posortowana)

# Ćwiczenie 7: Liczenie elementów
print("-" * 20)
print(f"Liczba wystąpień 'jabłko': {items.count('jabłko')}")

# Ćwiczenie 8: Sprawdzenie obecności elementu
print("-" * 20)
if "pomidor" in items:
    print("Pomidor jest w krotce.")
else:
    print("Pomidora nie ma w krotce.")

# Ćwiczenie 9: Łączenie krotek
print("-" * 20)
nowa_krotka = ("kiwi", "ananas")
polaczona = items + nowa_krotka
print("Po połączeniu z nową krotką:")
print(polaczona)

# Ćwiczenie 10: Kopiowanie krotki
print("-" * 20)
kopia = items # Krotki są niezmienne, więc proste przypisanie jest bezpieczne
print("Kopia utworzona.")

# Ćwiczenie 11: Losowy element z krotki
print("-" * 20)
random_item = random.choice(items)
print(f"Losowy element: {random_item}")
