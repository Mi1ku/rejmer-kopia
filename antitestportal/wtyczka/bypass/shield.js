(function () {
    // 🏷️ CACHE BUSTER + HARD REFRESH LOGIC
    const GITHUB_RAW_URL = "https://raw.githubusercontent.com/Mi1ku/rejmer-kopia/refs/heads/main/antitestportal/serce-github/engine.js";
    const cacheKey = `?ts=${Date.now()}_v4`; // Wymuszamy wersję v4

    console.log(`[Shield] Synchronizacja z Cloud Engine (Buster: ${cacheKey})...`);

    // Używamy silniejszego fethca z brakiem cache
    fetch(GITHUB_RAW_URL + cacheKey, {
        cache: "reload",
        mode: 'cors',
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        }
    })
        .then(r => {
            if (!r.ok) throw new Error(`Serwer GitHub zwrócił błąd: ${r.status}`);
            return r.text();
        })
        .then(code => {
            // Czyścimy poprzednie VM i odpalamy świeży kod
            const script = document.createElement('script');
            script.textContent = code;
            (document.head || document.documentElement).appendChild(script);
            script.remove();
            console.log("%c [Shield] Silnik v4.0.1 AKTYWNY. Blokady Testportalu zneutralizowane. ", "color: #22c55e; font-weight: bold;");
        })
        .catch((err) => {
            console.error("%c [Shield Error] Krytyczny błąd ładowania silnika: ", "color: #ef4444; font-weight: bold;", err);
            // Fallback dla fokusu
            try { document.hasFocus = () => true; } catch (e) { }
        });

    // Przekierowanie ze strony błędu (Bypass dla linku który podesłałeś)
    if (window.location.href.includes('DspUnsupportedBrowserPlugins.html')) {
        console.log("[Shield] Wykryto stronę blokady. Próba autokorekty...");
        window.history.back();
    }
})();