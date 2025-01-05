document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); //Zatrzymuje domyślne zachowanie formularza

        alert("Form submitted!");
        contactForm.reset(); //Czyści formularz
    });

});