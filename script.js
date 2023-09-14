var toggleAboutButton = document.getElementById("toggleAboutButton");

toggleAboutButton.addEventListener("click", function () {
    toggleAbout();
});


function toggleAbout() {
    if (aboutParagraph.style.display == "none") {
        aboutParagraph.style.display = "block";
    } else {
        aboutParagraph.style.display = "none";
    }
}

