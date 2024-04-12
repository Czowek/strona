document.addEventListener("DOMContentLoaded", function() {
    let a = document.querySelector(".a");
    let d = document.getElementById("msg");
    let titleExpressions = [">.< - Czowek.pl", "x_x - Czowek.pl", "0_0 - Czowek.pl", "ಠ_ಠ - Czowek.pl", "ʕ•ᴥ•ʔ - Czowek.pl"];
    let currentIndex = 0;

    function clickHandler() {
        document.removeEventListener("click", clickHandler);
        setTimeout(function() {
            d.remove();
        }, 100);
        a.classList.add("visible");
        document.getElementById("music").play();
    }

    function changeTitle() {
        document.title = titleExpressions[currentIndex];
        currentIndex = (currentIndex + 1) % titleExpressions.length;
    }

    document.addEventListener("click", clickHandler);
    setInterval(changeTitle, 1000);
});
