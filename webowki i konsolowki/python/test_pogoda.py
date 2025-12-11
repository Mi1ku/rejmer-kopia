from pogoda import get_weather

def test_get_weather_hot():
    assert get_weather(25) == "hot"
