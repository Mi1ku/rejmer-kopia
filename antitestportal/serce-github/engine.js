(function() {
    console.log("%c ⚡ Anti-Testportal System Core v7.0 ⚡ ", "color: #38bdf8; background: #0f172a; padding: 10px; font-weight: bold;");

    // 1. Blokada raportowania zdarzeń wyjścia (Uczciwy Rozwiązujący)
    const silentKill = (e) => { e.stopImmediatePropagation(); };
    window.addEventListener('blur', silentKill, true);
    window.addEventListener('visibilitychange', silentKill, true);
    window.addEventListener('mouseleave', silentKill, true);

    // 2. Nadpisywanie stanu dokumentu
    Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });
    Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });
    Object.defineProperty(document, 'hasFocus', { value: () => true, configurable: true });

    // 3. Blokada logowania do nauczyciela
    window.logToServer = function() { 
        console.log("Zablokowano logowanie zdarzenia!"); 
        return true; 
    };

    // 4. Fałszowanie rozmiarów okna (Examus Bypass)
    Object.defineProperty(window.screen, 'width', { get: () => window.innerWidth });
    Object.defineProperty(window.screen, 'height', { get: () => window.innerHeight });

    // 5. Click-to-Search (Mikuś Shield)
    setInterval(() => {
        document.querySelectorAll('.question-content, .question-essence, h2, p').forEach(el => {
            if (el.innerText.length > 8 && !el.dataset.mikusActive) {
                el.style.borderLeft = "4px solid #38bdf8";
                el.style.cursor = "crosshair";
                el.onclick = (e) => {
                    e.preventDefault();
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(el.innerText)}`, '_blank');
                };
                el.dataset.mikusActive = "true";
            }
        });
    }, 2000);
})();