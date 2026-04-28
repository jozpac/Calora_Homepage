// Calora — Page 2 (Mikroživiny + Kvalita stravy + Coach variant)
// Same palette and atomic grammar as page 1; only the middle-stack content differs.

// ── Mikroživiny card ─────────────────────────────────────────
function MicronutrientsCard({ tone = 'light' }) {
  // tone: 'light' (white card) | 'ink' (inverted dark card)
  const dark = tone === 'ink';
  const rows = [
    { name: 'Vláknina',  val: 0, goal: 36,    unit: 'g',      color: PALETTE.sage, soft: PALETTE.sageSoft,
      icon: (c) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2c4 4 8 6 8 11a8 8 0 1 1-16 0c0-5 4-7 8-11z" stroke={c} strokeWidth="2" strokeLinejoin="round"/><path d="M12 6v14" stroke={c} strokeWidth="1.6"/></svg> },
    { name: 'Cukor',     val: 0, goal: 64,    unit: 'g max',  color: PALETTE.plum, soft: PALETTE.plumSoft,
      icon: (c) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke={c} strokeWidth="2"/><path d="M12 7v5l3 2" stroke={c} strokeWidth="2" strokeLinecap="round"/></svg> },
    { name: 'Soľ (sodík)', val: 0, goal: 2000, unit: 'mg max', color: PALETTE.teal, soft: PALETTE.tealSoft,
      icon: (c) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke={c} strokeWidth="2"/><circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.2" opacity="0.5"/></svg> },
  ];

  const bg = dark ? PALETTE.ink : PALETTE.white;
  const title = dark ? PALETTE.cream : PALETTE.ink;
  const muted = dark ? 'rgba(253,242,228,0.55)' : PALETTE.muted;
  const track = dark ? 'rgba(255,255,255,0.1)' : undefined;

  return (
    <div style={{
      margin: '14px 20px 0', background: bg, borderRadius: 22,
      padding: '18px 20px 18px',
      border: dark ? 'none' : `1px solid ${PALETTE.border}`,
    }}>
      <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 22, color: title, letterSpacing: '-0.3px' }}>Mikroživiny</div>
      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {rows.map((r, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 26, height: 26, borderRadius: 8, background: r.soft,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>{r.icon(r.color)}</div>
              <div style={{ flex: 1, fontSize: 16, fontWeight: 700, color: title }}>{r.name}</div>
              <div style={{ fontSize: 16, color: muted, fontWeight: 600 }}>
                <b style={{ color: title, fontWeight: 700 }}>{r.val}</b> / {r.goal.toLocaleString('sk-SK').replace(/\u202f/g, ' ')} {r.unit}
              </div>
            </div>
            <div style={{ marginTop: 8 }}>
              <Bar pct={0} height={4} color={r.color} track={track || r.soft} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Kvalita stravy card ─────────────────────────────────────
function DietQualityCard({ tone = 'light' }) {
  const dark = tone === 'ink';
  const bg = dark ? PALETTE.ink : PALETTE.white;
  const title = dark ? PALETTE.cream : PALETTE.ink;
  const sub = dark ? 'rgba(253,242,228,0.6)' : PALETTE.muted;
  return (
    <div style={{
      margin: '14px 20px 0', background: bg, borderRadius: 22,
      padding: '16px 18px', border: dark ? 'none' : `1px solid ${PALETTE.border}`,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <Ring size={64} stroke={6} pct={0.02} color={PALETTE.orange} track={dark ? 'rgba(255,255,255,0.12)' : PALETTE.creamDeep}>
        <div style={{ width: 16, height: 2, borderRadius: 2, background: dark ? 'rgba(253,242,228,0.5)' : PALETTE.muted }} />
      </Ring>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 20, color: title, letterSpacing: '-0.2px' }}>Kvalita stravy</span>
          <span style={{
            fontSize: 12, fontWeight: 700, color: PALETTE.orangeDeep,
            background: PALETTE.orangeSoft, padding: '3px 10px', borderRadius: 999,
          }}>Priemerné</span>
        </div>
        <div style={{ fontSize: 14, color: sub, marginTop: 4 }}>Pridaj jedlo a uvidíš svoje skóre</div>
      </div>
    </div>
  );
}

// ── Tomáš coach card — Page-2 variant (orange outline) ──────
function CoachCardV2({ accent = true }) {
  // accent=true → warm orange outline (matches screenshot)
  // accent=false → plain neutral (used on ink variant where orange would clash)
  const outline = accent ? PALETTE.orange : PALETTE.border;
  const bg = PALETTE.white;
  return (
    <div style={{
      margin: '14px 20px 0', background: bg,
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
        Skvelá práca s cukrom a sodíkom! Na zvýšenie príjmu vlákniny si daj na večeru <b>šalát s cícerom a avokádom</b> alebo si priprav <b>ovsenú kašu s bobuľovým ovocím</b>.
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12 }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: PALETTE.creamDeep }} />
        <span style={{ width: 22, height: 6, borderRadius: 999, background: PALETTE.orange }} />
        <span style={{ width: 6, height: 6, borderRadius: 999, background: PALETTE.creamDeep }} />
      </div>
    </div>
  );
}

// ── Carousel dots (which page we're on) ─────────────────────
function CarouselDots({ active = 1, total = 3 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 14 }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{
          width: i === active ? 22 : 6, height: 6, borderRadius: 999,
          background: i === active ? PALETTE.orange : PALETTE.creamDeep,
          transition: 'width 160ms ease',
        }} />
      ))}
    </div>
  );
}

