const Portfolio = (function () {
  function typeAnimation() {
    Typed.new("#writing-text", {
      strings: [
        "am a Frontend Web Developer.",
        "love everything about code.",
        "solve problems.",
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 1,
      contentType: "text",
      callback: function () {
        $("#writing-text").css({
          color: "#fff",
          "background-color": "#000000",
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    typeAnimation: typeAnimation,
  };
})();

Portfolio.typeAnimation();
