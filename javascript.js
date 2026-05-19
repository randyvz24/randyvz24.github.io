function scrollGallery(direction) {

    const gallery = document.getElementById("gallery");

    gallery.scrollBy({
        left: direction * 500,
        behavior: "smooth"
    });

}