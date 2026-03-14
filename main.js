(function() {
    'use strict';

    // Sprawdzanie tokena (Twój system zabezpieczeń)
    if (!window.vaultToken) {
        console.error("Błąd Vaulta: Nieprawidłowy lub brak tokena.");
        return;
    }

    console.log("Twój prywatny Vault (M-j-Menad-er) aktywny!");

    // TWÓRZENIE PANELU W GRZE
    const div = document.createElement('div');
    div.id = 'moj-vault-panel';
    div.innerHTML = `
        <div style="position:fixed; top:10px; right:10px; z-index:10000; background:#f4e4bc; border:2px solid #804000; padding:10px; border-radius:5px; box-shadow: 2px 2px 5px #000;">
            <h4 style="margin:0 0 5px 0;">Vault: ${window.vaultToken.substring(0,8)}</h4>
            <button id="btn-fejk" style="width:100%; margin-bottom:5px; cursor:pointer;">Ustaw Fejka (1 pik)</button>
            <button id="btn-raport" style="width:100%; cursor:pointer;">Pobierz dane wioski</button>
        </div>
    `;
    document.body.appendChild(div);

    // FUNKCJA 1: FEJKOMAT (działa na Placu)
    document.getElementById('btn-fejk').onclick = function() {
        if (window.location.href.includes('screen=place')) {
            // Wpisuje 1 pikiniera i 1 miecznika
            if (document.querySelector("#unit_input_spear")) document.querySelector("#unit_input_spear").value = 1;
            if (document.querySelector("#unit_input_sword")) document.querySelector("#unit_input_sword").value = 1;
            UI.SuccessMessage("Jednostki ustawione!", 1000);
        } else {
            UI.ErrorMessage("Musisz być na Placu!", 2000);
        }
    };

    // FUNKCJA 2: POBIERANIE DANYCH (np. do rozpiski)
    document.getElementById('btn-raport').onclick = function() {
        const coords = game_data.village.coord;
        const player = game_data.player.name;
        alert("Dane Twojej wioski:\nGracz: " + player + "\nWspółrzędne: " + coords);
    };

})();
