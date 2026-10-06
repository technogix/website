import { useEffect, useId, useState } from 'react';

type Link = { href: string; label: string };
type Labels = { nav: string; open: string; close: string };

/** Burger menu for small screens. The desktop nav is plain HTML. */
export default function MobileNav({ links, labels }: { links: Link[]; labels: Labels }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="mnav">
      <button
        type="button"
        className="mnav__toggle"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="visually-hidden">{open ? labels.close : labels.open}</span>
        <span className={`mnav__icon${open ? ' is-open' : ''}`} aria-hidden="true" />
      </button>
      <nav id={menuId} className={`mnav__panel${open ? ' is-open' : ''}`} aria-label={labels.nav} hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <style>{`
        .mnav__toggle {
          display: inline-flex; align-items: center; justify-content: center;
          width: 2.75rem; height: 2.75rem; margin-right: -0.5rem;
          background: none; border: 0; border-radius: var(--radius); cursor: pointer;
        }
        .mnav__icon, .mnav__icon::before, .mnav__icon::after {
          display: block; width: 1.375rem; height: 2px; background: var(--ink);
          transition: transform 0.2s, background-color 0.2s;
        }
        .mnav__icon { position: relative; }
        .mnav__icon::before, .mnav__icon::after { content: ''; position: absolute; left: 0; }
        .mnav__icon::before { top: -7px; }
        .mnav__icon::after { top: 7px; }
        .mnav__icon.is-open { background: transparent; }
        .mnav__icon.is-open::before { transform: translateY(7px) rotate(45deg); }
        .mnav__icon.is-open::after { transform: translateY(-7px) rotate(-45deg); }
        .mnav__panel {
          position: absolute; left: 0; right: 0; top: 100%;
          background: var(--bg); border-bottom: 1px solid var(--line);
          box-shadow: 0 12px 24px rgb(14 34 48 / 0.08);
        }
        .mnav__panel ul { list-style: none; padding: 0.5rem var(--gutter) 1rem; }
        .mnav__panel a {
          display: block; padding: 0.75rem 0; border-bottom: 1px solid var(--line);
          color: var(--ink); text-decoration: none; font-weight: 500;
        }
        .mnav__panel li:last-child a { border-bottom: 0; color: var(--brand-ink); }
        @media (min-width: 60rem) { .mnav { display: none; } }
      `}</style>
    </div>
  );
}
