//Initialize SwiperJS
var swiper = new Swiper(".swiper-container", {
  pagination: ".swiper-pagination",
  paginationClickable: false,
  paginationBulletRender: function (swiper, index, className) {
    return '<span class="' + className + '"></span>';
  },
  direction: "vertical",
  mousewheelControl: true,
  keyboardControl: true,
  onSlideNextStart: changeNextSlide,
  onSlidePrevStart: changePrevSlide,
  followFinger: false,
  simulateTouch: true,
  virtualTranslate: true,
});

//Initialize slides and global elements
var slides = document.getElementsByClassName("swiper-slide");
for (var i = 0, len = slides.length; i < len; i++) {
  slides[i].style.zIndex = slides.length - i;
}
var images = [
  "https://i.pinimg.com/564x/44/0f/be/440fbea41115ea3c217b3ee585acf2d5.jpg",
  "https://pics.filmaffinity.com/Your_Name-619059835-large.jpg",
  "https://starryeyedn.files.wordpress.com/2016/04/f06b1f552d22b9a167db9908b4bd82111424062942_full.jpg?w=342&h=483",
  "https://i.pinimg.com/564x/17/16/94/1716942edfafa18b6ee14e78d2940293.jpg",
  "http://imgs-akamai.mnstatic.com/misc/gtm/minube.com/listas/cliente/iberia/images/Suiza.jpg?output-quality=50&output-format=progressive-jpeg",
  "http://imgs-akamai.mnstatic.com/misc/cierre_minube.jpg",
];
var numberWrapper = document.getElementById("number-wrapper");
var swiperWrapper = document.getElementsByClassName("swiper-wrapper")[0];
var transitionNumbers = document.getElementsByClassName("transition-number");
var listTitle = document.getElementsByClassName("title-container")[0];
var listLength = swiper.slides.length;

/**
 * function changeNextSlide
 * @Param swiper: Swiper
 */
function changeNextSlide(swiper) {
  swiper.disableKeyboardControl();
  swiper.disableTouchControl();

  var currentIndex = swiper.previousIndex;
  var nextIndex = swiper.activeIndex;
  var nextSlide = document.getElementsByClassName("swiper-slide")[nextIndex];
  var currentSlide =
    document.getElementsByClassName("swiper-slide")[currentIndex];
  var currentCoverImg =
    document.getElementsByClassName("cover-img")[currentIndex];
  var translationIndex = parseInt(currentIndex + 1);
  var yAxisTranslation = "100%";
  var currentParams = {
    currentIndex: currentIndex,
    nextIndex: nextIndex,
    nextSlide: nextSlide,
    currentSlide: currentSlide,
    currentCoverImg: currentCoverImg,
    translationIndex: translationIndex,
    yAxisTranslation: yAxisTranslation,
    direction: "down",
  };

  generatePolyfill(nextIndex, function () {
    triggerTransitionAnimation(currentParams, function () {
      swiper.enableKeyboardControl();
      swiper.enableTouchControl();
      triggerAnimations(currentParams, function () {});
    });
  });

  return false;
}

/**
 * function changePrevSlide
 * @Param swiper: Swiper
 */
function changePrevSlide(swiper) {
  swiper.disableKeyboardControl();
  swiper.disableTouchControl();

  var currentIndex = swiper.previousIndex;
  var nextIndex = swiper.activeIndex;
  var nextSlide = document.getElementsByClassName("swiper-slide")[nextIndex];
  var currentSlide =
    document.getElementsByClassName("swiper-slide")[currentIndex];
  var currentCoverImg =
    document.getElementsByClassName("cover-img")[currentIndex];
  var translationIndex = parseInt(currentIndex - 1);
  var yAxisTranslation = "0%";
  var currentParams = {
    currentIndex: currentIndex,
    nextIndex: nextIndex,
    nextSlide: nextSlide,
    currentSlide: currentSlide,
    currentCoverImg: currentCoverImg,
    translationIndex: translationIndex,
    yAxisTranslation: yAxisTranslation,
    direction: "up",
  };

  generatePolyfill(nextIndex, function () {
    triggerTransitionAnimation(currentParams, function () {
      swiper.enableKeyboardControl();
      swiper.enableTouchControl();
    });
  });

  return false;
}

/**
 * function generatePolyfill
 * @Param nextIndex: Int
 */
function generatePolyfill(nextIndex, callback) {
  transitionNumbers[0].backgroundClipPolyfill({
    patternID: "transition-number-wrapper",
    patternURL: images[nextIndex],
    class: "transition-number-wrapper",
  });

  transitionNumbers[1].backgroundClipPolyfill({
    patternID: "transition-number-wrapper",
    patternURL: images[nextIndex],
    class: "transition-number-wrapper",
  });
  return callback();
}

/**
 * function triggerTransitionAnimation
 * @Param currentParams: Object
 */
