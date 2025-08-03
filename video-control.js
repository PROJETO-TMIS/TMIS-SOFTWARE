document.addEventListener("DOMContentLoaded", () => {
  const videoFloat = document.querySelector(".video-flutuante");
  const footer = document.querySelector("footer");

  function checkFooterOverlap() {
    const videoBottom = videoFloat.getBoundingClientRect().bottom;
    const footerTop = footer.getBoundingClientRect().top;

    if (videoBottom + 20 > footerTop) {
      videoFloat.style.opacity = "0";
      videoFloat.style.pointerEvents = "none";
    } else {
      videoFloat.style.opacity = "1";
      videoFloat.style.pointerEvents = "auto";
    }
  }

  window.addEventListener("scroll", checkFooterOverlap);
  window.addEventListener("resize", checkFooterOverlap);
  checkFooterOverlap();
});
