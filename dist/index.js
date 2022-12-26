'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function Arrow(_ref) {
  var type = _ref.type,
    _ref$hidden = _ref.hidden,
    hidden = _ref$hidden === void 0 ? false : _ref$hidden,
    CustomArrow = _ref.CustomArrow,
    _ref$arrowContainerCl = _ref.arrowContainerClassName,
    arrowContainerClassName = _ref$arrowContainerCl === void 0 ? '' : _ref$arrowContainerCl,
    _ref$arrowWrapperClas = _ref.arrowWrapperClassName,
    arrowWrapperClassName = _ref$arrowWrapperClas === void 0 ? '' : _ref$arrowWrapperClas,
    _ref$arrowClassName = _ref.arrowClassName,
    arrowClassName = _ref$arrowClassName === void 0 ? '' : _ref$arrowClassName,
    onClick = _ref.onClick;
  var ArrowWrapperStyle = {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    height: '40px',
    width: '40px',
    background: '#fff',
    borderRadius: '50%',
    boxShadow: 'rgb(0 0 0 / 44%) 0px 0px 5px 0px',
    zIndex: '10',
    cursor: 'pointer',
    fontSize: '10px',
    opacity: '0.6',
    transition: 'opacity 0.5s',
    left: type === 'prev' ? '5px' : 'initial',
    right: type === 'next' ? '5px' : 'initial'
  };
  var ArrowStyle = {
    height: '10px',
    width: '10px',
    background: 'transparent',
    borderTop: '2px solid #000',
    borderRight: '2px solid #000',
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: type === 'prev' ? 'translate(-25%, -50%) rotate(-135deg)' : 'translate(-75%, -50%) rotate(45deg)'
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: arrowContainerClassName,
    hidden: hidden,
    onClick: onClick
  }, CustomArrow ? typeof CustomArrow === 'function' ? /*#__PURE__*/React__default["default"].createElement(CustomArrow, null) : CustomArrow : /*#__PURE__*/React__default["default"].createElement("div", {
    className: arrowWrapperClassName,
    style: ArrowWrapperStyle
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: arrowClassName,
    style: ArrowStyle
  })));
}

function Dot(_ref) {
  var index = _ref.index,
    _ref$isActive = _ref.isActive,
    isActive = _ref$isActive === void 0 ? false : _ref$isActive,
    dotColorInactive = _ref.dotColorInactive,
    dotColorActive = _ref.dotColorActive,
    DotCustom = _ref.dot,
    _ref$dotWrapperClassN = _ref.dotWrapperClassName,
    dotWrapperClassName = _ref$dotWrapperClassN === void 0 ? '' : _ref$dotWrapperClassN,
    _ref$dotClassName = _ref.dotClassName,
    dotClassName = _ref$dotClassName === void 0 ? '' : _ref$dotClassName,
    onClick = _ref.onClick;
  var handleClick = React.useCallback(function () {
    onClick(index);
  }, [index, onClick]);
  var DotWrapperStyle = {
    display: 'flex',
    margin: '0 5px',
    cursor: 'pointer'
  };
  var DefaultDotStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    boxShadow: 'rgb(0 0 0 / 44%) 0px 0px 5px 0px',
    background: isActive ? dotColorActive : dotColorInactive
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: dotWrapperClassName,
    style: DotWrapperStyle,
    onClick: handleClick
  }, DotCustom ? /*#__PURE__*/React__default["default"].createElement(DotCustom, {
    isActive: isActive
  }) : /*#__PURE__*/React__default["default"].createElement("div", {
    className: dotClassName,
    style: DefaultDotStyle
  }));
}

