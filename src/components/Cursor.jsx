import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ring = useRef(null), inner = useRef(null), label = useRef(null), dot = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    document.body.classList.add('has-cursor');
    const mouse = { x: innerWidth / 2, y: innerHeight / 2 }, pos = { ...mouse };
    let raf;

    const move = (e) => {
      mouse.x = e.clientX; mouse.y = e.clientY;
      dot.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    };
    const over = (e) => {
      const t = e.target.closest?.('[data-cursor], a, button');
      const txt = t?.getAttribute('data-cursor');
      const el = inner.current;
      el.classList.toggle('is-label', !!txt);
      el.classList.toggle('is-link', !!t && !txt);
      label.current.textContent = txt || '';
      label.current.style.opacity = txt ? 1 : 0;
    };
    const down = () => inner.current.style.setProperty('--press', '.7');
    const up = () => inner.current.style.setProperty('--press', '1');
    const loop = () => {
      pos.x += (mouse.x - pos.x) * 0.14; pos.y += (mouse.y - pos.y) * 0.14;
      ring.current.style.transform = `translate(${pos.x}px,${pos.y}px)`;
      raf = requestAnimationFrame(loop);
    };

    addEventListener('mousemove', move); addEventListener('mouseover', over);
    addEventListener('mousedown', down); addEventListener('mouseup', up);
    loop();
    return () => {
      cancelAnimationFrame(raf); document.body.classList.remove('has-cursor');
      removeEventListener('mousemove', move); removeEventListener('mouseover', over);
      removeEventListener('mousedown', down); removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor" aria-hidden="true">
        <div ref={inner} className="cursor__ring" />
        <div ref={label} className="cursor__label mono" />
      </div>
      <div ref={dot} className="cursor__dot" aria-hidden="true" />
    </>
  );
}
