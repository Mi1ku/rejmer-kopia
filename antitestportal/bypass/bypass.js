(function() {
    console.log("%c ⚡ Anti Testportal PRO by Mikuś ⚡ ", "color: #38bdf8; background: #0f172a; font-weight: bold; padding: 10px; border-radius: 5px;");

    // 1. Neutralizacja funkcji "Uczciwy Rozwiązujący"
    Object.defineProperty(document, 'hasFocus', { get: () => true });
    Object.defineProperty(document, 'hidden', { get: () => false });
    Object.defineProperty(document, 'visibilityState', { get: () => 'visible' });

    // 2. Blokada raportowania zmian zakładek do serwera
    window.logToServer = function() { 
        console.log("Anti-Testportal: Zablokowano próbę wysłania logu do nauczyciela!");
        return true; 
    };
    
    // 3. Ochrona przed systemem Examus (wykrywanie monitorów)
    const fakeSize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    Object.defineProperty(window.screen, 'width', { get: () => fakeSize.width });
    Object.defineProperty(window.screen, 'height', { get: () => fakeSize.height });
    Object.defineProperty(window.screen, 'availWidth', { get: () => fakeSize.width });
    Object.defineProperty(window.screen, 'availHeight', { get: () => fakeSize.height });

    // 4. Blokada wykrywania udostępniania ekranu i zrzutów
    if (navigator.mediaDevices) {
        navigator.mediaDevices.getDisplayMedia = null;
    }

    // Blokowanie natywnych eventów przeglądarki wywoływanych przy zmianie okna
    const blockEvent = (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();
    };
    window.addEventListener('blur', blockEvent, true);
    window.addEventListener('mouseleave', blockEvent, true);
    window.addEventListener('visibilitychange', blockEvent, true);

    // 5. Automatyczne przygotowanie pytań do wyszukiwania
    function setupSearch() {
        const selectors = '.question-content, .question-text-field, .question-essence, h2, p';
        document.querySelectorAll(selectors).forEach(el => {
            if (el.innerText.length > 8 && !el.dataset.mikusReady) {
                el.style.borderLeft = "4px solid #38bdf8";
                el.style.paddingLeft = "10px";
                el.style.cursor = "help";
                
                el.onclick = (e) => {
                    e.preventDefault();
                    // Otwiera wyszukiwarkę Google z treścią pytania
                    window.open('https://www.google.com/search?q=' + encodeURIComponent(el.innerText), '_blank');
                };
                el.dataset.mikusReady = "true";
            }
        });
    }

    // Dynamiczne skanowanie strony w celu obsługi pytań ładowanych w czasie rzeczywistym
    setInterval(setupSearch, 1500);
})();