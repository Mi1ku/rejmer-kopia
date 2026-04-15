from kalkulator import dodaj, odejmij, mnoz, dziel
import pytest

def test_dodaj():
    assert dodaj(2, 3) == 5
def test_odejmij():
    assert odejmij(5, 2) == 3
def test_mnoz():
    assert mnoz(4, 3) == 12
def test_dziel():
    assert dziel(10, 2) == 5
def test_dziel_by_zero():
    with pytest.raises(ValueError, match="Cannot divide by zero"):
        dziel(10, 0)