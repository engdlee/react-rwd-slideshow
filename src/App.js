import React, { useState, useCallback } from 'react';
import Carousel from './components/Carousel';

function App() {
  const randomImageUrl = 'https://picsum.photos/800/600?random=';
  const imgStyle = {
    height: '300px',
    width: '100%',
    borderRadius: '8px',
  };
  const wrapperStyle = {
    width: '425px',
    margin: '25px auto 50px',
  };

  const customDot = ({ isActive }) => (
    <div
      style={{
        height: isActive ? '10px' : '5px',
        width: isActive ? '10px' : '5px',
        background: '#000',
      }}
    />
  );

  const SingleColumn = () => {
    return (
      <Carousel gap={1} scrollSnap showDots dot={customDot}>
        {[...Array(5)].map((_, index) => (
          <Carousel.Item key={index}>
            <img src={`${randomImageUrl}${index}`} style={imgStyle} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };
  const ThreeColumn = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleChange = useCallback((currentSlide) => setCurrentSlide(currentSlide));
    return (
      <>
        {currentSlide}
        <Carousel gap={100} scrollSnap showDots onCurrentSlideChanged={handleChange}>
          {[...Array(5)].map((_, index) => (
            <Carousel.Item key={index}>
              <img src={`${randomImageUrl}${index}`} style={imgStyle} />
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    );
  };
  return (
    <div className='App'>
      <div style={wrapperStyle}>
        <SingleColumn />
      </div>
      <div style={wrapperStyle}>
        <ThreeColumn />
      </div>
    </div>
  );
}

export default App;
