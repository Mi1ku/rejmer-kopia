litery = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
zaszyfrowane_litery = []

def szyfr_cezara(tekst, klucz):
    for litera in tekst:
        if litera in litery:
            index = litery.index(litera)
            zaszyfrowany_index = (index + klucz) % klucz 
            zaszyfrowane_litery.append(litery[zaszyfrowany_index])
        else:
            zaszyfrowane_litery.append(litera)
    return "".join(zaszyfrowane_litery)

tekst = input("Podaj tekst do zaszyfrowania: ")
klucz = int(input("Podaj klucz: "))
