(function () {
    console.log("[Shield] Inicjalizacja połączenia z procesem tła...");

    // Pytamy background.js o kod silnika (Bypass CORS)
    chrome.runtime.sendMessage({ type: "FETCH_ENGINE" }, (response) => {
        if (chrome.runtime.lastError) {
            console.error("[Shield] Błąd komunikacji z tłem:", chrome.runtime.lastError);
            return;
        }

        if (response && response.success) {
            console.log("%c [Shield] Silnik pobrany pomyślnie. Wstrzykiwanie... ", "color: #22c55e; font-weight: bold;");

            // 🛡️ CSP BYPASS: Używamy Bloba zamiast textContent
            // To omija błąd "Executing inline script violates CSP"
            try {
                const blob = new Blob([response.code], { type: 'text/javascript' });
                const url = URL.createObjectURL(blob);
                const script = document.createElement('script');
                script.src = url;

                // Wstrzykujemy jak najszybciej
                (document.head || document.documentElement).appendChild(script);

                script.onload = () => {
                    URL.revokeObjectURL(url);
                    script.remove();
                };
            } catch (e) {
                console.error("[Shield] Błąd przy wstrzykiwaniu Bloba:", e);
                // Fallback (może zostać zablokowany przez CSP, ale warto spróbować)
                const script = document.createElement('script');
                script.textContent = response.code;
                (document.head || document.documentElement).appendChild(script);
            }
        } else {
            console.error("[Shield Error] Nie udało się pobrać silnika z tła:", response ? response.error : "Brak odpowiedzi");
        }
    });

    // Automatyczne cofnięcie jeśli strona błędu mignie
    if (window.location.href.includes('DspUnsupportedBrowserPlugins.html')) {
        window.history.back();
    }
})();