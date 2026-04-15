from cezar_sam import szyfr_cezara

def test_podstawowe():
    assert szyfr_cezara("abc",3) == "def"

def test_zawijanie():
    assert szyfr_cezara("xyz",3) == "abc"

def test_odszyfrowanie():
    assert szyfr_cezara("def", -3) == "abc"

def test_klucz_wiekszy_niz_dlugosc_alfabetu():
    assert szyfr_cezara("abc",29) == "def"

def test_spacja_w_tekscie():
    assert szyfr_cezara("ab cd",2) == "cd ef"