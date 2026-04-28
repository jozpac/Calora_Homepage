// Calora — Filled state (page 1 with real data logged)
// Same hero+macros+coach layout as page 1, but with progress filled,
// and Naposledy pridané showing a logged Banán under a "Večera" meal section.

// ── Hero with real data ──────────────────────────────────────
function HeroCardFilled({ tone = 'light' }) {
  const dark = tone === 'ink';
  const bg = dark ? PALETTE.ink : PALETTE.white;
  const title = dark ? PALETTE.cream : PALETTE.ink;
  const sub = dark ? 'rgba(253,242,228,0.9)' : PALETTE.inkSoft;
  const muted = dark ? 'rgba(253,242,228,0.55)' : PALETTE.muted;
  const track = dark ? 'rgba(255,255,255,0.12)' : PALETTE.creamDeep;
  return (
    <div style={{
      margin: '14px 20px 0', background: bg, borderRadius: 24,
      padding: '22px 22px', border: dark ? 'none' : `1px solid ${PALETTE.border}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      color: title,
    }}>
      <div>
        <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 56, lineHeight: 1, letterSpacing: '-1.5px', whiteSpace: 'nowrap' }}>2 464</div>
        <div style={{ fontSize: 18, color: sub, fontWeight: 600, marginTop: 8 }}>Kalórií zostáva</div>
        <div style={{ fontSize: 15, color: muted, marginTop: 2 }}>107 / 2 571 kcal</div>
      </div>
      <Ring size={96} stroke={8} pct={107/2571} color={PALETTE.orange} track={track}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill={dark ? PALETTE.cream : PALETTE.ink} />
        </svg>
      </Ring>
    </div>
  );
}

// ── Macros with real progress rings ─────────────────────────
function MacroCardsFilled() {
  const macros = [
    { name: 'Bielkoviny', val: 1,  goal: 193, color: PALETTE.plum, soft: PALETTE.plumSoft,
      icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 2c1 4 7 4 8 0v8c-1 4-7 4-8 0V2zm0 10c1 4 7 4 8 0v10H8V12z" fill={c}/></svg> },
    { name: 'Sacharidy',  val: 28, goal: 225, color: PALETTE.gold, soft: PALETTE.goldSoft,
      icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3c5 0 9 4 9 9 0 3-2 6-5 7-1-3-3-5-4-5s-3 2-4 5c-3-1-5-4-5-7 0-5 4-9 9-9z" fill={c}/></svg> },
    { name: 'Tuky',       val: 0,  goal: 100, color: PALETTE.teal, soft: PALETTE.tealSoft,
      icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3c3 4 6 7 6 11a6 6 0 1 1-12 0c0-4 3-7 6-11z" fill={c}/></svg> },
  ];
  return (
    <div style={{ margin: '12px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
      {macros.map((m, i) => (
        <div key={i} style={{
          background: PALETTE.white, borderRadius: 20, padding: '16px 10px 14px',
          border: `1px solid ${PALETTE.border}`, textAlign: 'center',
        }}>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 22, color: PALETTE.ink, lineHeight: 1 }}>
            {m.goal}<span style={{ fontSize: 13, color: PALETTE.muted, fontWeight: 600, marginLeft: 2 }}>g</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: PALETTE.inkSoft, marginTop: 4 }}>{m.name}</div>
          <div style={{ fontSize: 12, color: PALETTE.muted, marginTop: 2 }}>{m.val} / {m.goal} g</div>
          <div style={{ margin: '10px auto 0' }}>
            <Ring size={54} stroke={4} pct={m.val / m.goal} color={m.color} track={m.soft}>
              <div style={{
                width: 30, height: 30, borderRadius: '50%', background: m.soft,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ transform: 'scale(0.75)' }}>{m.icon(m.color)}</div>
              </div>
            </Ring>
          </div>
        </div>
      ))}
    </div>
  );
}

// Ink-variant macros — subtly different treatment (tiny rings on dark chips)
function MacroCardsFilledInk() {
  const macros = [
    { name: 'Bielkoviny', val: 1,  goal: 193, color: PALETTE.plum },
    { name: 'Sacharidy',  val: 28, goal: 225, color: PALETTE.gold },
    { name: 'Tuky',       val: 0,  goal: 100, color: PALETTE.teal },
  ];
  return (
    <div style={{ margin: '12px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
      {macros.map((m, i) => (
        <div key={i} style={{
          background: PALETTE.ink, borderRadius: 20, padding: '16px 10px 16px',
          color: PALETTE.cream, textAlign: 'center',
        }}>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1 }}>
            {m.goal}<span style={{ fontSize: 13, opacity: 0.6, fontWeight: 600, marginLeft: 2 }}>g</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4, opacity: 0.95 }}>{m.name}</div>
          <div style={{ fontSize: 12, opacity: 0.55, marginTop: 2 }}>{m.val} / {m.goal} g</div>
          <div style={{ margin: '12px auto 0' }}>
            <Ring size={46} stroke={4} pct={m.val / m.goal} color={m.color} track="rgba(255,255,255,0.12)">
              <div style={{ fontSize: 12, fontWeight: 700, color: m.color }}>{Math.round((m.val/m.goal)*100)}%</div>
            </Ring>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Naposledy pridané — logged meal state ────────────────────
function RecentSectionFilled() {
  return (
    <div style={{ margin: '16px 20px 0' }}>
      <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 22, color: PALETTE.ink, marginBottom: 12 }}>Naposledy pridané</div>

      {/* Meal header row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%', background: PALETTE.orangeSoft,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 14A8 8 0 1 1 10 4a7 7 0 0 0 10 10z" fill={PALETTE.orange}/></svg>
        </div>
        <div style={{ flex: 1, fontSize: 16, fontWeight: 700, color: PALETTE.ink }}>Večera</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: PALETTE.inkSoft }}>107 kcal</div>
      </div>

      {/* Logged food item */}
      <div style={{
        background: PALETTE.white, border: `1px solid ${PALETTE.border}`,
        borderRadius: 18, padding: '14px 16px',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 46, height: 46, borderRadius: 14, background: PALETTE.orangeSoft,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 2v8M10 2v8M7 10h3v12H7zM14 2c3 0 4 3 4 6s-1 6-4 6" stroke={PALETTE.orange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: PALETTE.ink }}>Banán</div>
          <div style={{ fontSize: 13, color: PALETTE.muted }}>Večera · 21:57 · 120 g</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
            {[
              { v: '1g',  c: PALETTE.plum },
              { v: '28g', c: PALETTE.gold },
              { v: '0g',  c: PALETTE.teal },
            ].map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: d.c }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: PALETTE.inkSoft }}>{d.v}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 20, fontWeight: 700, color: PALETTE.ink, lineHeight: 1 }}>
            107<span style={{ fontSize: 12, color: PALETTE.muted, fontWeight: 600, marginLeft: 2 }}>kcal</span>
          </div>
          <button style={{
            width: 24, height: 24, borderRadius: '50%', border: 'none',
            background: 'transparent', color: PALETTE.muted, cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke={PALETTE.muted} strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── A · Teplá — Filled state ────────────────────────────────
function HomeWarmFilled() {
  return (
    <div style={{ background: PALETTE.cream, width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingTop: 12, paddingBottom: 130, position: 'relative' }}>
      <HeroCardFilled tone="light" />
      <MacroCardsFilled />
      <CoachCardV2 accent={true} />
      <CarouselDots active={0} total={3} />
      <RecentSectionFilled />
      <div style={{ height: 24 }} />
      <FAB />
    </div>
  );
}

// ── B · Atramentové — Filled state ──────────────────────────
function HomeInkFilled() {
  return (
    <div style={{ background: PALETTE.cream, width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingTop: 12, paddingBottom: 130, position: 'relative' }}>
      <HeroCardFilled tone="ink" />
      <MacroCardsFilledInk />
      <CoachCardV2 accent={false} />
      <CarouselDots active={0} total={3} />
      <RecentSectionFilled />
      <div style={{ height: 24 }} />
      <FAB />
    </div>
  );
}

// ── C · Editorial — Filled state ────────────────────────────
function HomeEditorialFilled() {
  return (
    <div style={{ background: '#FAF3E4', width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingTop: 12, paddingBottom: 130, position: 'relative' }}>
      <div style={{
        margin: '14px 20px 0', background: PALETTE.white, borderRadius: 28,
        padding: '22px 24px', border: `1px solid ${PALETTE.border}`,
      }}>
        <div style={{ fontSize: 13, color: PALETTE.muted, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' }}>Dnes zostáva</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 60, color: PALETTE.ink, letterSpacing: '-1.8px', lineHeight: 1, whiteSpace: 'nowrap' }}>2 464</div>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, color: PALETTE.inkSoft, fontWeight: 500 }}>kcal</div>
        </div>
        <div style={{ marginTop: 14 }}>
          <Bar pct={107/2571} height={4} color={PALETTE.orange} track={PALETTE.creamDeep} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 14, color: PALETTE.muted }}>
          <span>Zjedol si <b style={{ color: PALETTE.ink, fontWeight: 700 }}>107 kcal</b></span>
          <span>Cieľ 2 571 kcal</span>
        </div>
      </div>
      <MacroCardsFilled />
      <CoachCardV2 accent={true} />
      <CarouselDots active={0} total={3} />
      <RecentSectionFilled />
      <div style={{ height: 24 }} />
      <FAB />
    </div>
  );
}

Object.assign(window, {
  HomeWarmFilled, HomeInkFilled, HomeEditorialFilled,
  HeroCardFilled, MacroCardsFilled, MacroCardsFilledInk, RecentSectionFilled,
});
