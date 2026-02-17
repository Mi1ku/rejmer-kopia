(function () {
    // 🏷️ UNIKALNY IDENTYFIKATOR WERSJI (Zmień to, aby wymusić odświeżenie u wszystkich)
    const CACHE_BUST = Date.now();
    const GITHUB_RAW_URL = `https://raw.githubusercontent.com/Mi1ku/rejmer-kopia/refs/heads/main/antitestportal/serce-github/engine.js?v=${CACHE_BUST}`;

    console.log(`[Shield] Ładowanie silnika (Cache Buster: ${CACHE_BUST})...`);

    fetch(GITHUB_RAW_URL, {
        cache: "no-store",
        mode: 'cors'
    })
        .then(r => {
            if (!r.ok) throw new Error(`Błąd GitHub: ${r.status}`);
            return r.text();
        })
        .then(code => {
            // Profesjonalne wstrzykiwanie kodu bez zostawiania śmieci w DOM
            const script = document.createElement('script');
            script.textContent = code;
            (document.head || document.documentElement).appendChild(script);
            script.remove();
            console.log("%c [Shield] Silnik zsynchronizowany z GitHub. ", "color: #22c55e; font-weight: bold;");
        })
        .catch((err) => {
            console.error("%c [Shield Error] Brak połączenia z serwerem aktualizacji. ", "color: #ef4444; font-weight: bold;");

            // --- TRYB AWARYJNY (Minimalna ochrona offline) ---
            try {
                document.hasFocus = () => true;
                Object.defineProperty(document, 'visibilityState', { get: () => 'visible' });
            } catch (e) { }
        });
})();