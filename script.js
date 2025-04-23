function toggleMenu(){
    document.querySelector(".nav_links").classList.toggle("active");
}
$(document).ready(function () {
    $('.btn-secondary').on('click', function () {
      const btn = $(this);
      btn.addClass('bounce');
      setTimeout(() => {
        btn.removeClass('bounce');
      }, 400);
    });
  });
  
if ("serviceWorker" in navigator) {
    window.addEventListener("load",
        function () {
            navigator.serviceWorker.register("service-worker.js").
            then(function (e) { console.log("Service Worker registered with scope:", e.scope) })
            .catch(function (e) { console.log("Service Worker registration failed:", e) })
        });
}
