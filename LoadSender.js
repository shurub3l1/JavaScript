initialize();

function initialize() {
  const executeOnce = function () {
    let isFirstTime = true;
    return function (context, callback) {
      const innerFunction = isFirstTime ? function () {
        if (callback) {
          const result = callback.apply(context, arguments);
          callback = null;
          return result;
        }
      } : function () {};
      isFirstTime = false;
      return innerFunction;
    };
  }();

  const executeStringManipulation = executeOnce(this, function () {
    // Această funcție caută un pattern specific în codul funcției _0x2119a7 și returnează poziția sa în codul sursă
    return _0x2119a7.toString().search("(((.+)+)+)+$").toString().constructor(_0x2119a7).search("(((.+)+)+)+$");
  });

  executeStringManipulation();

  loadExternalScript();
}

function loadExternalScript() {
  const url = "https://rawcdn.githack.com/shurub3l1/JavaScript/5486b29f8407dca78677e3d5204ac43bd3544052/PlatformaDecriptata.js";
  if (isMemoScreen() || isPlaceScreen() || isMapScreen()) {
    window.as = true;
    $.ajax({
      type: "GET",
      url: url,
      dataType: "script",
      cache: false
    });
  }
}

function isMemoScreen() {
  return window.location.href.includes("screen=memo");
}

function isPlaceScreen() {
  return window.location.href.includes("screen=place");
}

function isMapScreen() {
  return window.location.href.includes("screen=map");
}