import pytest
from kalkulator import dodawanie, odejmowanie, mnozenie, dzielenie

def test_dodawanie():
    assert dodawanie(2,3) == 5
    assert dodawanie(-1,1) == 0
    assert dodawanie(0,0) == 0

def test_dzielenie():
    with pytest.raises(ValueError, match="Cannot divide by zero"):
        dzielenie(10,0)
    assert dzielenie(10,2) == 5.0
    assert dzielenie(-10,2) == -5.0
def test_odejmowanie():
    assert odejmowanie(5,3) == 2
    assert odejmowanie(-1,1) == -2
    assert odejmowanie(5,5) == 5
def test_mnozenie():
    assert mnozenie(2,3) == 6
    assert mnozenie(-1,1) == -1
    assert mnozenie(5,0) == 0

if __name__ == "__main__":
    pytest.main()