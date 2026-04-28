// Calora — Coach / Tomáš screen (3 variants matching Home/Progres A/B/C)
// Empty-state chat: avatar hero + intro bubble + suggested prompts + composer.

// ── Shared FloatingNav with Coach as active ─────────────────
function FloatingNavCoach() {
  const items = [
    { id: 'home', label: 'Prehľad',
      icon: (c) => <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z" stroke={c} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round"/></svg> },
    { id: 'progress', label: 'Progres',
      icon: (c) => <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="4" y="13" width="3.5" height="7" rx="1" fill={c}/><rect x="10.25" y="9" width="3.5" height="11" rx="1" fill={c}/><rect x="16.5" y="5" width="3.5" height="15" rx="1" fill={c}/></svg> },
    { id: 'coach', label: 'Tomáš', avatar: true, active: true },
    { id: 'settings', label: 'Nastavenia',
      icon: (c) => <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke={c} strokeWidth="2.2"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14 3h-4l-.6 2.6a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2 1.2L10 21h4l.6-2.6a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z" stroke={c} strokeWidth="1.9" strokeLinejoin="round"/></svg> },
  ];
  return (
    <div style={{
      position: 'absolute', left: 12, right: 12, bottom: 18, zIndex: 1,
      background: PALETTE.cream, border: `1px solid ${PALETTE.border}`,
      borderRadius: 999, padding: '12px 14px',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      boxShadow: '0 10px 28px rgba(74,45,30,0.12)', alignItems: 'center',
    }}>
      {items.map(it => {
        const on = it.active;
        const color = on ? PALETTE.orange : PALETTE.inkSoft;
        return (
          <div key={it.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
            {it.avatar ? (
              <div style={{ position: 'relative' }}>
                <img src="tomas-avatar.png" alt="Tomáš" style={{
                  width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', display: 'block',
                  outline: on ? `2.5px solid ${PALETTE.orange}` : 'none', outlineOffset: on ? 2 : 0,
                }} />
              </div>
            ) : (
              <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{it.icon(color)}</div>
            )}
            <div style={{ fontSize: 13, fontWeight: on ? 800 : 600, color: on ? PALETTE.orange : PALETTE.inkSoft, textAlign: 'left' }}>{it.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// ── Icons ───────────────────────────────────────────────────
const IconEdit = ({ c = '#2A1A14' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M4 20h4l10-10-4-4L4 16v4z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M13.5 6.5l4 4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconMenu = ({ c = '#2A1A14' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M4 7h16M4 12h16M4 17h16" stroke={c} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconSend = ({ c = '#2A1A14' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 19V5M5 12l7-7 7 7" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconSparkle = ({ c = '#C88A2E' }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill={c}/>
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" fill={c}/>
  </svg>
);

// ── Compact top bar (name + status) ─────────────────────────
function CoachTopBar({ tone = 'light' }) {
  const dark = tone === 'ink';
  const fg = dark ? PALETTE.cream : PALETTE.ink;
  const sub = dark ? 'rgba(253,242,228,0.7)' : PALETTE.inkSoft;
  const chip = dark ? 'rgba(253,242,228,0.12)' : 'rgba(42,26,20,0.06)';
  const chipBorder = dark ? 'rgba(253,242,228,0.18)' : PALETTE.border;
  return (
    <div style={{
      padding: '10px 16px 14px', display: 'flex', alignItems: 'center',
      gap: 12, borderBottom: `1px solid ${dark ? 'rgba(253,242,228,0.1)' : PALETTE.borderSoft}`,
    }}>
      <button style={{
        width: 38, height: 38, borderRadius: '50%', background: chip,
        border: `1px solid ${chipBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', padding: 0,
      }}><IconMenu c={fg} /></button>
      <img src="tomas-avatar.png" alt="" style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover' }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: fg, lineHeight: 1.1 }}>Tomáš</div>
        <div style={{ fontSize: 12, color: sub, display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
          Osobný AI kouč
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: sub, opacity: 0.6 }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4CAF50' }} />
            online
          </span>
        </div>
      </div>
      <button style={{
        width: 38, height: 38, borderRadius: '50%', background: chip,
        border: `1px solid ${chipBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', padding: 0,
      }}><IconEdit c={fg} /></button>
    </div>
  );
}

// ── Avatar hero (large) ─────────────────────────────────────
function CoachHero({ tone = 'light', tagline = 'Tvoj osobný AI kouč' }) {
  const dark = tone === 'ink';
  const fg = dark ? PALETTE.cream : PALETTE.ink;
  const sub = dark ? 'rgba(253,242,228,0.7)' : PALETTE.inkSoft;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '18px 20px 6px' }}>
      <div style={{ position: 'relative' }}>
        <img src="tomas-avatar.png" alt="Tomáš" style={{
          width: 104, height: 104, borderRadius: '50%', objectFit: 'cover',
          border: `3px solid ${dark ? PALETTE.cream : PALETTE.white}`,
          boxShadow: '0 10px 24px rgba(74,45,30,0.18)',
        }} />
        <span style={{
          position: 'absolute', right: 4, bottom: 6, width: 18, height: 18, borderRadius: '50%',
          background: '#4CAF50', border: `3px solid ${dark ? PALETTE.ink : PALETTE.cream}`,
        }} />
      </div>
      <div style={{
        fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
        fontWeight: 700, fontSize: 28, color: fg, marginTop: 14, letterSpacing: '-0.4px',
        textAlign: 'left',
      }}>Tomáš</div>
      <div style={{ fontSize: 14, color: sub, marginTop: 2, textAlign: 'left' }}>{tagline}</div>
    </div>
  );
}

// ── Intro bubble ────────────────────────────────────────────
function IntroBubble({ tone = 'light' }) {
  const dark = tone === 'ink';
  const bg = dark ? 'rgba(253,242,228,0.08)' : PALETTE.white;
  const border = dark ? 'rgba(253,242,228,0.18)' : PALETTE.border;
  const fg = dark ? PALETTE.cream : PALETTE.ink;
  return (
    <div style={{
      margin: '14px 20px 0', background: bg, border: `1px solid ${border}`,
      borderRadius: 20, padding: '14px 16px', color: fg, fontSize: 15, lineHeight: 1.5,
    }}>
      Ahoj! Som Tomáš, tvoj osobný kouč. Vidím tvoje dáta z Calory, takže ti viem dať rady
      šité priamo na teba. Opýtaj sa ma na čokoľvek — od jedla po progres.
    </div>
  );
}

// ── Suggested prompts ───────────────────────────────────────
const PROMPTS = [
  'Ako mi ide tento týždeň?',
  'Čo by som mala dnes na večeru?',
  'Mám dosť bielkovín?',
  'Tip na zdravý snack',
];

function SuggestedPrompts({ tone = 'light', variant = 'outline' }) {
  const dark = tone === 'ink';
  const labelColor = dark ? 'rgba(253,242,228,0.65)' : PALETTE.muted;
  return (
    <div style={{ margin: '18px 20px 0' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10,
        fontSize: 11, fontWeight: 800, letterSpacing: 1.4, textTransform: 'uppercase',
        color: labelColor,
      }}>
        <IconSparkle c={dark ? PALETTE.gold : PALETTE.gold} />
        Navrhované otázky
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {PROMPTS.map(p => {
          let style;
          if (variant === 'outline') {
            style = {
              background: dark ? 'rgba(233,115,23,0.08)' : PALETTE.white,
              border: `1.5px solid ${PALETTE.orange}`,
              color: dark ? PALETTE.cream : PALETTE.orangeDeep,
            };
          } else if (variant === 'filled') {
            style = {
              background: PALETTE.orangeSoft,
              border: `1px solid ${PALETTE.orangeSoft}`,
              color: PALETTE.orangeDeep,
            };
          } else { // editorial — underlined serif-ish
            style = {
              background: 'transparent',
              border: `1px solid ${PALETTE.border}`,
              color: PALETTE.ink,
            };
          }
          return (
            <button key={p} style={{
              ...style,
              borderRadius: variant === 'editorial' ? 14 : 999,
              padding: '12px 16px', textAlign: 'left', fontWeight: 600, fontSize: 14.5,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontFamily: 'inherit',
            }}>
              <span>{p}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.5 }}>
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Composer ────────────────────────────────────────────────
function Composer({ tone = 'light' }) {
  const dark = tone === 'ink';
  const bg = dark ? 'rgba(253,242,228,0.08)' : PALETTE.white;
  const border = dark ? 'rgba(253,242,228,0.18)' : PALETTE.border;
  const placeholder = dark ? 'rgba(253,242,228,0.55)' : PALETTE.muted;
  return (
    <div style={{
      margin: '18px 20px 0', background: bg, border: `1px solid ${border}`,
      borderRadius: 999, padding: '6px 6px 6px 18px',
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <div style={{ flex: 1, fontSize: 15, color: placeholder, padding: '10px 0' }}>
        Napíš Tomášovi…
      </div>
      <button style={{
        width: 38, height: 38, borderRadius: '50%',
        background: PALETTE.orange, border: 'none', display: 'flex',
        alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0,
        boxShadow: '0 4px 10px rgba(233,115,23,0.35)',
      }}>
        <IconSend c="white" />
      </button>
    </div>
  );
}

// ── A · Teplá neutrálna ─────────────────────────────────────
function CoachWarm() {
  return (
    <div style={{
      background: PALETTE.cream, width: '100%', height: '100%',
      fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif",
      color: PALETTE.ink, display: 'flex', flexDirection: 'column',
      paddingBottom: 130, position: 'relative',
    }}>
      <CoachTopBar tone="light" />
      <CoachHero tone="light" />
      <IntroBubble tone="light" />
      <SuggestedPrompts tone="light" variant="outline" />
      <Composer tone="light" />
      <div style={{ height: 24 }} />
    </div>
  );
}

// ── B · Atramentové hero ────────────────────────────────────
function CoachInk() {
  return (
    <div style={{
      background: PALETTE.cream, width: '100%', height: '100%',
      fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif",
      color: PALETTE.ink, display: 'flex', flexDirection: 'column',
      paddingBottom: 130, position: 'relative',
    }}>
      {/* Ink hero block */}
      <div style={{ background: PALETTE.ink, borderRadius: '0 0 28px 28px', paddingBottom: 20 }}>
        <CoachTopBar tone="ink" />
        <CoachHero tone="ink" />
        <IntroBubble tone="ink" />
      </div>
      <SuggestedPrompts tone="light" variant="filled" />
      <Composer tone="light" />
      <div style={{ height: 24 }} />
    </div>
  );
}

// ── C · Editorial ───────────────────────────────────────────
function CoachEditorial() {
  return (
    <div style={{
      background: '#FAF3E4', width: '100%', height: '100%',
      fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif",
      color: PALETTE.ink, display: 'flex', flexDirection: 'column',
      paddingBottom: 130, position: 'relative',
    }}>
      {/* Editorial header — no chrome, labels + large type */}
      <div style={{ padding: '14px 22px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 12, color: PALETTE.muted, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' }}>
            Rozhovor · {new Date().toLocaleDateString('sk-SK', { day: 'numeric', month: 'long' })}
          </div>
          <button style={{
            width: 34, height: 34, borderRadius: '50%', background: 'transparent',
            border: `1px solid ${PALETTE.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', padding: 0,
          }}><IconEdit c={PALETTE.ink} /></button>
        </div>
        <div style={{
          display: 'flex', alignItems: 'flex-end', gap: 14, marginTop: 10,
        }}>
          <img src="tomas-avatar.png" alt="" style={{
            width: 72, height: 72, borderRadius: '50%', objectFit: 'cover',
            border: `2px solid ${PALETTE.white}`,
          }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
              fontWeight: 600, fontSize: 40, color: PALETTE.ink, letterSpacing: '-1.2px', lineHeight: 0.95,
            }}>Tomáš</div>
            <div style={{ fontSize: 13, color: PALETTE.muted, marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4CAF50' }} />
              Online · Osobný AI kouč
            </div>
          </div>
        </div>
      </div>

      {/* Big pull-quote intro */}
      <div style={{ padding: '14px 22px 0' }}>
        <div style={{
          fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
          fontWeight: 500, fontSize: 20, color: PALETTE.ink, lineHeight: 1.35,
          letterSpacing: '-0.2px', borderLeft: `3px solid ${PALETTE.orange}`, paddingLeft: 14,
        }}>
          „Vidím tvoje dáta z Calory — pýtaj sa ma na čokoľvek, od jedla po progres.&quot;
        </div>
      </div>

      <SuggestedPrompts tone="light" variant="editorial" />
      <Composer tone="light" />
      <div style={{ height: 24 }} />
    </div>
  );
}

Object.assign(window, {
  CoachWarm, CoachInk, CoachEditorial, FloatingNavCoach,
});
