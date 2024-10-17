const fullscreenContainer = document.getElementById('fullscreenImgContainer');
if (fullscreenContainer != null) {
    const images = document.querySelectorAll('.attachment.u-photo');
    const fullscreenImg = document.getElementById('fullscreenImg');
    images.forEach(image => {
        image.addEventListener('click', () => {
            fullscreenImg.src = image.src;
            fullscreenImg.style.width = "width" in image.dataset ? image.dataset["width"] + "px" : "";
            fullscreenImg.style.height = "height" in image.dataset ? image.dataset["height"] + "px" : "";
            fullscreenContainer.style.display = 'flex';
            if (image.src.includes("/thumbnails/")) {
                setTimeout(() => {
                    const fullSrc = image.src.replace("/thumbnails/", "/");
                    fullscreenImg.src = fullSrc;
                });
            }
        });
    });
    fullscreenContainer.addEventListener('click', () => {
        fullscreenContainer.style.display = 'none';
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            fullscreenContainer.style.display = 'none';
        }
    });
}
