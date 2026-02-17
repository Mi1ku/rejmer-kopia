(function() {
    const GITHUB_RAW_URL = "https://raw.githubusercontent.com/Mi1ku/rejmer-kopia/refs/heads/main/antitestportal/serce-github/engine.js";

    fetch(GITHUB_RAW_URL)
        .then(r => r.text())
        .then(code => {
            const script = document.createElement('script');
            script.textContent = code;
            (document.head || document.documentElement).appendChild(script);
            script.remove();
        })
        .catch(() => console.log("Shield Error: Check connection to GitHub."));
})();