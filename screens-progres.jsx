// Calora — Progres screen (3 variants matching Home page A/B/C)

// Shared FloatingNav with Progres as active tab
function FloatingNavProgres() {
  const items = [
    { id: 'home', label: 'Prehľad',
      icon: (c) => <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z" stroke={c} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round"/></svg> },
    { id: 'progress', label: 'Progres', active: true,
      icon: (c) => <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="4" y="13" width="3.5" height="7" rx="1" fill={c}/><rect x="10.25" y="9" width="3.5" height="11" rx="1" fill={c}/><rect x="16.5" y="5" width="3.5" height="15" rx="1" fill={c}/></svg> },
    { id: 'coach', label: 'Tomáš', avatar: true },
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
          <div key={it.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            {it.avatar ? (
              <img src="tomas-avatar.png" alt="Tomáš" style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
            ) : on ? (
              <div style={{ width: 44, height: 44, borderRadius: 14, background: PALETTE.orangeSoft,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{it.icon(PALETTE.orange)}</div>
            ) : (
              <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{it.icon(color)}</div>
            )}
            <div style={{ fontSize: 13, fontWeight: on ? 800 : 600, color: on ? PALETTE.orange : PALETTE.inkSoft }}>{it.label}</div>
          </div>
        );
      })}
    </div>
  );
}

