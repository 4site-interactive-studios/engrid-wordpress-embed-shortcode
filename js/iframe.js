window.onmessage = (e) => {
  var iframe_id = "en-iframe";
  if(e.data.hasOwnProperty('enID')) {
    iframe_id += "-" + e.data.enID;
  }

  if (e.data.hasOwnProperty("frameHeight")) {
    document.getElementById(iframe_id).style.height = `${e.data.frameHeight}px`;
  } else if (e.data.hasOwnProperty("scroll") && e.data.scroll) {
    // Only scrolls if that message is not coming from a donation page
    // e.data.scroll will be 1 if it's coming from a donation page
    document.getElementById(iframe_id).scrollIntoView({
      behavior: "smooth",
    });
    console.log("Scrolling");
  }
};
