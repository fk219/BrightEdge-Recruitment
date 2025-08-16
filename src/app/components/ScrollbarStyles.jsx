'use client';

import { useEffect } from 'react';

export default function ScrollbarStyles({
  selector = 'body',
  track = 'rgba(0, 0, 0, 0.07)',
  thumb = 'linear-gradient(180deg, #1a2a6c, #2563eb)',
  thumbHover = 'linear-gradient(180deg, #1e3a8a, #1d4ed8)',
  width = '10px',
  radius = '8px',
}) {
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-scrollbar-styles', 'true');
    style.innerHTML = `
      ${selector} {
        scrollbar-width: thin;
        scrollbar-color: #2563eb ${track};
      }
      ${selector}::-webkit-scrollbar {
        width: ${width};
        height: ${width};
      }
      ${selector}::-webkit-scrollbar-track {
        background: ${track};
        border-radius: ${radius};
      }
      ${selector}::-webkit-scrollbar-thumb {
        background: ${thumb};
        border-radius: ${radius};
        border: 2px solid transparent;
        background-clip: padding-box;
      }
      ${selector}::-webkit-scrollbar-thumb:hover {
        background: ${thumbHover};
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [selector, track, thumb, thumbHover, width, radius]);

  return null;
}