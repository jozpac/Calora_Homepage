// Calora — Page 3 (Voda + Kroky + Coach variant)

// ── Voda card ────────────────────────────────────────────────
function WaterCard({ tone = 'light' }) {
  const dark = tone === 'ink';
  const bg = dark ? PALETTE.ink : PALETTE.white;
  const title = dark ? PALETTE.cream : PALETTE.ink;
  const muted = dark ? 'rgba(253,242,228,0.55)' : PALETTE.muted;
  const chipBg = dark ? 'rgba(255,255,255,0.08)' : '#EAF2FB';
  const chipText = dark ? PALETTE.cream : '#3B6FB1';
  const accent = '#4C8DD6'; // a calm water blue — kept only inside this card

  return (
    <div style={{
      margin: '14px 20px 0', background: bg, borderRadius: 22,
      padding: '18px 20px 18px',
      border: dark ? 'none' : `1px solid ${PALETTE.border}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 30, height: 30, borderRadius: 10, background: dark ? 'rgba(76,141,214,0.25)' : '#E6EFFA',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 3c4 5 7 8 7 12a7 7 0 1 1-14 0c0-4 3-7 7-12z" stroke={accent} strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ flex: 1, fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 20, color: title, letterSpacing: '-0.2px' }}>Voda</div>
        <button style={{
          width: 30, height: 30, borderRadius: '50%', border: 'none',
          background: 'transparent', color: muted, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" stroke={muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 10 }}>
        <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 40, color: title, letterSpacing: '-1px', lineHeight: 1 }}>0,00 l</div>
        <div style={{ fontSize: 16, color: muted, fontWeight: 600 }}>/ 2,5 l</div>
      </div>
      <div style={{ marginTop: 12 }}>
        <Bar pct={0} height={4} color={accent} track={dark ? 'rgba(255,255,255,0.1)' : '#E6EFFA'} />
      </div>
      <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {[
          { label: '+250 ml', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 7h14v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V7zm14 0h2a2 2 0 0 1 0 4h-2" stroke={chipText} strokeWidth="1.8" strokeLinejoin="round"/></svg> },
          { label: '+500 ml', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3c4 5 7 8 7 12a7 7 0 1 1-14 0c0-4 3-7 7-12z" stroke={chipText} strokeWidth="1.8" strokeLinejoin="round"/></svg> },
          { label: '+750 ml', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3c4 5 7 8 7 12a7 7 0 1 1-14 0c0-4 3-7 7-12z" fill={chipText} opacity="0.7"/></svg> },
        ].map((c, i) => (
          <div key={i} style={{
            background: chipBg, color: chipText, borderRadius: 999,
            padding: '10px 10px', textAlign: 'center', fontSize: 14, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            {c.icon}<span>{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Kroky card ──────────────────────────────────────────────
function StepsCard({ tone = 'light' }) {
  const dark = tone === 'ink';
  const bg = dark ? PALETTE.ink : PALETTE.white;
  const title = dark ? PALETTE.cream : PALETTE.ink;
  const muted = dark ? 'rgba(253,242,228,0.55)' : PALETTE.muted;
  return (
    <div style={{
      margin: '14px 20px 0', background: bg, borderRadius: 22,
      padding: '18px 20px 18px',
      border: dark ? 'none' : `1px solid ${PALETTE.border}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 30, height: 30, borderRadius: 10,
          background: dark ? 'rgba(233,115,23,0.2)' : PALETTE.orangeSoft,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="13" cy="4.5" r="2" fill={PALETTE.orange}/>
            <path d="M7 20l3-6 3 2 2-3 3 3" stroke={PALETTE.orange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ flex: 1, fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 20, color: title, letterSpacing: '-0.2px' }}>Kroky</div>
        <button style={{
          width: 30, height: 30, borderRadius: '50%', border: 'none',
          background: 'transparent', color: muted, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 17l4-1 10-10-3-3L4 13l-1 4zM14 6l3 3" stroke={muted} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/></svg>
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 10 }}>
        <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 40, color: title, letterSpacing: '-1px', lineHeight: 1 }}>0</div>
        <div style={{ fontSize: 16, color: muted, fontWeight: 600 }}>/ 10 000</div>
      </div>
      <div style={{ marginTop: 12 }}>
        <Bar pct={0} height={4} color={PALETTE.orange} track={dark ? 'rgba(255,255,255,0.1)' : PALETTE.orangeSoft} />
      </div>
    </div>
  );
}