var RWD_SLIDESHOW_SLIDE = 'RWD_SLIDESHOW_SLIDE';
var RWDSlideshow = function RWDSlideshow(_ref) {
  var _ref$gap = _ref.gap,
    gapProp = _ref$gap === void 0 ? 0 : _ref$gap,
    _ref$scrollSnap = _ref.scrollSnap,
    scrollSnap = _ref$scrollSnap === void 0 ? true : _ref$scrollSnap,
    _ref$hideArrows = _ref.hideArrows,
    hideArrows = _ref$hideArrows === void 0 ? false : _ref$hideArrows,
    _ref$showDots = _ref.showDots,
    showDots = _ref$showDots === void 0 ? false : _ref$showDots,
    _ref$dotColorActive = _ref.dotColorActive,
    dotColorActive = _ref$dotColorActive === void 0 ? 'rgb(255 255 255 / 100%)' : _ref$dotColorActive,
    _ref$dotColorInactive = _ref.dotColorInactive,
    dotColorInactive = _ref$dotColorInactive === void 0 ? 'rgb(255 255 255 / 44%)' : _ref$dotColorInactive,
    arrowLeft = _ref.arrowLeft,
    arrowRight = _ref.arrowRight,
    dot = _ref.dot,
    _ref$containerClassNa = _ref.containerClassName,
    containerClassName = _ref$containerClassNa === void 0 ? '' : _ref$containerClassNa,
    _ref$customContainerS = _ref.customContainerStyle,
    customContainerStyle = _ref$customContainerS === void 0 ? {} : _ref$customContainerS,
    _ref$slideClassName = _ref.slideClassName,
    slideClassName = _ref$slideClassName === void 0 ? '' : _ref$slideClassName,
    _ref$arrowContainerCl = _ref.arrowContainerClassName,
    arrowContainerClassName = _ref$arrowContainerCl === void 0 ? '' : _ref$arrowContainerCl,
    _ref$arrowWrapperClas = _ref.arrowWrapperClassName,
    arrowWrapperClassName = _ref$arrowWrapperClas === void 0 ? '' : _ref$arrowWrapperClas,
    _ref$arrowClassName = _ref.arrowClassName,
    arrowClassName = _ref$arrowClassName === void 0 ? '' : _ref$arrowClassName,
    _ref$dotWrapperClassN = _ref.dotWrapperClassName,
    dotWrapperClassName = _ref$dotWrapperClassN === void 0 ? '' : _ref$dotWrapperClassN,
    _ref$dotClassName = _ref.dotClassName,
    dotClassName = _ref$dotClassName === void 0 ? '' : _ref$dotClassName,
    onCurrentSlideChanged = _ref.onCurrentSlideChanged,
    children = _ref.children;
  var _useState = React.useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentSlide = _useState2[0],
    setCurrentSlide = _useState2[1];
  var _useState3 = React.useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    gap = _useState4[0],
    setGap = _useState4[1];
  var slideViewerRef = React.useRef(null);

  // Styles
  var styles = {
    RwdSlideshow: {
      position: 'relative'
    },
    RwdSlideViewer: {
      WebkitScrollbarWidth: 'none',
      MozScrollbarWidth: 'none',
      MsScrollbarWidth: 'none',
      scrollbarWidth: 'none',
      scrollSnapType: scrollSnap ? 'inline mandatory' : '',
      overflowY: 'hidden',
      overflowX: 'auto',
      scrollBehavior: 'smooth'
    },
    RwdSlideTray: {
      position: 'relative',
      display: 'grid',
      gridAutoColumns: '100%',
      gridAutoFlow: 'column',
      justifyContent: 'flex-start',
      gridColumnGap: "".concat(gap, "px"),
      overscrollBehaviorInline: 'contain',
      transition: 'left 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s'
    },
    SlideSet: {
      scrollSnapAlign: scrollSnap ? 'start' : '',
      scrollSnapStop: scrollSnap ? 'always' : ''
    },
    RwdSlideSelectorBar: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bottom: '20px',
      height: '10px',
      width: '100%',
      lineHeight: '10px',
      textAlign: 'center'
    }
  };
  React.useEffect(function () {
    onCurrentSlideChanged && onCurrentSlideChanged(currentSlide);
    slideViewerRef.current.scrollLeft = (slideViewerRef.current.offsetWidth + gap) * currentSlide;
  }, [currentSlide]);
  var slideList = React.useMemo(function () {
    return React__default["default"].Children.toArray(children).filter(function (child) {
      return child.type.displayName === RWD_SLIDESHOW_SLIDE;
    });
  }, [children]);
  var numberOfSlides = slideList.length;
  var slideSetList = React.useMemo(function () {
    return slideList.map(function (slide, index) {
      // wrapping the slide component
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "rwd-slide ".concat(slideClassName),
        style: styles.RwdSlide,
        key: index
      }, slide);
    });
  }, [slideList, scrollSnap]);
  React.useEffect(function () {
    setGap(gapProp);
    setCurrentSlide(0);
  }, [gapProp]);
  var handlePrev = React.useCallback(function () {
    setCurrentSlide(function (slideNumber) {
      return slideNumber - 1;
    });
  }, [numberOfSlides]);
  var handleNext = React.useCallback(function () {
    setCurrentSlide(function (slideNumber) {
      return slideNumber + 1;
    });
  }, [numberOfSlides]);
  var goToSlide = React.useCallback(function (slideNumber) {
    setCurrentSlide(slideNumber);
  }, []);
  var scrollLeftRef = React.useRef(0);
  var handleScroll = function handleScroll(e) {
    var scrollLeft = e.currentTarget.scrollLeft;
    var offsetWidth = e.currentTarget.offsetWidth;
    if (scrollLeft !== scrollLeftRef.current) {
      scrollLeftRef.current = scrollLeft;
      if (scrollLeftRef.current % (offsetWidth + gap) === 0) {
        setCurrentSlide(scrollLeftRef.current / (offsetWidth + gap));
      }
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("style", null, "\n          .rwd-slide-viewer::-webkit-scrollbar {\n            display:none;\n          }\n        "), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "rwd-slideshow ".concat(containerClassName),
    style: _objectSpread2(_objectSpread2({}, styles.RwdSlideshow), customContainerStyle)
  }, /*#__PURE__*/React__default["default"].createElement(Arrow, {
    type: "prev",
    hidden: hideArrows || currentSlide <= 0,
    CustomArrow: arrowLeft,
    arrowContainerClassName: "rwd-prev-slide ".concat(arrowContainerClassName),
    arrowWrapperClassName: arrowWrapperClassName,
    arrowClassName: arrowClassName,
    onClick: handlePrev
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    ref: slideViewerRef,
    style: styles.RwdSlideViewer,
    className: "rwd-slide-viewer",
    onScroll: handleScroll
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "rwd-slide-tray",
    style: styles.RwdSlideTray
  }, slideSetList.map(function (set, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      style: styles.SlideSet,
      key: index
    }, set);
  }))), showDots && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "rwd-slide-selector-bar",
    style: styles.RwdSlideSelectorBar
  }, _toConsumableArray(Array(numberOfSlides)).map(function (_, index) {
    return /*#__PURE__*/React__default["default"].createElement(Dot, {
      key: index,
      index: index,
      isActive: index === currentSlide,
      dotColorInactive: dotColorInactive,
      dotColorActive: dotColorActive,
      dotWrapperClassName: "rwd-dot-selector ".concat(dotWrapperClassName),
      dotClassName: dotClassName,
      dot: dot,
      onClick: goToSlide
    });
  })), /*#__PURE__*/React__default["default"].createElement(Arrow, {
    type: "next",
    hidden: hideArrows || currentSlide === numberOfSlides - 1,
    CustomArrow: arrowRight,
    arrowContainerClassName: "rwd-next-slide ".concat(arrowContainerClassName),
    arrowWrapperClassName: arrowWrapperClassName,
    arrowClassName: arrowClassName,
    onClick: handleNext
  })));
};
RWDSlideshow.Item = function (_ref2) {
  var children = _ref2.children;
  return children;
};
RWDSlideshow.Item.displayName = RWD_SLIDESHOW_SLIDE;

module.exports = RWDSlideshow;