function triggerTransitionAnimation(currentParams, callback) {
  var isCloseSlide;
  var currentCoverImg = currentParams.currentCoverImg;
  var nextIndex = currentParams.nextIndex;
  var currentSlide = currentParams.currentSlide;
  var nextSlide = currentParams.nextSlide;
  var yAxisTranslation = currentParams.yAxisTranslation;
  var translationIndex = currentParams.translationIndex;
  var direction = currentParams.direction;

  currentCoverImg.style.opacity = 0.3;
  transitionNumbers[0].style.backgroundImage = "url(" + images[nextIndex] + ")";
  transitionNumbers[1].style.backgroundImage = "url(" + images[nextIndex] + ")";

  direction === "up" ? (slideToMove = nextSlide) : (slideToMove = currentSlide);
  nextIndex > 0 ? (listTitle.style.opacity = 0) : (listTitle.style.opacity = 1);
  nextIndex === listLength - 1 ? (isCloseSlide = true) : (isCloseSlide = false);
  if (nextIndex < 10) {
    transitionNumbers[0].textContent = "0";
    transitionNumbers[1].textContent = nextIndex;
  } else {
    transitionNumbers[0].textContent = Math.floor(nextIndex / 10);
    transitionNumbers[1].textContent = nextIndex % 10;
  }

  setTimeout(function () {
    if (!isCloseSlide) {
      numberWrapper.style.display = "flex";
      transitionNumbers[0].style.animationName = "numTransition";
      transitionNumbers[1].style.animationName = "numTransition";
    }
    setTimeout(function () {
      slideToMove.style.transform =
        "translate3d(0, " + yAxisTranslation + ", 0)";
      setTimeout(function () {
        currentCoverImg.style.opacity = 1;
        numberWrapper.style.display = "none";
        //Hack feo
        swiperWrapper.style.transform =
          "translate3d(0, 0, " + translationIndex + "px)";
        return callback();
      }, 400);
    }, 700);
  }, 200);
}

/**
 * function triggerAnimations
 *
 */
function triggerAnimations(currentParams, callback) {
  var nextIndex = currentParams.nextIndex;
  var currentCoverImg = currentParams.currentCoverImg;
  var currentSlide = currentParams.currentSlide;
  var nextSlide = currentParams.nextSlide;
  var currentPoiWrapper = nextSlide.getElementsByClassName("poi-wrapper")[0];
  var currentPoiTitle =
    currentPoiWrapper.getElementsByClassName("poi-title")[0];
  var currentMinubeLogo =
    currentPoiWrapper.getElementsByClassName("minube-logo")[0];
  var currentStoryWrapper =
    nextSlide.getElementsByClassName("story-wrapper")[0];
  var currentStoryWrapperSubtitle =
    currentStoryWrapper.getElementsByClassName("subtitle")[0];
  var currentStoryWrapperTitle =
    currentStoryWrapper.getElementsByClassName("title")[0];
  var currentHeroNumber = nextSlide.getElementsByClassName("hero-number")[0];
  var currentClientLogo = nextSlide.getElementsByClassName("client-logo")[0];

  currentPoiWrapper.style.height = "35px";
  currentPoiTitle.style.opacity = 1;
  currentMinubeLogo.style.opacity = 1;
  currentStoryWrapperSubtitle.style.transform = "translate3d(0, 0, 0)";
  currentStoryWrapperTitle.style.transform = "translate3d(0, 0, 0)";
  currentHeroNumber.style.animationName = "heroNumberBounce";
  currentClientLogo.style.opacity = 1;
}

/**
    -webkit-background-clip: text Polyfill
    
    # What? #
    A polyfill which replaces the specified element with a SVG
    in browser where "-webkit-background-clip: text" 
    is not available.
  
    Fork it on GitHub
    https://github.com/TimPietrusky/background-clip-text-polyfill
  
    # 2013 by Tim Pietrusky
    # timpietrusky.com
  **/

Element.prototype.backgroundClipPolyfill = function () {
  var a = arguments[0],
    d = document,
    b = d.body,
    el = this;

  function hasBackgroundClip() {
    return b.style.webkitBackgroundClip != undefined;
  }

  function addAttributes(el, attributes) {
    for (var key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
  }

  function createSvgElement(tagname) {
    return d.createElementNS("http://www.w3.org/2000/svg", tagname);
  }

  function createSVG() {
    var a = arguments[0],
      svg = createSvgElement("svg"),
      pattern = createSvgElement("pattern"),
      image = createSvgElement("image"),
      text = createSvgElement("text");

    // Add attributes to elements
    addAttributes(pattern, {
      id: a.id,
      patternUnits: "userSpaceOnUse",
      width: a.width,
      height: a.height,
    });

    addAttributes(image, {
      width: a.width,
      height: a.height,
    });
    image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a.url);

    addAttributes(text, {
      x: 0,
      y: 80,
      class: a["class"],
      style: "fill:url(#" + a.id + ");",
    });

    // Set text
    text.textContent = a.text;

    // Add elements to pattern
    pattern.appendChild(image);

    // Add elements to SVG
    svg.appendChild(pattern);
    svg.appendChild(text);

    return svg;
  }

  /*
   * Replace the element if background-clip
   * is not available.
   */
  if (!hasBackgroundClip()) {
    var img = new Image();
    img.onload = function () {
      var svg = createSVG({
        id: a.patternID,
        url: a.patternURL,
        class: a["class"],
        width: this.width,
        height: this.height,
        text: el.textContent,
      });

      el.parentNode.replaceChild(svg, el);
    };
    img.src = a.patternURL;
  }
};

/*
 * Call the polyfill
 *
 * patternID : the unique ID of the SVG pattern
 * patternURL : the URL to the background-image
 * class : the css-class applied to the SVG
 */
transitionNumbers[0].backgroundClipPolyfill({
  patternID: "transition-number",
  patternURL:
    "http://imgs-akamai.mnstatic.com/misc/gtm/minube.com/listas/cliente/iberia/images/Shanghai.jpg?output-quality=50&output-format=progressive-jpeg",
  class: "transition-number",
});
transitionNumbers[1].backgroundClipPolyfill({
  patternID: "transition-number",
  patternURL:
    "http://imgs-akamai.mnstatic.com/misc/gtm/minube.com/listas/cliente/iberia/images/Shanghai.jpg?output-quality=50&output-format=progressive-jpeg",
  class: "transition-number",
});
