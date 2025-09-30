fish();
function fish() {
    return (
      $("#footer-wrap").css({
        position: "absolute",
        "text-align": "center",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }),
      $(".fish_container").css({
        "z-index": -1,
        width: "100%",
        height: "160px",
        margin: 0,
        padding: 0,
      }),
      $("footer").append(
        '<div class="fish_container" id="jsi-flying-fish-container"></div>'
      ),
      $("body").append(
        // '<script src="https://cdn.jsdelivr.net/gh/xiabo2/CDN@latest/fish.js"></script>'
        '<script src="/js/fish.js"></script>'
      ),
      this
    );
  }