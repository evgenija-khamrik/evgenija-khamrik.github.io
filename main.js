function showLoader() {
   let preloader = document.querySelector(".preloader_monitor");
   preloader.style.display = "flex";

   window.addEventListener("load", function () {
      preloader.style.display = "none";
   });
}

document.addEventListener("DOMContentLoaded", showLoader);