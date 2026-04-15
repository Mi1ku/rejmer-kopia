# wiek_kategorii.py
wiek = int(input("Podaj swój wiek: "))
if wiek <= 12:
    print("Jesteś dzieckiem.")
elif 13 <= wiek <= 17:
    print("Jesteś nastolatkiem.")
elif 18 <= wiek <= 64:
    print("Jesteś dorosłym.")
else:
    print("Jesteś seniorem.")

# czy_parzysta.py
liczba = int(input("Podaj liczbę: "))
if liczba % 2 == 0:
    print("Liczba jest parzysta.")
else:
    print("Liczba jest nieparzysta.")

# ocena_student.py
wynik = int(input("Podaj wynik testu (0-100): "))
if 90 <= wynik <= 100:
    print("Ocena: A")
elif 80 <= wynik <= 89:
    print("Ocena: B")
elif 70 <= wynik <= 79:
    print("Ocena: C")
elif 60 <= wynik <= 69:
    print("Ocena: D")
else:
    print("Ocena: F")

# czy_pierwsza.py
liczba_p = int(input("Podaj liczbę do sprawdzenia czy jest pierwsza: "))
if liczba_p < 2:
    print("Liczba nie jest pierwsza.")
else:
    czy_pierwsza = True
    for i in range(2, int(liczba_p**0.5) + 1):
        if liczba_p % i == 0:
            czy_pierwsza = False
            break
    if czy_pierwsza:
        print("Liczba jest pierwsza.")
    else:
        print("Liczba nie jest pierwsza.")

# zakres_liczb.py
liczba_z = int(input("Podaj liczbę: "))
if 10 <= liczba_z <= 20:
    print("Liczba w zakresie.")
else:
    print("Liczba poza zakresem.")

# najwieksza_z_trzech.py
a = int(input("Podaj pierwszą liczbę: "))
b = int(input("Podaj drugą liczbę: "))
c = int(input("Podaj trzecią liczbę: "))
najwieksza = max(a, b, c)
print(f"Największa liczba to: {najwieksza}")

# czy_rok_przestepny.py
rok = int(input("Podaj rok: "))
if (rok % 4 == 0 and rok % 100 != 0) or (rok % 400 == 0):
    print("Rok jest przestępny.")
else:
    print("Rok nie jest przestępny.")

# haslo_dostepu.py
haslo = input("Podaj hasło: ")
if haslo == "python123":
    print("Dostęp przyznany.")
else:
    print("Dostęp zabroniony.")

# czy_trojkat.py
side1 = float(input("Podaj długość boku a: "))
side2 = float(input("Podaj długość boku b: "))
side3 = float(input("Podaj długość boku c: "))
if side1 + side2 > side3 and side1 + side3 > side2 and side2 + side3 > side1:
    print("Można zbudować trójkąt.")
else:
    print("Nie można zbudować trójkąta.")

# cena_biletu.py
wiek_biletu = int(input("Podaj swój wiek dla ceny biletu: "))
if wiek_biletu <= 12:
    print("Cena biletu: 10 zł")
elif 13 <= wiek_biletu <= 17:
    print("Cena biletu: 15 zł")
elif 18 <= wiek_biletu <= 64:
    print("Cena biletu: 20 zł")
else:
    print("Cena biletu: 12 zł")

# kalkulator.py
num1 = float(input("Podaj pierwszą liczbę: "))
num2 = float(input("Podaj drugą liczbę: "))
operacja = input("Wybierz operację (+, -, *, /): ")
if operacja == "+":
    print(f"Wynik: {num1 + num2}")
elif operacja == "-":
    print(f"Wynik: {num1 - num2}")
elif operacja == "*":
    print(f"Wynik: {num1 * num2}")
elif operacja == "/":
    if num2 != 0:
        print(f"Wynik: {num1 / num2}")
    else:
        print("Błąd: Dzielenie przez zero!")
else:
    print("Niepoprawna operacja.")
