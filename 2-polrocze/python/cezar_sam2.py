def szyfr_cezara(tekst, klucz):
    alfabet = "abcdefghijklmnopqrstuvwxyz"
    wynik = ""
    klucz = klucz % 26

    for znak in tekst:
        for i in range(len(alfabet)):
            if znak == alfabet[i]:
                wynik += alfabet[(i + klucz) % 26]
                break
        else:
            wynik += znak
    
    return wynik


def main ():
    print("Szyfr cezara")
    tekst = input("Podaj tekst do zaszyfrowania: ")
    klucz = int(input("Podaj klucz: "))
    wynik = szyfr_cezara(tekst,klucz)
    print(f"Zaszyfrowany tekst: {wynik}")

if __name__ == "__main__":
    main()


