# Ćwiczenie 1: Tworzenie słownika
# Nazwa pliku: tworzenie_slownika.py
osoba = {"imie": "Jan", "wiek": 25}
print(f"Słownik osoba: {osoba}")

# Ćwiczenie 2: Dodawanie klucza i wartości
# Nazwa pliku: dodawanie_klucza.py
osoba["miasto"] = "Warszawa"
print(f"Po dodaniu miasta: {osoba}")

# Ćwiczenie 3: Zmiana wartości
# Nazwa pliku: zmiana_wartosci.py
osoba["wiek"] = 30
print(f"Po zmianie wieku: {osoba}")

# Ćwiczenie 4: Usuwanie klucza
# Nazwa pliku: usuwanie_klucza.py
del osoba["miasto"]
print(f"Po usunięciu miasta: {osoba}")

# Ćwiczenie 5: Iterowanie po kluczach i wartościach
# Nazwa pliku: iterowanie_po_slowniku.py
print("-" * 20)
for klucz, wartosc in osoba.items():
    print(f"{klucz}: {wartosc}")

# Ćwiczenie 6: Sprawdzenie istnienia klucza
# Nazwa pliku: sprawdzenie_klucza.py
if "adres" in osoba:
    print("Klucz 'adres' istnieje.")
else:
    print("Klucz 'adres' nie istnieje.")

# Ćwiczenie 7: Pobieranie wartości
# Nazwa pliku: pobieranie_wartosci.py
telefon = osoba.get("telefon", "Brak informacji")
print(f"Telefon: {telefon}")

# Ćwiczenie 8: Łączenie dwóch słowników
# Nazwa pliku: laczenie_slownikow.py
dodatkowe_info = {"hobby": "bieganie"}
osoba.update(dodatkowe_info)
print(f"Po połączeniu słowników: {osoba}")

# Ćwiczenie 9: Liczba kluczy w słowniku
# Nazwa pliku: liczba_kluczy.py
print(f"Liczba kluczy w słowniku: {len(osoba)}")

# Ćwiczenie 10: Tworzenie listy słowników
# Nazwa pliku: lista_slownikow.py
ludzie = [
    {"imie": "Jan", "wiek": 30},
    {"imie": "Anna", "wiek": 22},
    {"imie": "Piotr", "wiek": 45}
]
print("-" * 20)
print("Wieki osób w liście:")
for os in ludzie:
    print(f"{os['imie']}: {os['wiek']} lat")
