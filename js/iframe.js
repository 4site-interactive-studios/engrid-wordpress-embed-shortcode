function getFrameByEvent(event) {
  return [].slice
    .call(document.getElementsByTagName("iframe"))
    .filter(function (iframe) {
      return iframe.contentWindow === event.source;
    })[0];
}
window.onmessage = (e) => {
  var iframe = getFrameByEvent(e);
  if (iframe) {
    if (e.data.hasOwnProperty("frameHeight")) {
      iframe.style.height = `${e.data.frameHeight}px`;
    } else if (e.data.hasOwnProperty("scroll") && e.data.scroll > 0) {
      // e.data.scroll will be the iframe offset to scroll, 1 = top of the iframe
      const elDistanceToTop =
        window.pageYOffset + iframe.getBoundingClientRect().top;
      let scrollTo = elDistanceToTop + e.data.scroll;

      window.scrollTo({
        top: scrollTo,
        left: 0,
        behavior: "smooth",
      });
      console.log("Scrolling Window To", scrollTo);
    }
  }
};
