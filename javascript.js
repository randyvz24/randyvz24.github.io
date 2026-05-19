function scrollGallery(direction) {

    const gallery = document.getElementById("gallery");

    gallery.scrollBy({
        left: direction * 500,
        behavior: "smooth"
    });

}

function openImage(image) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-image").src = image.src;

}

function closeImage() {

    document.getElementById("popup").style.display = "none";

}



