import { useRef, type PointerEvent, type MouseEvent } from 'react';
import type { AppModule } from '../modules';
import type { LangPack } from '../i18n';
import { IconArrow } from '../icons';

interface Props {
  module: AppModule;
  pack: LangPack;
  index: number;
}

const STATUS_LABEL_KEY = {
  live: 'statusLive',
  beta: 'statusBeta',
  soon: 'statusSoon',
  planned: 'statusPlanned',
} as const;

const STATUS_CLASS = {
  live: '',
  beta: 'status--beta',
  soon: 'status--soon',
  planned: 'status--planned',
} as const;

export default function ModuleCard({ module: m, pack, index }: Props) {
  const cardRef = useRef<HTMLAnchorElement | HTMLDivElement | null>(null);
  const strings = pack.modules[m.i18nKey];
  const statusText = pack[STATUS_LABEL_KEY[m.status]];
  const statusCls = STATUS_CLASS[m.status];
  const className = `card ${m.variant}`;
  const canNavigate = m.status === 'live' || m.status === 'beta';

  // 3D tilt effekt — pointermove paytida perspective rotation
  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (0.5 - y) * 6;
    const ry = (x - 0.5) * 6;
    el.style.transform = `translateY(-6px) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const handlePointerLeave = (e: PointerEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.transform = '';
  };

  // Nozik flash — click paytida (placeholder kartka uchun)
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (!canNavigate) {
      e.preventDefault();
      (e.currentTarget as HTMLElement).animate(
        [{ filter: 'brightness(1)' }, { filter: 'brightness(1.35)' }, { filter: 'brightness(1)' }],
        { duration: 380, easing: 'ease-out' },
      );
    }
  };

  const body = (
    <>
      <div className="card-top">
        <div className="card-icon">{m.icon}</div>
        <div className="card-arrow">{IconArrow}</div>
      </div>
      <div className="card-tag">{strings.tag}</div>
      <h3 className="card-title" dangerouslySetInnerHTML={{ __html: strings.title }} />
      <p className="card-desc">{strings.desc}</p>
      <div className="card-foot">
        <span className={`status ${statusCls}`}>{statusText}</span>
        <span className="stat">
          {m.statLabel && strings.statSuffix ? (
            <>
              <b>{m.statLabel}</b> {strings.statSuffix}
            </>
          ) : m.statLabel ? (
            <>{m.statLabel}</>
          ) : null}
        </span>
      </div>
    </>
  );

  const animDelay: React.CSSProperties = { animationDelay: `${0.65 + index * 0.13}s` };

  if (canNavigate && m.href) {
    return (
      <a
        ref={cardRef as React.Ref<HTMLAnchorElement>}
        className={className}
        href={m.href}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
        style={animDelay}
      >
        {body}
      </a>
    );
  }

  return (
    <div
      ref={cardRef as React.Ref<HTMLDivElement>}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      style={animDelay}
      role="button"
      tabIndex={0}
    >
      {body}
    </div>
  );
}
