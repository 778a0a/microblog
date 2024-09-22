function hasAudio (video) {
    return video.mozHasAudio ||
    Boolean(video.webkitAudioDecodedByteCount) ||
    Boolean(video.audioTracks && video.audioTracks.length);
}

function setVideoInGIFMode(video) {
    if (!hasAudio(video)) {
        if (typeof video.loop == 'boolean' && video.duration <= 10.0) {
            video.classList.add("video-gif-mode");
            video.loop = true;
            video.controls = false;
            video.addEventListener("mouseover", () => {
                video.play();
            })
            video.addEventListener("mouseleave", () => {
                video.pause();
            })
        }
    };
}

var items = document.getElementsByTagName("video")
for (var i = 0; i < items.length; i++) {
    if (items[i].duration) {
        setVideoInGIFMode(items[i]);
    } else {
        items[i].addEventListener("loadeddata", function() {
            setVideoInGIFMode(this);
        });
    }
}


const fullscreenContainer = document.getElementById('fullscreenImgContainer');
if (fullscreenContainer != null) {
    const images = document.querySelectorAll('.attachment.u-photo');
    const fullscreenImg = document.getElementById('fullscreenImg');
    images.forEach(image => {
        image.addEventListener('click', () => {
            fullscreenImg.src = image.src;
            fullscreenContainer.style.display = 'flex';
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
