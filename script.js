document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".photo");
  const descriptionBox = document.getElementById("photo-description");

  if (!descriptionBox) {
    console.error("Element with ID 'photo-description' not found.");
    return;
  }

  photos.forEach((photo) => {
    photo.addEventListener("click", function () {
      const description =
        this.getAttribute("data-description") || "No description available.";
      descriptionBox.innerHTML = description;

      descriptionBox.style.color = "white";
      descriptionBox.style.fontSize = "16px";
      descriptionBox.style.padding = "5px";
      descriptionBox.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      descriptionBox.style.borderRadius = "5px";
      descriptionBox.style.marginTop = "5px";
      descriptionBox.style.textAlign = "justify";
    });
  });
});

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalImagesContainer = document.getElementById("modalImagesContainer");
const closeModalBtn = document.getElementById("closeModalBtn");

// Define images for each folder
const folderData = {
    "designKit": {
    modalBg: "images/design_table.png",
    images: ["images/github.png", ]
    },
    "devKit": {
    modalBg: "images/dev_table.png",
    images: ["images/github.png", ]
    }
};

document.querySelectorAll(".folder").forEach(folder => {
    folder.addEventListener("click", function () {
        let folderId = this.id;
        let data = folderData[folderId];

        modalImage.src = data.modalBg; // Set the modal background image
        modalImagesContainer.innerHTML = ""; // Clear previous images

        // Insert new images inside modal
        data.images.forEach(imgSrc => {
            let img = document.createElement("img");
            img.src = imgSrc;
            img.alt = "Inserted Image";
            modalImagesContainer.appendChild(img);
        });

        modal.style.display = "flex"; // Show modal
    });
});

closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

