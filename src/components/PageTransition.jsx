import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Ctx = createContext(() => {});
export const useGo = () => useContext(Ctx);

const N = 7;
const EASE = 'cubic-bezier(.76,0,.24,1)';

export function TransitionProvider({ enabled = true, children }) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState('idle'); // idle | in | out
  const busy = useRef(false);

  const go = useCallback((to) => {
    const route = () => { navigate(to); window.scrollTo(0, 0); };
    if (!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return route();
    if (busy.current) return;
    busy.current = true;
    setPhase('in');
    setTimeout(() => {
      route();
      setTimeout(() => {
        setPhase('out');
        setTimeout(() => { setPhase('idle'); busy.current = false; }, 1000);
      }, 200);
    }, 900);
  }, [enabled, navigate]);

  const panels = Array.from({ length: N }, (_, i) => {
    const fromCenter = Math.abs(i - (N - 1) / 2);
    const delay = phase === 'in' ? fromCenter * 0.06 : (3 - fromCenter) * 0.06;
    return {
      left: `${(i * 100) / N}vw`,
      width: `${100 / N + 0.2}vw`,
      transform: `translateY(${phase === 'idle' ? '-106vh' : phase === 'in' ? '0vh' : '106vh'})`,
      transition: phase === 'idle' ? 'none' : `transform .62s ${EASE} ${delay}s`,
    };
  });

  return (
    <Ctx.Provider value={go}>
      {children}
      <div className="curtain" aria-hidden="true">
        {panels.map((s, i) => <div key={i} className="curtain__panel" style={s} />)}
        <div
          className="curtain__overlay"
          style={{
            opacity: phase === 'in' ? 1 : 0,
            transition: phase === 'in' ? 'opacity .35s ease .45s' : 'opacity .2s ease',
          }}
        >
          <div className="arch" style={{ transform: `scale(${phase === 'in' ? 1 : 0.94})` }}>
            <div className="arch__inner" />
            <div className="arch__cross">✠</div>
            <div className="arch__corner arch__corner--l">✦</div>
            <div className="arch__corner arch__corner--r">✦</div>
            <div className="arch__fleuron">
              <span className="arch__rule arch__rule--l" /><span>❦</span><span className="arch__rule arch__rule--r" />
            </div>
            <span className="arch__name">lika</span>
            <div className="arch__foot"><span>☙</span><em>anno mmxxvi</em><span>❧</span></div>
          </div>
        </div>
      </div>
    </Ctx.Provider>
  );
}

/** Drop-in link that routes through the curtain transition. */
export function TLink({ to, className, children, ...rest }) {
  const go = useGo();
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        go(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
