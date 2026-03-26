// 1. Ergaa nagaa (Alert) - Namni button yoo tuqu kan ba'u
function ergaaErgi() {
    alert("Galatoomaa Lammaa quunnamuu keessaniif! Ergaa keessan nagaan fudhanneerra.");
}

// 2. Dark Mode (Halkan akka toluuf halluu jijjiiruu)
// Kun immoo gara fuulduraatti button 'Dark Mode' yoo dabalte si gargaara
function bifaJijjiiri() {
    document.body.classList.toggle("dark-theme");
}
window.onload = function() {
    let maqaa = prompt("Maqaan keessan eenyu?");
    if (maqaa != null && maqaa != "") {
        alert("Baga nagaan dhufte " + maqaa + "! Weebsaayitii Lammaa irratti waan gaarii akka argattu abdiin qaba.");
    }
}
function ergaaErgi() {
    // Input-oota HTML irraa fudhachuu
    let maqaa = document.querySelector('input[placeholder="Maqaa Keessan"]').value;
    let email = document.querySelector('input[placeholder="Email Keessan"]').value;

    if (maqaa === "" || email === "") {
        alert("Maaloo, dura maqaa fi email keessan guutaa!");
    } else {
        alert("Galatoomaa " + maqaa + "! Ergaa keessan nagaan fudhanneerra. Gara email keessan: " + email + " irratti deebii isiniif ergina.");
    }
}
function bifaJijjiiri() {
    // Mallattoo 'dark-theme' jedhu body irratti ni dabala ykn ni hir'isa
    document.body.classList.toggle("dark-theme");
    
    // Ergaa xiqqoo akka namni hubatuuf
    console.log("Bifti weebsaayitii jijjiirameera!");
}
// 1. Dark Mode Toggle
function bifaJijjiiri() {
    document.body.classList.toggle("dark-theme");
}

// 2. Form Interaction with Name
function ergaaErgi() {
    let maqaa = document.querySelector('input[type="text"]').value;
    if (maqaa === "") {
        alert("Maaloo, dura maqaa keessan galchaa!");
    } else {
        alert("Galatoomaa " + maqaa + "! Ergaa keessan nagaan fudhanneerra.");
    }
}
