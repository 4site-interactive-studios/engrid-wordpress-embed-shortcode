function getFrameByEvent(event) {
  return [].slice.call(document.getElementsByTagName('iframe')).filter(function(iframe) {
    return iframe.contentWindow === event.source;
  })[0];
}
window.addEventListener("message", function(e) {
  var frame = getFrameByEvent(e);
  if(frame) {
    if(e.data.hasOwnProperty("frameHeight")) {
      frame.style.height = `${e.data.frameHeight}px`;
    } else if(e.data.hasOwnProperty("scroll") && e.data.scroll) {
      // Only scrolls if that message is not coming from a donation page
      // e.data.scroll will be 1 if it's coming from a donation page
      frame.scrollIntoView({
        behavior: "smooth",
      });  
    }
  }
}, false);