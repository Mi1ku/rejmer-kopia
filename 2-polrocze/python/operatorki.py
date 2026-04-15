# Operatory arytmetyczne

# Oblicz pole prostokąta
dlugosc = 5
szerokosc = 10
pole = dlugosc * szerokosc
print(f"Pole prostokąta: {pole}")

# Średnia liczb
l1 = 10
l2 = 20
l3 = 30
srednia = (l1 + l2 + l3) / 3
print(f"Średnia liczb: {srednia}")

# Reszta z dzielenia
liczba_a = 10
liczba_b = 3
reszta = liczba_a % liczba_b
print(f"Reszta z dzielenia {liczba_a} przez {liczba_b} wynosi {reszta}")

# Operatory przypisania

# Zwiększanie wartości
zmienna = 10
zmienna += 5
print(f"Wartość po zwiększeniu: {zmienna}")

# Zmiana wartości przez mnożenie
zmienna_m = 4
zmienna_m *= 3
print(f"Wartość po pomnożeniu: {zmienna_m}")

# Potęgowanie
podstawa = 2
podstawa **= 3
print(f"2 do potęgi 3 wynosi: {podstawa}")

# Operatory porównania

# Porównanie wieku
wiek1 = 25
wiek2 = 18
print(f"Czy wieki są równe? {wiek1 == wiek2}")
print(f"Czy pierwszy wiek jest większy? {wiek1 > wiek2}")

# Przedział wartości liczby
liczba_test = 15
czy_w_przedziale = 10 <= liczba_test <= 20
print(f"Czy {liczba_test} mieści się w przedziale [10, 20]? {czy_w_przedziale}")

# Operatory logiczne

# Czy liczba jest podzielna?
liczba_p = 12
podzielna_2_i_3 = (liczba_p % 2 == 0) and (liczba_p % 3 == 0)
print(f"Czy {liczba_p} dzieli się przez 2 i 3? {podzielna_2_i_3}")

# Negacja warunku
pada_deszcz = False
print(f"Brak opadów: {not pada_deszcz}")
