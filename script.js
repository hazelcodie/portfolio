document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll(".photo");
    const descriptionBox = document.getElementById("photo-description");

    photos.forEach(photo => {
        photo.addEventListener("click", function () {
            const description = this.getAttribute("data-description") || "No description available.";
            descriptionBox.textContent = description;
        });
    });
});
