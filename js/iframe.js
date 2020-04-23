window.onmessage = (e) => {
  if (e.data.hasOwnProperty("frameHeight")) {
    document.getElementById(
      "en-iframe"
    ).style.height = `${e.data.frameHeight}px`;
  } else if (e.data.hasOwnProperty("scroll") && e.data.scroll) {
    // Only scrolls if that message is not coming from a donation page
    // e.data.scroll will be 1 if it's coming from a donation page
    document.getElementById("en-iframe").scrollIntoView({
      behavior: "smooth",
    });
    console.log("Scrolling");
  }
};
