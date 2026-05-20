const images = document.querySelectorAll(".gallery-image");

let currentImageIndex = 0;

/* OPEN IMAGE */

function openImage(image) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-image").src = image.src;

    currentImageIndex = Array.from(images).indexOf(image);

    // CAMERA SOUND
    const sound = document.getElementById("camera-sound");

    sound.currentTime = 0;

    sound.play();
}
/* CLOSE IMAGE */

function closeImage() {

    document.getElementById("popup").style.display = "none";
}

/* CHANGE IMAGE */

function changeImage(direction) {

    currentImageIndex += direction;

    // LOOP AROUND
    if(currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    if(currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    // UPDATE IMAGE
    document.getElementById("popup-image").src =
        images[currentImageIndex].src;
}