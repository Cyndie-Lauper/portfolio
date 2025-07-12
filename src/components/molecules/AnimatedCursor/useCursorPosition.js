import { useEffect, useState } from 'react';

export function useCursorPosition() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function moveCursor(e) {
      setCursor({ x: e.clientX, y: e.clientY });
    }
    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return cursor;
}
