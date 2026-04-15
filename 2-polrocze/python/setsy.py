# Ćwiczenie: Utworzenie zbioru i wyświetlenie elementów
# Plik: utworz_zbior.py
zbior_wartosci = {1, 3, 5, 7, 9}
print(f"Zbiór: {zbior_wartosci}")

# Ćwiczenie: Dodanie nowych elementów
# Plik: dodaj_elementy.py
zbior_wartosci.add(11)
zbior_wartosci.add(13)
print(f"Po dodaniu 11 i 13: {zbior_wartosci}")

# Ćwiczenie: Usunięcie wartości
# Plik: usun_element.py
zbior_wartosci.remove(7)
print(f"Po usunięciu 7: {zbior_wartosci}")

# Ćwiczenie: Przecięcie dwóch zbiorów
# Plik: przeciecie_zbiorow.py
zbior_a = {1, 3, 5, 7, 9}
zbior_b = {5, 7, 9, 11, 13}
przeciecie = zbior_a.intersection(zbior_b)
print(f"Przecięcie zbiorów a i b: {przeciecie}")

# Ćwiczenie: Suma dwóch zbiorów
# Plik: suma_zbiorow.py
zbior_a2 = {1, 3, 5}
zbior_b2 = {7, 9, 11}
suma = zbior_a2.union(zbior_b2)
print(f"Suma zbiorów: {suma}")

# Ćwiczenie: Różnica między zbiorami
# Plik: roznica_zbiorow.py
zbior_a3 = {1, 3, 5, 7, 9}
zbior_b3 = {5, 7}
roznica = zbior_a3.difference(zbior_b3)
print(f"Różnica (a - b): {roznica}")

# Ćwiczenie: Różnica symetryczna
# Plik: roznica_symetryczna.py
zbior_a4 = {1, 3, 5, 7}
zbior_b4 = {5, 7, 9, 11}
roznica_sym = zbior_a4.symmetric_difference(zbior_b4)
print(f"Różnica symetryczna: {roznica_sym}")

# Ćwiczenie: Sprawdzenie relacji między zbiorami
# Plik: czy_podzbior.py
zbior_a5 = {1, 3, 5}
zbior_b5 = {1, 3, 5, 7, 9}
print(f"Czy a jest podzbiorem b? {zbior_a5.issubset(zbior_b5)}")
print(f"Czy b zawiera wszystkie elementy a? {zbior_b5.issuperset(zbior_a5)}")

# Ćwiczenie: Czyszczenie zbioru
# Plik: wyczysc_zbior.py
zbior_do_czyszczenia = {1, 3, 5, 7, 9}
zbior_do_czyszczenia.clear()
print(f"Zbiór po wyczyszczeniu: {zbior_do_czyszczenia}")
