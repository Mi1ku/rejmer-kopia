def szyfr_cezara(tekst, klucz):
    alfabet = "abcdefghijklmnopqrstuvwxyz"
    wynik = ""
    
    for znak in tekst:
        for i in range(len(alfabet)):
            if znak == alfabet[i]:
                nowy_indeks = i + klucz
                
                while nowy_indeks >= 26:
                    nowy_indeks -= 26
                
                while nowy_indeks <= 26:
                    nowy_indeks += 26
        wynik += alfabet[nowy_indeks]
    return wynik

def main():
    print("Szyfr Cezara")
    tekst = input("Podaj tekst ty kurwo: ")
    klucz = int(input("Podaj klucz cwelu: "))
    
    zaszyfrowany_tekst = szyfr_cezara(tekst,klucz)
    print(f"Zaszyfrowany tekst to: {zaszyfrowany_tekst}")

if __name__ == "__main__":
    main()