// ── FAB for "add food" (mirrors reference screenshot) ───────
function FAB() {
  return (
    <div style={{
      position: 'absolute', right: 24, bottom: 116, zIndex: 2,
      width: 58, height: 58, borderRadius: '50%',
      background: PALETTE.orange,
      boxShadow: '0 14px 24px rgba(233,115,23,0.35)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'white', fontSize: 30, fontWeight: 400,
    }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.6" strokeLinecap="round"/></svg>
    </div>
  );
}

// ── A · Teplá neutrálna — Page 2 ────────────────────────────
function HomeWarm2() {
  return (
    <div style={{ background: PALETTE.cream, width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130, position: 'relative' }}>
      <Header />
      <DateStrip />
      <MicronutrientsCard tone="light" />
      <DietQualityCard tone="light" />
      <CoachCardV2 accent={true} />
      <CarouselDots active={1} total={3} />
      <div style={{ margin: '18px 20px 0', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 22, color: PALETTE.ink }}>Naposledy pridané</div>
      <div style={{ height: 24 }} />
      <FAB />
    </div>
  );
}

// ── B · Atramentové — Page 2 ────────────────────────────────
// Ink variant uses the dark Mikroživiny card as its "hero" moment on page 2,
// keeps the other cards calm cream/white so orange accents stay rare.
function HomeInk2() {
  return (
    <div style={{ background: PALETTE.cream, width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130, position: 'relative' }}>
      <Header />
      <DateStrip />
      <MicronutrientsCard tone="ink" />
      <DietQualityCard tone="light" />
      <CoachCardV2 accent={false} />
      <CarouselDots active={1} total={3} />
      <div style={{ margin: '18px 20px 0', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 22, color: PALETTE.ink }}>Naposledy pridané</div>
      <div style={{ height: 24 }} />
      <FAB />
    </div>
  );
}

// ── C · Editorial — Page 2 ──────────────────────────────────
// Editorial variant uses a lighter treatment: bars are slimmer, spacing breathier,
// and the quality card loses the pill badge in favor of a tiny caps label.
function HomeEditorial2() {
  const rows = [
    { name: 'Vláknina',  val: 0, goal: 36,   unit: 'g',     color: PALETTE.sage },
    { name: 'Cukor',     val: 0, goal: 64,   unit: 'g max', color: PALETTE.plum },
    { name: 'Soľ (sodík)', val: 0, goal: 2000, unit: 'mg max', color: PALETTE.teal },
  ];
  return (
    <div style={{ background: '#FAF3E4', width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130, position: 'relative' }}>
      <Header />
      <DateStrip />
      <div style={{
        margin: '14px 20px 0', background: PALETTE.white, borderRadius: 28,
        padding: '22px 24px 24px', border: `1px solid ${PALETTE.border}`,
      }}>
        <div style={{ fontSize: 13, color: PALETTE.muted, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Mikroživiny</div>
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 18 }}>
          {rows.map((r, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, color: PALETTE.ink, letterSpacing: '-0.3px' }}>{r.name}</div>
                <div style={{ fontSize: 14, color: PALETTE.muted }}>
                  <b style={{ color: PALETTE.ink, fontWeight: 700, fontSize: 16 }}>{r.val}</b> / {r.goal.toLocaleString('sk-SK').replace(/\u202f/g, ' ')} {r.unit}
                </div>
              </div>
              <Bar pct={0} height={3} color={r.color} track={PALETTE.creamDeep} />
            </div>
          ))}
        </div>
      </div>

      <div style={{
        margin: '14px 20px 0', background: PALETTE.white, borderRadius: 22,
        padding: '18px 22px', border: `1px solid ${PALETTE.border}`,
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <Ring size={60} stroke={5} pct={0.02} color={PALETTE.orange} track={PALETTE.creamDeep}>
          <div style={{ width: 14, height: 2, borderRadius: 2, background: PALETTE.muted }} />
        </Ring>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: PALETTE.muted, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' }}>Priemerné skóre</div>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, fontWeight: 600, color: PALETTE.ink, letterSpacing: '-0.3px', marginTop: 2 }}>Kvalita stravy</div>
          <div style={{ fontSize: 13, color: PALETTE.muted, marginTop: 2 }}>Pridaj jedlo a uvidíš svoje skóre</div>
        </div>
      </div>

      <CoachCardV2 accent={true} />
      <CarouselDots active={1} total={3} />
      <div style={{ margin: '18px 20px 0', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 700, fontSize: 22, color: PALETTE.ink }}>Naposledy pridané</div>
      <div style={{ height: 24 }} />
      <FAB />
    </div>
  );
}

Object.assign(window, {
  HomeWarm2, HomeInk2, HomeEditorial2,
  MicronutrientsCard, DietQualityCard, CoachCardV2, CarouselDots, FAB,
});
