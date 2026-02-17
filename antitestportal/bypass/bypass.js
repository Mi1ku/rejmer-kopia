(function() {
    // 1. Całkowite blokowanie zdarzeń wyjścia (Anti-Blur)
    const killEvent = (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();
    };

    // Rejestrujemy handlery w fazie przechwytywania (true), aby być pierwszymi
    window.addEventListener('blur', killEvent, true);
    window.addEventListener('mouseleave', killEvent, true);
    window.addEventListener('visibilitychange', killEvent, true);
    window.addEventListener('focusout', killEvent, true);

    // 2. Nadpisywanie właściwości dokumentu (Niewidzialność)
    Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });
    Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });
    Object.defineProperty(document, 'hasFocus', { value: () => true, configurable: true });

    // 3. Click-to-Search (Usprawnienie Mikuś)
    function setupSearch() {
        const questions = document.querySelectorAll('.question-content, .question-essence, h2, p');
        questions.forEach(q => {
            if (q.innerText.length > 10 && !q.dataset.mikusShield) {
                q.style.borderLeft = "4px solid #3498db";
                q.style.paddingLeft = "10px";
                q.style.cursor = "pointer";
                q.onclick = (e) => {
                    e.preventDefault();
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(q.innerText)}`, '_blank');
                };
                q.dataset.mikusShield = "true";
            }
        });
    }

    // Uruchomienie z losowym opóźnieniem, aby uniknąć wykrycia wzorca startu
    setTimeout(() => {
        setInterval(setupSearch, 2000);
    }, Math.random() * 1000 + 500);
})();