document.addEventListener("DOMContentLoaded", function() {
    let a = document.querySelector(".a");
    let d = document.getElementById("msg");
    let titleExpressions = [">.< - Czowek.pl", "x_x - Czowek.pl", "0_0 - Czowek.pl", "ಠ_ಠ - Czowek.pl", "ʕ•ᴥ•ʔ - Czowek.pl"];
    let musicFiles = ["x_x.mp3", "0_0.mp3", ">.<.mp3"]; // Add your music file names here
    let titleIndex = 0;
    let musicIndex = 0;
    let audio = document.getElementById("music");

    function clickHandler() {
        document.removeEventListener("click", clickHandler);
        setTimeout(function() {
            d.remove();
        }, 100);
        a.classList.add("visible");
        audio.src = musicFiles[musicIndex];
        audio.play();
    }

    function changeTitle() {
        document.title = titleExpressions[titleIndex];
        titleIndex = (titleIndex + 1) % titleExpressions.length;
    }

    function playNextMusic() {
        musicIndex = (musicIndex + 1) % musicFiles.length;
        audio.src = musicFiles[musicIndex];
        audio.play();
    }

    document.addEventListener("click", clickHandler);
    setInterval(changeTitle, 1000);

    audio.addEventListener("ended", playNextMusic);
});
