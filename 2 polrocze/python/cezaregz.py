def szyfr_cezara(tekst_jawny: str, klucz: int) -> str:
    tekst_zaszyfrowany = ""
    klucz = klucz % 26

    for znak in tekst_jawny:
        if znak == " ":
            tekst_zaszyfrowany += " "
        else:
            przesuniety = ord(znak) + klucz

            if przesuniety > ord('z'):
                przesuniety -= 26

            if przesuniety < ord('a'):
                przesuniety += 26

            tekst_zaszyfrowany += chr(przesuniety)

    return tekst_zaszyfrowany

def main():
    print("Szyfr Cezara")
    tekst_jawny = input("Podaj tekst jawny: ")
    klucz = int(input("Podaj klucz (liczba całkowita): "))

    wynik = szyfr_cezara(tekst_jawny, klucz)
    print(f"Tekst zaszyfrowany: {wynik}")