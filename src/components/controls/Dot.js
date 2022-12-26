import React, { useCallback } from 'react';

export default function Dot({
  index,
  isActive = false,
  dotColorInactive,
  dotColorActive,
  dot: DotCustom,
  dotWrapperClassName = '',
  dotClassName = '',
  onClick,
}) {
  const handleClick = useCallback(() => {
    onClick(index);
  }, [index, onClick]);

  const DotWrapperStyle = {
    display: 'flex',
    margin: '0 5px',
    cursor: 'pointer',
  };
  const DefaultDotStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    boxShadow: 'rgb(0 0 0 / 44%) 0px 0px 5px 0px',
    background: isActive ? dotColorActive : dotColorInactive,
  };

  return (
    <div className={dotWrapperClassName} style={DotWrapperStyle} onClick={handleClick}>
      {DotCustom ? (
        <DotCustom isActive={isActive} />
      ) : (
        <div className={dotClassName} style={DefaultDotStyle} />
      )}
    </div>
  );
}
