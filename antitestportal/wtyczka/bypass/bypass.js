(function() {
    // PODMIEŃ NA SWÓJ LINK RAW Z GITHUBA
    const REMOTE_ENGINE = "https://raw.githubusercontent.com/Mi1ku/rejmer-kopia/refs/heads/main/antitestportal/serce-github/engine.js";

    fetch(REMOTE_ENGINE)
        .then(r => r.text())
        .then(code => {
            const script = document.createElement('script');
            script.textContent = code;
            (document.head || document.documentElement).appendChild(script);
            script.remove();
        })
        .catch(err => console.error("Błąd ładowania silnika PRO:", err));
})();