function ProgresHeader() {
  return (
    <div style={{ padding: '10px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 32, color: PALETTE.ink, letterSpacing: '-0.5px' }}>Progres</div>
      <button style={{
        background: PALETTE.orange, color: 'white', border: 'none',
        borderRadius: 999, padding: '10px 16px', fontWeight: 700, fontSize: 15,
        display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
        boxShadow: '0 6px 14px rgba(233,115,23,0.28)',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.6" strokeLinecap="round"/></svg>
        Zaznamenať
      </button>
    </div>
  );
}

// ── Weight card ─────────────────────────────────────────────
function WeightCard({ tone = 'light' }) {
  const dark = tone === 'ink';
  const bg = dark ? PALETTE.ink : PALETTE.white;
  const title = dark ? PALETTE.cream : PALETTE.ink;
  const muted = dark ? 'rgba(253,242,228,0.6)' : PALETTE.muted;
  const soft = dark ? 'rgba(253,242,228,0.85)' : PALETTE.inkSoft;
  return (
    <div style={{
      margin: '16px 20px 0', background: bg, borderRadius: 22,
      padding: '18px 20px 18px', border: dark ? 'none' : `1px solid ${PALETTE.border}`,
    }}>
      <div style={{ fontSize: 14, color: muted, fontWeight: 600 }}>Aktuálna váha</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 2 }}>
        <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 54, color: title, letterSpacing: '-1.5px', lineHeight: 1 }}>70</div>
        <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontSize: 22, color: soft, fontWeight: 500 }}>kg</div>
      </div>
      <div style={{ marginTop: 14, borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : PALETTE.borderSoft}`, paddingTop: 12, display: 'flex', justifyContent: 'space-between', fontSize: 14, color: muted }}>
        <span>Štart: <b style={{ color: title, fontWeight: 700 }}>70 kg</b></span>
        <span>Cieľ: <b style={{ color: title, fontWeight: 700 }}>70 kg</b></span>
      </div>
      <div style={{ fontSize: 14, color: muted, marginTop: 6 }}>Tvojím cieľom je udržať váhu.</div>
    </div>
  );
}

// ── BMI card with gradient bar ──────────────────────────────
function BMICard({ tone = 'light' }) {
  const dark = tone === 'ink';
  const bg = dark ? PALETTE.ink : PALETTE.white;
  const title = dark ? PALETTE.cream : PALETTE.ink;
  const muted = dark ? 'rgba(253,242,228,0.6)' : PALETTE.muted;

  // BMI 22.9 position on scale 15..35 → (22.9-15)/(35-15) = 39.5%
  const pos = ((22.9 - 15) / (35 - 15)) * 100;

  return (
    <div style={{
      margin: '14px 20px 0', background: bg, borderRadius: 22,
      padding: '18px 20px 20px', border: dark ? 'none' : `1px solid ${PALETTE.border}`,
    }}>
      <div style={{ fontSize: 14, color: muted, fontWeight: 600 }}>BMI hodnotenie</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 2 }}>
        <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 40, color: title, letterSpacing: '-1px', lineHeight: 1 }}>22.9</div>
        <span style={{
          fontSize: 13, fontWeight: 700, color: '#3F6A3C',
          background: '#D7E8BE', padding: '4px 12px', borderRadius: 999,
        }}>Norma</span>
      </div>
      <div style={{ marginTop: 16, position: 'relative' }}>
        <div style={{
          width: '100%', height: 10, borderRadius: 999,
          background: 'linear-gradient(90deg, #7FB2D6 0%, #7FB2D6 18%, #8CBF77 25%, #8CBF77 50%, #E1B26B 58%, #E1B26B 75%, #D77A5E 82%, #D77A5E 100%)',
        }} />
        <div style={{
          position: 'absolute', top: -4, left: `calc(${pos}% - 9px)`,
          width: 18, height: 18, borderRadius: '50%',
          background: dark ? PALETTE.ink : PALETTE.white, border: `2px solid ${title}`,
        }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 12, color: muted, fontWeight: 600, paddingLeft: '14%', paddingRight: '14%' }}>
          <span>18.5</span><span>25</span><span>30</span>
        </div>
      </div>
      <div style={{ fontSize: 14, color: muted, marginTop: 10, lineHeight: 1.45 }}>Tvoja váha je v zdravom rozsahu. Pokračuj vo svojich návykoch.</div>
    </div>
  );
}

// ── Weight trend chart (empty / flat) ───────────────────────
function WeightTrendCard({ tone = 'light' }) {
  const dark = tone === 'ink';
  const bg = dark ? PALETTE.ink : PALETTE.white;
  const title = dark ? PALETTE.cream : PALETTE.ink;
  const muted = dark ? 'rgba(253,242,228,0.55)' : PALETTE.muted;
  const grid = dark ? 'rgba(255,255,255,0.08)' : PALETTE.borderSoft;

  const ticks = [72, 71, 70, 69];
  return (
    <div style={{
      margin: '14px 20px 0', background: bg, borderRadius: 22,
      padding: '18px 20px 20px', border: dark ? 'none' : `1px solid ${PALETTE.border}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 22, color: title, letterSpacing: '-0.3px' }}>Vývoj váhy</div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          background: PALETTE.orangeSoft, color: PALETTE.orangeDeep,
          padding: '4px 10px', borderRadius: 999, fontSize: 13, fontWeight: 700,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 3v18M5 4h13l-3 4 3 4H5" stroke={PALETTE.orangeDeep} strokeWidth="2.2" strokeLinejoin="round"/></svg>
          0% <span style={{ fontWeight: 500 }}>z cieľa</span>
        </div>
      </div>
      <div style={{ marginTop: 14, position: 'relative', height: 160 }}>
        {ticks.map((t, i) => {
          const y = (i / (ticks.length - 1)) * 100;
          const isTarget = t === 70;
          return (
            <div key={t} style={{ position: 'absolute', left: 0, right: 0, top: `${y}%`, transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 26, fontSize: 12, color: muted, fontWeight: 600 }}>{t}</div>
              <div style={{
                flex: 1, height: 1,
                background: isTarget ? 'transparent' : grid,
                borderTop: isTarget ? `1.5px dashed ${dark ? 'rgba(233,115,23,0.4)' : PALETTE.orangeSoft}` : 'none',
              }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── A · Teplá neutrálna ─────────────────────────────────────
function ProgresWarm() {
  return (
    <div style={{ background: PALETTE.cream, width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130, position: 'relative' }}>
      <ProgresHeader />
      <WeightCard tone="light" />
      <BMICard tone="light" />
      <WeightTrendCard tone="light" />
      <div style={{ height: 24 }} />
    </div>
  );
}

// ── B · Atramentové hero ────────────────────────────────────
function ProgresInk() {
  return (
    <div style={{ background: PALETTE.cream, width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130, position: 'relative' }}>
      <ProgresHeader />
      <WeightCard tone="ink" />
      <BMICard tone="light" />
      <WeightTrendCard tone="light" />
      <div style={{ height: 24 }} />
    </div>
  );
}

// ── C · Editorial ───────────────────────────────────────────
function ProgresEditorial() {
  return (
    <div style={{ background: '#FAF3E4', width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130, position: 'relative' }}>
      <div style={{ padding: '10px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 12, color: PALETTE.muted, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' }}>Tvoja cesta</div>
          <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontWeight: 600, fontSize: 36, color: PALETTE.ink, letterSpacing: '-0.8px', marginTop: 2 }}>Progres</div>
        </div>
        <button style={{
          background: 'transparent', color: PALETTE.ink, border: `1.5px solid ${PALETTE.ink}`,
          borderRadius: 999, padding: '10px 16px', fontWeight: 700, fontSize: 14,
          display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke={PALETTE.ink} strokeWidth="2.6" strokeLinecap="round"/></svg>
          Zaznamenať
        </button>
      </div>
      <div style={{ margin: '18px 20px 0', background: PALETTE.white, borderRadius: 28, padding: '22px 24px', border: `1px solid ${PALETTE.border}` }}>
        <div style={{ fontSize: 13, color: PALETTE.muted, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' }}>Aktuálna váha</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 2 }}>
          <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontWeight: 600, fontSize: 64, color: PALETTE.ink, letterSpacing: '-2px', lineHeight: 1 }}>70</div>
          <div style={{ fontSize: 24, color: PALETTE.inkSoft, fontWeight: 500 }}>kg</div>
        </div>
        <div style={{ fontSize: 14, color: PALETTE.muted, marginTop: 10 }}>Tvojím cieľom je <b style={{ color: PALETTE.ink }}>udržať váhu</b>. Štart aj cieľ sú 70 kg.</div>
      </div>
      <BMICard tone="light" />
      <WeightTrendCard tone="light" />
      <div style={{ height: 24 }} />
    </div>
  );
}

Object.assign(window, {
  ProgresWarm, ProgresInk, ProgresEditorial, FloatingNavProgres,
});
