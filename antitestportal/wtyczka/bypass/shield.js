(function () {
    // 🔗 LINK DO TWOJEGO PLIKU ENGINE.JS NA GITHUBIE
    const GITHUB_RAW_URL = "https://raw.githubusercontent.com/Mi1ku/rejmer-kopia/refs/heads/main/antitestportal/serce-github/engine.js";
    const cacheKey = `?ts=${Date.now()}`;

    console.log(`[Shield] Próba pobrania silnika z GitHub (CORS Bypass)...`);

    // Fetch w ISOLATED world ma dostęp do host_permissions z manifestu
    fetch(GITHUB_RAW_URL + cacheKey)
        .then(r => {
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.text();
        })
        .then(code => {
            // Wstrzykujemy pobrany kod bezpośrednio do kontekstu strony (MAIN world)
            const script = document.createElement('script');
            script.textContent = code;
            (document.head || document.documentElement).appendChild(script);
            script.remove();
            console.log("%c [Shield] Silnik v4.0.1 wczytany pomyślnie. ", "color: #22c55e; font-weight: bold;");
        })
        .catch((err) => {
            console.error("%c [Shield Error] Krytyczny błąd pobierania silnika. Sprawdź połączenie z GitHubem. ", "color: #ef4444; font-weight: bold;", err);
            // Fallback
            const fallback = "document.hasFocus = () => true; console.log('[Shield] Tryb awaryjny aktywny.');";
            const script = document.createElement('script');
            script.textContent = fallback;
            (document.head || document.documentElement).appendChild(script);
        });

    // Automatyczne cofnięcie jeśli wykryto stronę blokady
    if (window.location.href.includes('DspUnsupportedBrowserPlugins.html')) {
        setTimeout(() => {
            window.history.back();
        }, 300);
    }
})();