// ── Tomáš coach card — Page-3 variant (longer message) ─────
function CoachCardV3({ accent = true }) {
  const outline = accent ? PALETTE.orange : PALETTE.border;
  return (
    <div style={{
      margin: '14px 20px 0', background: PALETTE.white,
      border: `1.5px solid ${outline}`, borderRadius: 22, padding: '16px 18px 16px',
      boxShadow: accent ? `0 0 0 4px ${PALETTE.orangeSoft}55` : undefined,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        <img src="tomas-avatar.png" alt="Tomáš" style={{
          width: 44, height: 44, borderRadius: '50%',
          objectFit: 'cover', display: 'block',
          border: `2px solid ${PALETTE.orangeSoft}`,
        }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 18, color: PALETTE.ink }}>Tomáš AI</span>
            <span style={{ color: PALETTE.gold, fontSize: 14 }}>★</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: PALETTE.muted }}>Tvoj osobný kouč</div>
        </div>
        <button style={{
          width: 34, height: 34, borderRadius: '50%',
          border: 'none', background: PALETTE.orange,
          color: PALETTE.white, fontSize: 15, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      <div style={{ fontSize: 15, lineHeight: '22px', color: PALETTE.ink }}>
        Skvelý začiatok dňa! Skús si teraz naliať pohár vody a vypiť ho, aby si sa priblížil k svojmu cieľu. Po obede si naplánuj <b>15-minútovú prechádzku</b>, ktorá ti pomôže dosiahnuť cieľ 10 000 krokov. Držím palce!
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12 }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: PALETTE.creamDeep }} />
        <span style={{ width: 6, height: 6, borderRadius: 999, background: PALETTE.creamDeep }} />
        <span style={{ width: 22, height: 6, borderRadius: 999, background: PALETTE.orange }} />
      </div>
    </div>
  );
}

// ── A · Teplá neutrálna — Page 3 ────────────────────────────
function HomeWarm3() {
  return (
    <div style={{ background: PALETTE.cream, width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130, position: 'relative' }}>
      <Header />
      <DateStrip />
      <WaterCard tone="light" />
      <StepsCard tone="light" />
      <CoachCardV3 accent={true} />
      <CarouselDots active={2} total={3} />
      <div style={{ margin: '18px 20px 0', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 22, color: PALETTE.ink }}>Naposledy pridané</div>
      <div style={{ height: 24 }} />
      <FAB />
    </div>
  );
}

// ── B · Atramentové — Page 3 ────────────────────────────────
function HomeInk3() {
  return (
    <div style={{ background: PALETTE.cream, width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130, position: 'relative' }}>
      <Header />
      <DateStrip />
      <WaterCard tone="ink" />
      <StepsCard tone="light" />
      <CoachCardV3 accent={false} />
      <CarouselDots active={2} total={3} />
      <div style={{ margin: '18px 20px 0', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 22, color: PALETTE.ink }}>Naposledy pridané</div>
      <div style={{ height: 24 }} />
      <FAB />
    </div>
  );
}

// ── C · Editorial — Page 3 ──────────────────────────────────
function HomeEditorial3() {
  const waterBlue = '#4C8DD6';
  return (
    <div style={{ background: '#FAF3E4', width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130, position: 'relative' }}>
      <Header />
      <DateStrip />

      {/* Editorial water: oversized numeric with caps label, thin bar, chips become outlined ghosts */}
      <div style={{
        margin: '14px 20px 0', background: PALETTE.white, borderRadius: 28,
        padding: '22px 24px 22px', border: `1px solid ${PALETTE.border}`,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 13, color: PALETTE.muted, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' }}>Voda · dnes</div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" stroke={PALETTE.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 52, color: PALETTE.ink, letterSpacing: '-1.5px', lineHeight: 1 }}>0,00</div>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 20, color: PALETTE.inkSoft, fontWeight: 500 }}>l · z 2,5 l</div>
        </div>
        <div style={{ marginTop: 14 }}>
          <Bar pct={0} height={3} color={waterBlue} track={PALETTE.creamDeep} />
        </div>
        <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {['+250 ml', '+500 ml', '+750 ml'].map((l, i) => (
            <div key={i} style={{
              background: 'transparent', color: waterBlue, borderRadius: 999,
              padding: '9px 6px', textAlign: 'center', fontSize: 13, fontWeight: 700,
              border: `1.5px solid ${waterBlue}33`,
            }}>{l}</div>
          ))}
        </div>
      </div>

      {/* Editorial steps: borderless, number + caps label */}
      <div style={{
        margin: '14px 20px 0', background: PALETTE.white, borderRadius: 28,
        padding: '22px 24px 22px', border: `1px solid ${PALETTE.border}`,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 13, color: PALETTE.muted, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' }}>Kroky · dnes</div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 17l4-1 10-10-3-3L4 13l-1 4zM14 6l3 3" stroke={PALETTE.muted} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/></svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 52, color: PALETTE.ink, letterSpacing: '-1.5px', lineHeight: 1 }}>0</div>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 20, color: PALETTE.inkSoft, fontWeight: 500 }}>z 10 000</div>
        </div>
        <div style={{ marginTop: 14 }}>
          <Bar pct={0} height={3} color={PALETTE.orange} track={PALETTE.creamDeep} />
        </div>
      </div>

      <CoachCardV3 accent={true} />
      <CarouselDots active={2} total={3} />
      <div style={{ margin: '18px 20px 0', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 22, color: PALETTE.ink }}>Naposledy pridané</div>
      <div style={{ height: 24 }} />
      <FAB />
    </div>
  );
}

Object.assign(window, {
  HomeWarm3, HomeInk3, HomeEditorial3,
  WaterCard, StepsCard, CoachCardV3,
});
