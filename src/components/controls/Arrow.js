import React from 'react';

export default function Arrow({
  type,
  hidden = false,
  CustomArrow,
  arrowContainerClassName = '',
  arrowWrapperClassName = '',
  arrowClassName = '',
  onClick,
}) {
  const ArrowWrapperStyle = {
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
    right: type === 'next' ? '5px' : 'initial',
  };
  const ArrowStyle = {
    height: '10px',
    width: '10px',
    background: 'transparent',
    borderTop: '2px solid #000',
    borderRight: '2px solid #000',
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform:
      type === 'prev'
        ? 'translate(-25%, -50%) rotate(-135deg)'
        : 'translate(-75%, -50%) rotate(45deg)',
  };
  return (
    <div className={arrowContainerClassName} hidden={hidden} onClick={onClick}>
      {CustomArrow ? (
        typeof CustomArrow === 'function' ? (
          <CustomArrow />
        ) : (
          CustomArrow
        )
      ) : (
        <div className={arrowWrapperClassName} style={ArrowWrapperStyle}>
          <div className={arrowClassName} style={ArrowStyle}></div>
        </div>
      )}
    </div>
  );
}
