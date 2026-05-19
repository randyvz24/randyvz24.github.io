function scrollGallery(direction) {

    const gallery = document.getElementById("gallery");

    gallery.scrollBy({
        left: direction * 500,
        behavior: "smooth"
    });

    // ALL POLAROIDS
    const polaroids = document.querySelectorAll(".polaroid");

    polaroids.forEach(photo => {

        if(direction === 1) {

            photo.style.transform = "rotate(6deg)";

        } else {

            photo.style.transform = "rotate(-6deg)";
        }

        setTimeout(() => {

            photo.style.transform = "";

        }, 300);

    });

}

function openImage(image) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-image").src = image.src;

}

function closeImage() {

    document.getElementById("popup").style.display = "none";

}