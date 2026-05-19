function scrollGallery(direction) {

    const gallery = document.getElementById("gallery");

    gallery.scrollBy({
        left: direction * 500,
        behavior: "smooth"
    });

    const polaroids = document.querySelectorAll(".polaroid");

    polaroids.forEach(photo => {

        // REMOVE OLD ANIMATIONS
        photo.classList.remove("swish-left");
        photo.classList.remove("swish-right");

        // FORCE RESTART
        void photo.offsetWidth;

        // ADD NEW SWISH
        if(direction === 1) {

            photo.classList.add("swish-right");

        } else {

            photo.classList.add("swish-left");
        }

    });

}

function openImage(image) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-image").src = image.src;

}

function closeImage() {

    document.getElementById("popup").style.display = "none";

}



const gallery = document.getElementById("gallery");

let lastScrollLeft = 0;

gallery.addEventListener("scroll", () => {

    const polaroids = document.querySelectorAll(".polaroid");

    if(gallery.scrollLeft > lastScrollLeft) {

        polaroids.forEach(photo => {

            photo.classList.remove("swish-right");

            void photo.offsetWidth;

            photo.classList.add("swish-right");

        });

    } else {

        polaroids.forEach(photo => {

            photo.classList.remove("swish-left");

            void photo.offsetWidth;

            photo.classList.add("swish-left");

        });

    }

    lastScrollLeft = gallery.scrollLeft;

});