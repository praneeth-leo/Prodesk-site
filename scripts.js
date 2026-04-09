const btn = document.getElementById("toggleMode");

if (btn) {
    btn.addEventListener("click", function() {
        document.body.classList.toggle("dark");
    });
}
