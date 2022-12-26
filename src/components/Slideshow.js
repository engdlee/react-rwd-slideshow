import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Arrow from './controls/Arrow';
import Dot from './controls/Dot';

const RWD_SLIDESHOW_SLIDE = 'RWD_SLIDESHOW_SLIDE';
const RWDSlideshow = ({
  gap: gapProp = 0,
  scrollSnap = true,
  hideArrows = false,
  showDots = false,
  dotColorActive = 'rgb(255 255 255 / 100%)',
  dotColorInactive = 'rgb(255 255 255 / 44%)',
  arrowLeft,
  arrowRight,
  dot,
  containerClassName = '',
  customContainerStyle = {},
  slideClassName = '',
  arrowContainerClassName = '',
  arrowWrapperClassName = '',
  arrowClassName = '',
  dotWrapperClassName = '',
  dotClassName = '',
  onCurrentSlideChanged,
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gap, setGap] = useState(0);
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
    SlideSet: {
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
    slideViewerRef.current.scrollLeft = (slideViewerRef.current.offsetWidth + gap) * currentSlide;
  }, [currentSlide]);

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

    [slideList, scrollSnap],
  );

  useEffect(() => {
    setGap(gapProp);
    setCurrentSlide(0);
  }, [gapProp]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((slideNumber) => {
      return slideNumber - 1;
    });
  }, [numberOfSlides]);

  const handleNext = useCallback(() => {
    setCurrentSlide((slideNumber) => {
      return slideNumber + 1;
    });
  }, [numberOfSlides]);

  const goToSlide = useCallback((slideNumber) => {
    setCurrentSlide(slideNumber);
  }, []);

  const scrollLeftRef = useRef(0);

  const handleScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const offsetWidth = e.currentTarget.offsetWidth;

    if (scrollLeft !== scrollLeftRef.current) {
      scrollLeftRef.current = scrollLeft;
      if (scrollLeftRef.current % (offsetWidth + gap) === 0) {
        setCurrentSlide(scrollLeftRef.current / (offsetWidth + gap));
      }
    }
  };

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
          arrowWrapperClassName={arrowWrapperClassName}
          arrowClassName={arrowClassName}
          onClick={handlePrev}
        />
        <div
          ref={slideViewerRef}
          style={styles.RwdSlideViewer}
          className='rwd-slide-viewer'
          onScroll={handleScroll}
        >
          <div className='rwd-slide-tray' style={styles.RwdSlideTray}>
            {slideSetList.map((set, index) => (
              <div style={styles.SlideSet} key={index}>
                {set}
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
          arrowWrapperClassName={arrowWrapperClassName}
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