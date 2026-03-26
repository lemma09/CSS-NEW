// 1. Dark Mode Toggle
function bifaJijjiiri() {
    document.body.classList.toggle("dark-theme");
}

// 2. Form Loading State
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function() {
    const btn = document.querySelector('.btn');
    const name = document.getElementById('user-name').value;
    
    btn.innerText = "Ergamaa jira...";
    btn.style.background = "#27ae60";
    
    // Alert maqaadhaan
    alert("Galatoomaa " + name + "! Ergaa keessan nagaan ergamaa jira. Email keessan hordofaa.");
});