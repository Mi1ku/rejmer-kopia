document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('bypassToggle');
    const badge = document.getElementById('statusBadge');

    chrome.storage.sync.get('bypassEnabled', (data) => {
        const isEnabled = data.bypassEnabled !== false;
        toggle.checked = isEnabled;
        updateUI(isEnabled);
    });

    toggle.addEventListener('change', () => {
        const isEnabled = toggle.checked;
        chrome.storage.sync.set({ bypassEnabled: isEnabled }, () => {
            updateUI(isEnabled);
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                if (tabs[0]) chrome.tabs.reload(tabs[0].id);
            });
        });
    });

    function updateUI(isEnabled) {
        badge.innerText = isEnabled ? "Aktywny" : "Wyłączony";
        badge.style.color = isEnabled ? "#2ecc71" : "#ef4444";
    }
});