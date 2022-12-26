# React RWD Slideshow

A simple Slideshow, very customizable, works with arrows for changing slides and also with touch, so is ready for desktop, tablet and mobile. No dependencies!!

## Features

- Custom Controls
- Toggle Dots
- Toggle Arrows
- Any react component can be used as an Slide
- Custom classNames (tailwindCSS can be used)
- Gap support for spacing between slides
- SSR

## Install

```bash

$ npm install react-rwd-slideshow --save

```

## Use it

Import the `Slideshow` component from `react-grid-slideshow` and put your component/image/html/etc inside `Slideshow.Item`

```javascript
import React from 'react';
import Slideshow from 'react-grid-slideshow';

const Gallery = () => {
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
  return (
    <div style={wrapperStyle}>
      <Slideshow gap={100} scrollSnap showDots>
        <Slideshow.Item>
          <img width='100%' src='https://picsum.photos/800/600?random=1' />
        </Slideshow.Item>

        {[...Array(5)].map((_, index) => (
          <Slideshow.Item key={index}>
            <img src={`${randomImageUrl}${index}`} style={imgStyle} />
          </Slideshow.Item>
        ))}
      </Slideshow>
    </div>
  );
};
```

## Props

| Prop                    | Type     | Default                 | Description                                            |
| ----------------------- | -------- | ----------------------- | ------------------------------------------------------ |
| gap                     | Number   | 0                       | Space (grid-gap) for each slide in the slideshow in px |
| scrollSnap              | Boolean  | true                    | `true` for applying `scroll-snap` to slides            |
| hideArrow               | Boolean  | false                   | Show/hide the arrow prev/next arrows                   |
| showDots                | Boolean  | false                   | Show dots indicate the current slide                   |
| dotColorActive          | String   | rgb(255 255 255 / 100%) | Valid css color value for active dot                   |
| dotColorInactive        | String   | rgb(255 255 255 / 44%)  | Valid css color value for inactive dot                 |
| arrowLeft               | Element  |                         | Custom left arrow                                      |
| arrowRight              | Element  |                         | Custom right arrow                                     |
| dot                     | Element  |                         | Custom dot component with prop `isActive`              |
| customContainerStyle    | Object   |                         | Style object for slideshow container                   |
| slideViewerClassName    | String   |                         | Classname for the slide viewer                         |
| slideTrayClassName      | String   |                         | Classname for the slide tray                           |
| slideWrapperClassName   | String   |                         | Classname for the slide wrapper                        |
| slideClassName          | String   |                         | Classname for the slide                                |
| arrowContainerClassName | String   |                         | Classname for the arrow container                      |
| arrowWrapperClassName   | String   |                         | Classname for the arrow wrapper                        |
| arrowClassName          | String   |                         | Classname for the arrow                                |
| dotWrapperClassName     | String   |                         | Classname for the dot wrapper                          |
| dotClassName            | String   |                         | Classname for the dot selector                         |
| onCurrentSlideChanged   | Function |                         | Function to get the current Slide                      |

### Custom dot

```javascript
const customDot = ({ isActive }) => (
  <div
    style={{
      height: isActive ? '10px' : '5px',
      width: isActive ? '10px' : '5px',
      background: '#000'
    }}
  />
)

<Slideshow dot={customDot} />
```
