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
    images: ["images/figma.png", ]
    },
    "devKit": {
    modalBg: "images/dev_table.png",
    images: ["images/github.png", "images/html-logo.png", "images/CSS3_logo_and_wordmark.svg.png", "images/JavaScript-Symbol.png", "images/php.png", "images/laragon.png","images/wordpress.png", "images/Laravel.svg.png", "images/tailwind-css-logo-png_seeklogo-354675-removebg-preview.png","images/mysql.png", "images/visualstudio.png"]
    }
};

document.querySelectorAll(".folder").forEach(folder => {
    folder.addEventListener("click", function () {
        let folderId = this.id;
        let data = folderData[folderId];

        modalImage.src = data.modalBg; // Set the modal background image
        modalImagesContainer.innerHTML = ""; // Clear previous images

        modalImagesContainer.style.display = "flex"; // Use flexbox
        modalImagesContainer.style.flexWrap = "wrap"; // Allow wrapping to the next line
        modalImagesContainer.style.gap = "10px"; // Add spacing between images
        modalImagesContainer.style.justifyContent = "center"; // Center align images

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

closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const projectButton = document.getElementById("projectButton");
  const slider = document.querySelector(".slider");

  // Hide the slider initially
  slider.style.display = "none";

  // Toggle visibility on button click
  projectButton.addEventListener("click", function () {
      if (slider.style.display === "none") {
          slider.style.display = "block"; // Show slider
      } else {
          slider.style.display = "none"; // Hide slider
      }
  });
});

document.getElementById("projectButton").addEventListener("click", function () {
  window.location.href = "projects.html"; 
});
