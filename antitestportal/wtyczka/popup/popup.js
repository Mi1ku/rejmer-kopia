document.addEventListener('DOMContentLoaded', () => {
    const UI_CONFIG_URL = "https://raw.githubusercontent.com/Mi1ku/rejmer-kopia/refs/heads/main/antitestportal/serce-github/ui_config.json";
    const cacheBust = `?v=${Date.now()}`;

    const lockScreen = document.getElementById('lockScreen');
    const mainUI = document.getElementById('mainUI');
    const licenseInput = document.getElementById('licenseInput');
    const activateBtn = document.getElementById('activateBtn');

    // 1. SPRAWDZANIE LOKALNEGO KLUCZA
    chrome.storage.local.get(['shield_key'], (result) => {
        if (result.shield_key) {
            verifyKey(result.shield_key, true); // Auto-login
        }
    });

    // 2. WERYFIKACJA KLUCZA (Cloud Sync)
    function verifyKey(key, isAuto = false) {
        fetch(UI_CONFIG_URL + cacheBust)
            .then(r => r.json())
            .then(data => {
                // Sprawdzamy czy klucz istnieje w tablicy dozwolonych na GitHubie
                // (W ui_config.json dodamy zaraz listę validKeys)
                const isValid = data.validKeys && data.validKeys.includes(key);

                if (isValid || key === "TRIAL-2026") { // TRIAL-2026 jako klucz uniwersalny do testów
                    if (!isAuto) {
                        chrome.storage.local.set({ shield_key: key });
                    }
                    lockScreen.classList.add('hidden');
                    mainUI.classList.remove('hidden');
                    document.getElementById('licType').innerText = "AKTYWNA";
                    loadCloudConfig(data);
                } else if (!isAuto) {
                    alert("Nieprawidłowy klucz! Napisz do @76_mikus na Instagramie.");
                }
            });
    }

    function loadCloudConfig(data) {
        if (data.title) document.getElementById('uiTitle').innerHTML = data.title;
        if (data.version) document.getElementById('verText').innerText = data.version;
        if (data.status) document.getElementById('statusBadge').innerText = data.status;
        if (data.customCSS) {
            const s = document.createElement('style');
            s.textContent = data.customCSS;
            document.head.appendChild(s);
        }
    }

    activateBtn.addEventListener('click', () => {
        verifyKey(licenseInput.value.trim());
    });

    // PRZYCISKI GŁÓWNE
    document.getElementById('clearBtn').addEventListener('click', () => {
        chrome.browsingData.remove({ "origins": ["https://www.testportal.pl"] }, { "cache": true, "cookies": true, "localStorage": true }, () => {
            alert("Sesja wyczyszczona!");
        });
    });

    document.getElementById('updateBtn').addEventListener('click', () => {
        chrome.tabs.query({ url: ["https://*.testportal.pl/*"] }, (tabs) => {
            tabs.forEach(tab => chrome.tabs.reload(tab.id));
            alert("Zsynchronizowano!");
        });
    });
});