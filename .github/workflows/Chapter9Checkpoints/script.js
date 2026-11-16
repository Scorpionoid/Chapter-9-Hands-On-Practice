// Keeps practice forms on this page instead of sending their information.
document.querySelectorAll(".practice-form").forEach(function(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var status = form.querySelector(".status");
        status.textContent = "This is a practice form. Nothing was sent or saved.";
    });
    form.addEventListener("reset", function() {
        var status = form.querySelector(".status");
        status.textContent = "";
    });
});
