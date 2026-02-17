(function () {
    // 🔗 LINK DO TWOJEGO PLIKU ENGINE.JS NA GITHUBIE
    const GITHUB_RAW_URL = "https://raw.githubusercontent.com/Mi1ku/rejmer-kopia/refs/heads/main/antitestportal/serce-github/engine.js";

    console.log("[Shield] Pobieranie najnowszego silnika z GitHub...");

    fetch(GITHUB_RAW_URL, { cache: "no-store" })
        .then(r => {
            if (!r.ok) throw new Error("Błąd sieci");
            return r.text();
        })
        .then(code => {
            // Bezpośrednie uruchomienie kodu pobranego z GitHuba
            // Dzięki world: MAIN w manifest.json, ten kod zadziała poprawnie
            const script = document.createElement('script');
            script.textContent = code;
            (document.head || document.documentElement).appendChild(script);
            script.remove();
        })
        .catch((err) => {
            console.error("%c [Shield Error] Nie udało się pobrać silnika. Działam w trybie awaryjnym. ", "color: #ef4444; font-weight: bold;");

            // --- TRYB AWARYJNY (Jeśli GitHub nie odpowiada) ---
            document.hasFocus = () => true;
            console.log("[Shield] Tryb awaryjny aktywny.");
        });
})();