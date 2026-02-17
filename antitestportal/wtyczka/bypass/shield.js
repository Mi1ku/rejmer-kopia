(function () {
    console.log("[Shield] Inicjalizacja połączenia z procesem tła...");

    // Pytamy background.js o kod silnika (Bypass CORS)
    chrome.runtime.sendMessage({ type: "FETCH_ENGINE" }, (response) => {
        if (chrome.runtime.lastError) {
            console.error("[Shield] Błąd komunikacji z tłem:", chrome.runtime.lastError);
            return;
        }

        if (response && response.success) {
            console.log("%c [Shield] Silnik pobrany bezpiecznie przez Service Worker. ", "color: #22c55e; font-weight: bold;");

            // Wstrzykujemy kod do MAIN world
            const script = document.createElement('script');
            script.textContent = response.code;
            (document.head || document.documentElement).appendChild(script);
            script.remove();
        } else {
            console.error("[Shield Error] Nie udało się pobrać silnika z tła:", response ? response.error : "Brak odpowiedzi");
        }
    });

    // Dodatkowa blokada jeśli strona błędu mignie
    if (window.location.href.includes('DspUnsupportedBrowserPlugins.html')) {
        window.history.back();
    }
})();