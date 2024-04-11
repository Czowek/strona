document.addEventListener("DOMContentLoaded", function() {
    let a = document.querySelector(".a");
    let d = document.getElementById("msg");
  
    function clickHandler() {
      document.removeEventListener("click", clickHandler);
      setTimeout(function() {
        d.remove();
      }, 100);
      a.classList.add("visible");
      document.getElementById("music").play();
    }
  
    document.addEventListener("click", clickHandler);
  });
  