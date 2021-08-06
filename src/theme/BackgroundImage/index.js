import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export default function Bubbles() {
  const themeContext = useContext(ThemeContext);
  const { color } = themeContext.colors.backgroundImage.main;
  const { contrastColor } = themeContext.colors.backgroundImage.main;

  return (
    <svg width="459" height="596" viewBox="0 0 459 596" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="275.5" cy="463.5" r="261.5" fill={contrastColor} />
      <circle cx="374" cy="277" r="213" fill={contrastColor} stroke={color} strokeWidth="64" />
      <circle cx="170" cy="170" r="138" fill={contrastColor} stroke={color} strokeWidth="64" />
    </svg>
  );
}
