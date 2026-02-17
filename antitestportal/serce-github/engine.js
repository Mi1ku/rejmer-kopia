(function () {
    // --- STEALTH ENGINE v2.0 (LIVE FROM GITHUB) ---
    const _nativeToString = Function.prototype.toString;
    const _addEventListener = EventTarget.prototype.addEventListener;

    const makeNative = (fn, name) => {
        fn.toString = () => `function ${name || ''}() { [native code] }`;
        return fn;
    };

    // 1. ZABÓJCA WYKRYWANIA (PROTOTYPE PATCH)
    EventTarget.prototype.addEventListener = makeNative(function (type, listener, options) {
        if (['blur', 'focus', 'visibilitychange', 'mouseleave', 'pagehide', 'beforeunload'].includes(type)) {
            const wrappedListener = function (e) {
                if (type === 'blur' || type === 'mouseleave') return;
                if (type === 'visibilitychange' && document.visibilityState === 'hidden') return;
                return listener.apply(this, arguments);
            };
            return _addEventListener.call(this, type, wrappedListener, options);
        }
        return _addEventListener.apply(this, arguments);
    }, 'addEventListener');

    // 2. NADPISYWANIE STANU (PROTOTYPE LEVEL)
    const docProto = Object.getPrototypeOf(document);
    const forceProp = (proto, prop, value) => {
        Object.defineProperty(proto, prop, {
            get: makeNative(function () { return value; }, `get ${prop}`),
            configurable: true,
            enumerable: true
        });
    };

    forceProp(docProto, 'visibilityState', 'visible');
    forceProp(docProto, 'hidden', false);
    document.hasFocus = makeNative(() => true, 'hasFocus');

    // 3. AUTO-USUWANIE BLOKADY "WYŁĄCZ ROZSZERZENIA"
    const destroyBlocker = () => {
        const keywords = ['rozszerzenia', 'wtyczki', 'zainstalowane', 'zmień przeglądarkę'];
        document.querySelectorAll('*').forEach(el => {
            if (el.children.length === 0 && keywords.some(k => el.innerText.toLowerCase().includes(k))) {
                let parent = el;
                for (let i = 0; i < 5; i++) {
                    if (parent && parent.innerText.length < 1000) {
                        if (parent.tagName !== 'BODY' && parent.tagName !== 'HTML') {
                            parent.style.setProperty('display', 'none', 'important');
                        }
                    }
                    parent = parent.parentElement;
                }
                document.body.style.setProperty('overflow', 'auto', 'important');
                document.documentElement.style.setProperty('overflow', 'auto', 'important');
            }
        });
    };

    // 4. MIKUŚ AI SEARCH (STEALTH INTERFACE)
    const scan = () => {
        const query = '.question-content, .question-essence, .answer-text, h2, p, span';
        document.querySelectorAll(query).forEach(el => {
            if (el.innerText.trim().length > 5 && !el.hasAttribute('data-v')) {
                el.setAttribute('data-v', '1');
                el.addEventListener('click', (e) => {
                    if (e.ctrlKey || e.altKey) {
                        e.preventDefault();
                        const text = el.innerText.trim().replace(/\s+/g, ' ');
                        const url = e.ctrlKey
                            ? `https://www.google.com/search?q=${encodeURIComponent(text)}`
                            : `https://www.perplexity.ai/search?q=${encodeURIComponent(text)}`;
                        window.open(url, '_blank');
                    }
                });
            }
        });
        destroyBlocker();
    };

    const observer = new MutationObserver(scan);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    setInterval(scan, 2000);

    const patchTP = () => {
        if (window.Testportal) {
            if (window.Testportal.Log) window.Testportal.Log.send = makeNative(() => true, 'send');
            if (window.Testportal.Config) {
                window.Testportal.Config.loseFocusNotification = false;
                window.Testportal.Config.isFocusTrackingEnabled = false;
            }
        }
    };
    setInterval(patchTP, 1000);
    console.log("%c ⚡ SHIELD PRO LIVE (v2.0) LOADED ⚡ ", "color: #38bdf8; font-weight: bold; background: #010816; padding: 4px;");
})();