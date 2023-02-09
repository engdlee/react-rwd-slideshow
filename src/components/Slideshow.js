import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Arrow from './controls/Arrow';
import Dot from './controls/Dot';

const RWD_SLIDESHOW_SLIDE = 'RWD_SLIDESHOW_SLIDE';
const RWDSlideshow = ({
  gap = 0,
  scrollSnap = true,
  hideArrows = false,
  showDots = false,
  dotColorActive = 'rgb(255 255 255 / 100%)',
  dotColorInactive = 'rgb(255 255 255 / 44%)',
  arrowLeft,
  arrowRight,
  dot,
  customContainerStyle = {},
  containerClassName = '',
  slideViewerClassName = '',
  slideTrayClassName = '',
  slideWrapperClassName = '',
  slideClassName = '',
  arrowContainerClassName = '',
  arrowWrapperClassName = '',
  arrowWrapperPrevClassName = '',
  arrowWrapperNextClassName = '',
  arrowClassName = '',
  dotWrapperClassName = '',
  dotClassName = '',
  onCurrentSlideChanged,
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dotClicked, setDotClicked] = useState(false);
  const slideViewerRef = useRef(null);

  // Styles
  const styles = {
    RwdSlideshow: {
      position: 'relative',
    },
    RwdSlideViewer: {
      WebkitScrollbarWidth: 'none',
      MozScrollbarWidth: 'none',
      MsScrollbarWidth: 'none',
      scrollbarWidth: 'none',

      scrollSnapType: scrollSnap ? 'inline mandatory' : '',
      overflowY: 'hidden',
      overflowX: 'auto',
      scrollBehavior: 'smooth',
    },
    RwdSlideTray: {
      position: 'relative',
      display: 'grid',
      gridAutoColumns: '100%',
      gridAutoFlow: 'column',
      justifyContent: 'flex-start',
      gridColumnGap: `${gap}px`,
      overscrollBehaviorInline: 'contain',
      transition: 'left 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s',
    },
    RwdSlideWrapper: {
      scrollSnapAlign: scrollSnap ? 'start' : '',
      scrollSnapStop: scrollSnap ? 'always' : '',
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
      textAlign: 'center',
    },
  };

  useEffect(() => {
    onCurrentSlideChanged && onCurrentSlideChanged(currentSlide);
    if (dotClicked) {
      slideViewerRef.current.scrollLeft = (slideViewerRef.current.offsetWidth + gap) * currentSlide;
    }
  }, [currentSlide, gap, onCurrentSlideChanged]);

  const slideList = useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child) => child.type.displayName === RWD_SLIDESHOW_SLIDE,
      ),
    [children],
  );

  const numberOfSlides = slideList.length;

  const slideSetList = useMemo(
    () =>
      slideList.map((slide, index) => {
        // wrapping the slide component
        return (
          <div className={`rwd-slide ${slideClassName}`} style={styles.RwdSlide} key={index}>
            {slide}
          </div>
        );
      }),

    [slideList, slideClassName, styles.RwdSlide],
  );

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const handlePrev = useCallback(() => {
    setDotClicked(true);
    setCurrentSlide((slideNumber) => {
      return slideNumber - 1;
    });
  }, []);

  const handleNext = useCallback(() => {
    setDotClicked(true);
    setCurrentSlide((slideNumber) => {
      return slideNumber + 1;
    });
  }, []);

  const goToSlide = useCallback((slideNumber) => {
    setDotClicked(true);
    setCurrentSlide(slideNumber);
  }, []);

  const scrollLeftRef = useRef(0);

  const handleScroll = (e) => {
    const scrollLeft = Math.round(e.currentTarget.scrollLeft);
    const offsetWidth = e.currentTarget.offsetWidth;

    if (scrollLeft !== scrollLeftRef.current) {
      scrollLeftRef.current = scrollLeft;
      if (!dotClicked) {
        setCurrentSlide(Math.round(scrollLeftRef.current / (offsetWidth + gap)));
      }
    }
  };
  const handleTouch = useCallback(() => {
    setDotClicked(false);
  }, [])

  return (
    <>
      <style>
        {`
          .rwd-slide-viewer::-webkit-scrollbar {
            display:none;
          }
        `}
      </style>
      <div
        className={`rwd-slideshow ${containerClassName}`}
        style={{ ...styles.RwdSlideshow, ...customContainerStyle }}
      >
        <Arrow
          type='prev'
          hidden={hideArrows || currentSlide <= 0}
          CustomArrow={arrowLeft}
          arrowContainerClassName={`rwd-prev-slide ${arrowContainerClassName}`}
          arrowWrapperClassName={`${arrowWrapperClassName} ${arrowWrapperPrevClassName}`}
          arrowClassName={arrowClassName}
          onClick={handlePrev}
        />
        <div
          ref={slideViewerRef}
          style={styles.RwdSlideViewer}
          className={`rwd-slide-viewer ${slideViewerClassName}`}
          onScroll={handleScroll}
        >
          <div className={`rwd-slide-tray ${slideTrayClassName}`} style={styles.RwdSlideTray}>
            {slideSetList.map((slideSet, index) => (
              <div
                onTouchStart={handleTouch}
                onTouchEnd={handleTouch}
                className={`rwd-slide-wrapper ${slideWrapperClassName}`} style={styles.RwdSlideWrapper} key={index}>
                {slideSet}
              </div>
            ))}
          </div>
        </div>
        {showDots && (
          <div className='rwd-slide-selector-bar' style={styles.RwdSlideSelectorBar}>
            {[...Array(numberOfSlides)].map((_, index) => (
              <Dot
                key={index}
                index={index}
                isActive={index === currentSlide}
                dotColorInactive={dotColorInactive}
                dotColorActive={dotColorActive}
                dotWrapperClassName={`rwd-dot-selector ${dotWrapperClassName}`}
                dotClassName={dotClassName}
                dot={dot}
                onClick={goToSlide}
              />
            ))}
          </div>
        )}
        <Arrow
          type='next'
          hidden={hideArrows || currentSlide === numberOfSlides - 1}
          CustomArrow={arrowRight}
          arrowContainerClassName={`rwd-next-slide ${arrowContainerClassName}`}
          arrowWrapperClassName={`${arrowWrapperClassName} ${arrowWrapperNextClassName}`}
          arrowClassName={arrowClassName}
          onClick={handleNext}
        />
      </div>
    </>
  );
};

RWDSlideshow.Item = ({ children }) => children;
RWDSlideshow.Item.displayName = RWD_SLIDESHOW_SLIDE;
export default RWDSlideshow;
