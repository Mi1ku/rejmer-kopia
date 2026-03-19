def szyfr_cezara(tekst_jawny: str, klucz: int) -> str:
    tekst_zaszyfrowany = ""
    klucz = klucz % 26

    for znak in tekst_jawny:
        if znak == " ":
            tekst_zaszyfrowany += " "
        else:
            przesuniety = ord(znak) + klucz
            if przesuniety > ord('z'):
                tekst_zaszyfrowany -= znak
            if przesuniety < ord('a'):
                tekst_zaszyfrowany += znak

        tekst_zaszyfrowany += chr(przesuniety)

    return tekst_zaszyfrowany


def main():
    print("Szyfr Cezara")
    tekst_jawny = input("Podaj tekst do zaszyfrowania: ")
    klucz = int(input("Podaj klucz: "))

    wynik = szyfr_cezara(tekst_jawny, klucz)
    print(f"Zaszyfrowany tekst: {wynik}")

if __name__ == "main":
    main()