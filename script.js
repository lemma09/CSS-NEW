// 1. Dark Mode Toggle
function bifaJijjiiri() {
    document.body.classList.toggle("dark-theme");
}

// 2. Form Interaction with Name
function ergaaErgi() {
    let maqaa = document.getElementById('user-name').value;
    if (maqaa === "") {
        alert("Maaloo, dura maqaa keessan galchaa!");
    } else {
        alert("Galatoomaa " + maqaa + "! Ergaa keessan nagaan fudhanneerra. Telegram (@mylife0950) irrattis na quunnamuu dandeessu.");
    }
}