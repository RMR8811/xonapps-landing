import { useEffect, useMemo, useRef, useState } from 'react';
import ModuleCard from './components/ModuleCard';
import { MODULES } from './modules';
import { I18N, formatDate, type Lang } from './i18n';
import { BrandLogo } from './icons';
import './App.css';

function pad(n: number): string { return n < 10 ? `0${n}` : `${n}`; }

export default function App() {
  const [lang, setLang] = useState<Lang>('UZ');
  const [now, setNow] = useState(() => new Date());
  const glowRef = useRef<HTMLDivElement | null>(null);

  const pack = I18N[lang];

  // Soat — har 15 soniyada yangilaniadi
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15_000);
    return () => window.clearInterval(id);
  }, []);

  // Kursor yorug'ligi — requestAnimationFrame bilan lerp
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let raf = 0;
    const onMove = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      glow.style.left = `${cx}px`;
      glow.style.top = `${cy}px`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const dateLabel = useMemo(() => formatDate(now, lang), [now, lang]);
  const timeLabel = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  const liveCount = MODULES.filter((m) => m.status === 'live' || m.status === 'beta').length;
  const totalVisible = MODULES.filter((m) => m.variant !== 'empty').length;

  return (
    <>
      <div className="bg" aria-hidden>
        <div className="orb v1" />
        <div className="orb v2" />
        <div className="orb v3" />
        <div className="orb v4" />
      </div>
      <div className="cursor-glow" ref={glowRef} aria-hidden />

      <div className="shell">
        {/* HEADER */}
        <header className="top">
          <div className="brand">
            <div className="brand-mark" aria-hidden>{BrandLogo}</div>
            <div className="brand-text">
              <div className="brand-name">{pack.brandName}</div>
              <div className="brand-sub">{pack.brandSub}</div>
            </div>
          </div>

          <div className="top-right">
            <div className="chip clock-chip" aria-label="Vaqt va sana">
              <span className="dot" />
              <span className="clock">
                {pad(now.getHours())}
                <span className="clock-sep">:</span>
                {pad(now.getMinutes())}
              </span>
              <span className="chip__mid-dot">·</span>
              <span className="date">{dateLabel}</span>
            </div>

            <div className="lang-switch" role="tablist" aria-label="Til">
              {(['UZ', 'RU', 'EN'] as Lang[]).map((code) => (
                <button
                  key={code}
                  className={code === lang ? 'active' : ''}
                  onClick={() => setLang(code)}
                  aria-pressed={code === lang}
                >
                  {code}
                </button>
              ))}
            </div>

            <div className="avatar" title={pack.avatarTitle} aria-label={pack.avatarTitle}>
              BX
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-eyebrow">{pack.eyebrow}</div>
          <h1>
            {pack.heroLine1}
            <br />
            <span className="shine">{pack.heroLine2}</span>
          </h1>
          <p>{pack.heroDesc}</p>
          {/* timeLabel — reserve for future use, avoids unused lint if later needed */}
          <span style={{ display: 'none' }}>{timeLabel}</span>
        </section>

        {/* APPS */}
        <section className="apps-wrap">
          <div className="apps-head">
            <h2>{pack.panelTitle}</h2>
            <div className="count">
              {pack.countSuffix} · <b>{pad(liveCount)}</b> / {pad(totalVisible)}
            </div>
          </div>
          <div className="apps">
            {MODULES.map((m, i) => (
              <ModuleCard key={m.id} module={m} pack={pack} index={i} />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bot">
          <div className="sec">
            <span>{pack.footerCopyright}</span>
            <span className="divider" />
            <span>{pack.footerLocation}</span>
          </div>
          <div className="sec">
            <a href="#">{pack.footerHelp}</a>
            <span className="divider" />
            <a href="#">{pack.footerStatus}</a>
            <span className="divider" />
            <span className="version">v 2.6.1</span>
          </div>
        </footer>
      </div>
    </>
  );
}
