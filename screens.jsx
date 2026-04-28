// Calora redesign — orange dialed back to a small accent
// Warm cream + ink palette; orange reserved for: logo, streak, FAB, progress fills only
// Hero card is calm cream/white; macros use varied warm hues for rhythm

const PALETTE = {
  cream: '#FDF2E4',          // warmer apricot-tinted background
  creamDeep: '#F7E4C8',
  ink: '#2A1A14',            // warm dark brown-ink instead of cool navy
  inkSoft: '#5A3F33',
  muted: '#9A8576',
  border: '#EED9B8',
  borderSoft: '#F5E5CA',
  orange: '#E97317',         // accent only
  orangeDeep: '#C75A08',
  orangeSoft: '#FBD9B4',
  sage: '#8C9D5E',           // warmer olive-sage
  sageSoft: '#E6E4C4',
  plum: '#B45E4C',           // warm terracotta-rose instead of cool plum
  plumSoft: '#F3D8CE',
  teal: '#C58A3E',           // warm amber instead of cool teal
  tealSoft: '#F3DFB8',
  gold: '#C88A2E',
  goldSoft: '#F5E2B4',
  white: '#FFFBF4',          // warmer white
};

// ── atoms ────────────────────────────────────────────────────
function Bar({ pct = 0.5, color = PALETTE.orange, height = 10, track = PALETTE.orangeSoft }) {
  return (
    <div style={{ width: '100%', height, background: track, borderRadius: 999 }}>
      <div style={{ width: `${Math.min(1, pct) * 100}%`, height: '100%', background: color, borderRadius: 999 }} />
    </div>
  );
}

function Ring({ size = 120, stroke = 10, pct = 0.6, color = PALETTE.orange, track = PALETTE.orangeSoft, children }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} stroke={track} strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={r} stroke={color} strokeWidth={stroke} fill="none"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)} strokeLinecap="round" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
}

function Logo({ size = 44 }) {
  return <img src="calora-logo.png" alt="Calora" style={{ width: size, height: size, objectFit: 'contain', display: 'block' }} />;
}

// ── Header ───────────────────────────────────────────────────
function Header() {
  return (
    <div style={{ padding: '6px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Logo size={44} />
        <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 28, color: PALETTE.ink, letterSpacing: '-0.3px' }}>Calora</div>
      </div>
      {/* Streak — subtle, outlined, not a glowing pill */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: PALETTE.white, border: `1.5px solid ${PALETTE.border}`,
        color: PALETTE.ink, padding: '8px 14px', borderRadius: 999,
        fontWeight: 700, fontSize: 15,
      }}>
        <span style={{ fontSize: 16 }}>🔥</span>
        <span>0 dní</span>
      </div>
    </div>
  );
}

// ── Date picker row ──────────────────────────────────────────
function DateStrip() {
  const days = [
    { dow: 'So', n: 18 }, { dow: 'Ne', n: 19 }, { dow: 'Po', n: 20 },
    { dow: 'Ut', n: 21 }, { dow: 'St', n: 22, active: true }, { dow: 'Št', n: 23, future: true },
  ];
  return (
    <div style={{ padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        background: PALETTE.white, border: `1.5px solid ${PALETTE.border}`,
        padding: '8px 12px', borderRadius: 14, textAlign: 'center', minWidth: 64,
      }}>
        <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 16, color: PALETTE.ink, display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
          Apríl <span style={{ fontSize: 10 }}>▾</span>
        </div>
        <div style={{ fontSize: 12, color: PALETTE.muted, fontWeight: 600 }}>2026</div>
      </div>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6 }}>
        {days.map((d, i) => {
          const on = d.active;
          const dim = d.future;
          return (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              opacity: dim ? 0.35 : 1,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: on ? PALETTE.orangeDeep : PALETTE.muted, textTransform: 'uppercase', letterSpacing: 0.5 }}>{d.dow}</div>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: on ? PALETTE.ink : 'transparent',
                color: on ? PALETTE.cream : PALETTE.ink,
                border: on ? 'none' : `1.5px solid ${PALETTE.border}`,
                fontWeight: 700, fontSize: 16,
              }}>{d.n}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Hero kcal card — calm, dark numerals on white ────────────
function HeroCard() {
  return (
    <div style={{
      margin: '14px 20px 0', background: PALETTE.white, borderRadius: 24,
      padding: '22px 22px', border: `1px solid ${PALETTE.border}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
    }}>
      <div>
        <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 56, lineHeight: 1, color: PALETTE.ink, letterSpacing: '-1.5px', whiteSpace: 'nowrap' }}>
          2 571
        </div>
        <div style={{ fontSize: 18, color: PALETTE.inkSoft, fontWeight: 600, marginTop: 8 }}>Kalórií zostáva</div>
        <div style={{ fontSize: 15, color: PALETTE.muted, marginTop: 2 }}>0 / 2 571 kcal</div>
      </div>
      <Ring size={96} stroke={8} pct={0} color={PALETTE.orange} track={PALETTE.creamDeep}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill={PALETTE.orange} />
        </svg>
      </Ring>
    </div>
  );
}

// ── Macro cards — varied warm hues, not all orange ───────────
function MacroCards() {
  const macros = [
    { name: 'Bielkoviny', goal: 193, color: PALETTE.plum, soft: PALETTE.plumSoft,
      icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 2c1 4 7 4 8 0v8c-1 4-7 4-8 0V2zm0 10c1 4 7 4 8 0v10H8V12z" fill={c}/></svg> },
    { name: 'Sacharidy',  goal: 225, color: PALETTE.gold, soft: PALETTE.goldSoft,
      icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3c5 0 9 4 9 9 0 3-2 6-5 7-1-3-3-5-4-5s-3 2-4 5c-3-1-5-4-5-7 0-5 4-9 9-9z" fill={c}/></svg> },
    { name: 'Tuky',       goal: 100, color: PALETTE.teal, soft: PALETTE.tealSoft,
      icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3c3 4 6 7 6 11a6 6 0 1 1-12 0c0-4 3-7 6-11z" fill={c}/></svg> },
  ];
  return (
    <div style={{ margin: '12px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
      {macros.map((m, i) => (
        <div key={i} style={{
          background: PALETTE.white, borderRadius: 20, padding: '16px 12px 14px',
          border: `1px solid ${PALETTE.border}`, textAlign: 'center',
        }}>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 24, color: PALETTE.ink, lineHeight: 1 }}>
            {m.goal}<span style={{ fontSize: 14, color: PALETTE.muted, fontWeight: 600, marginLeft: 2 }}>g</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: PALETTE.inkSoft, marginTop: 4 }}>{m.name}</div>
          <div style={{ fontSize: 12, color: PALETTE.muted, marginTop: 2 }}>0 / {m.goal} g</div>
          <div style={{
            width: 48, height: 48, borderRadius: '50%', background: m.soft,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '12px auto 0',
          }}>{m.icon(m.color)}</div>
        </div>
      ))}
    </div>
  );
}

// ── Tomáš coach card — neutral card, small orange avatar only ─
function CoachCard() {
  return (
    <div style={{
      margin: '14px 20px 0', background: PALETTE.white,
      border: `1px solid ${PALETTE.border}`, borderRadius: 22, padding: '16px 18px 18px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        <img src="tomas-avatar.png" alt="Tomáš" style={{
          width: 52, height: 52, borderRadius: '50%',
          objectFit: 'cover', display: 'block',
          border: `2px solid ${PALETTE.orangeSoft}`,
        }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 20, color: PALETTE.ink }}>Tomáš AI</span>
            <span style={{ color: PALETTE.gold, fontSize: 16 }}>★</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: PALETTE.muted }}>Tvoj osobný kouč</div>
        </div>
        <button style={{
          width: 38, height: 38, borderRadius: '50%',
          border: `1.5px solid ${PALETTE.border}`, background: PALETTE.white,
          color: PALETTE.inkSoft, fontSize: 16, cursor: 'pointer',
        }}>↻</button>
      </div>
      <div style={{ fontSize: 16, lineHeight: '24px', color: PALETTE.ink }}>
        Dnes máš ešte veľa kalórií na využitie, takže si môžeš dopriať chutné jedlo. Skús <b>kuracie prsia s ryžou a brokolicou</b>, čo ti dodá približne 450 kcal a pomôže vyrovnať pomer makier.
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12 }}>
        <span style={{ width: 22, height: 6, borderRadius: 999, background: PALETTE.orange }} />
        <span style={{ width: 6, height: 6, borderRadius: 999, background: PALETTE.creamDeep }} />
        <span style={{ width: 6, height: 6, borderRadius: 999, background: PALETTE.creamDeep }} />
      </div>
    </div>
  );
}

// ── Naposledy pridané ────────────────────────────────────────
function RecentSection() {
  const items = [
    { name: 'Ovsená kaša', kcal: 320, t: '8:15', c: PALETTE.gold, soft: PALETTE.goldSoft },
    { name: 'Káva s mliekom', kcal: 60, t: '9:40', c: PALETTE.plum, soft: PALETTE.plumSoft },
  ];
  return (
    <div style={{ margin: '16px 20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 22, color: PALETTE.ink }}>Naposledy pridané</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: PALETTE.inkSoft }}>Zobraziť všetko</div>
      </div>
      {items.map((it, i) => (
        <div key={i} style={{
          background: PALETTE.white, border: `1px solid ${PALETTE.border}`,
          borderRadius: 18, padding: '14px 16px', marginBottom: 10,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: it.soft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: it.c }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: PALETTE.ink }}>{it.name}</div>
            <div style={{ fontSize: 14, color: PALETTE.muted }}>{it.t} · {it.kcal} kcal</div>
          </div>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 20, fontWeight: 600, color: PALETTE.inkSoft }}>+{it.kcal}</div>
        </div>
      ))}
    </div>
  );
}

// ── Floating oval nav — styled like reference screenshot ─────
function FloatingNav() {
  const items = [
    {
      id: 'home', label: 'Prehľad', active: true,
      icon: (c) => <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z" stroke={c} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>,
    },
    {
      id: 'progress', label: 'Progres',
      icon: (c) => <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="13" width="3.5" height="7" rx="1" fill={c}/>
        <rect x="10.25" y="9" width="3.5" height="11" rx="1" fill={c}/>
        <rect x="16.5" y="5" width="3.5" height="15" rx="1" fill={c}/>
      </svg>,
    },
    {
      id: 'coach', label: 'Tomáš',
      avatar: true,
    },
    {
      id: 'settings', label: 'Nastavenia',
      icon: (c) => <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke={c} strokeWidth="2.2"/>
        <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14 3h-4l-.6 2.6a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2 1.2L10 21h4l.6-2.6a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z" stroke={c} strokeWidth="1.9" strokeLinejoin="round"/>
      </svg>,
    },
  ];
  return (
    <div style={{
      position: 'absolute', left: 12, right: 12, bottom: 18, zIndex: 1,
      background: PALETTE.cream, border: `1px solid ${PALETTE.border}`,
      borderRadius: 999, padding: '12px 14px',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      boxShadow: '0 10px 28px rgba(74,45,30,0.12)',
      alignItems: 'center',
    }}>
      {items.map(it => {
        const on = it.active;
        const color = on ? PALETTE.orange : PALETTE.inkSoft;
        return (
          <div key={it.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          }}>
            {it.avatar ? (
              <img src="tomas-avatar.png" alt="Tomáš" style={{
                width: 42, height: 42, borderRadius: '50%', objectFit: 'cover',
                display: 'block',
              }} />
            ) : on ? (
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: PALETTE.orangeSoft,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{it.icon(PALETTE.orange)}</div>
            ) : (
              <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {it.icon(color)}
              </div>
            )}
            <div style={{
              fontSize: 13, fontWeight: on ? 800 : 600,
              color: on ? PALETTE.orange : PALETTE.inkSoft,
            }}>{it.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// ── A · Warm neutral (main recommendation) ───────────────────
function HomeWarm() {
  return (
    <div style={{ background: PALETTE.cream, width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130 }}>
      <Header />
      <DateStrip />
      <HeroCard />
      <MacroCards />
      <CoachCard />
      <RecentSection />
      <div style={{ height: 24 }} />
    </div>
  );
}

// ── B · Ink hero (dark card for hero only, orange reserved) ──
function HomeInk() {
  return (
    <div style={{ background: PALETTE.cream, width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130 }}>
      <Header />
      <DateStrip />
      <div style={{
        margin: '14px 20px 0', background: PALETTE.ink, color: PALETTE.cream,
        borderRadius: 24, padding: '22px 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        <div>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 56, lineHeight: 1, letterSpacing: '-1.5px', whiteSpace: 'nowrap' }}>2 571</div>
          <div style={{ fontSize: 18, fontWeight: 600, marginTop: 8, opacity: 0.9 }}>Kalórií zostáva</div>
          <div style={{ fontSize: 15, marginTop: 2, opacity: 0.6 }}>0 / 2 571 kcal</div>
        </div>
        <Ring size={96} stroke={8} pct={0} color={PALETTE.orange} track="rgba(255,255,255,0.12)">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill={PALETTE.orange} />
          </svg>
        </Ring>
      </div>
      <MacroCards />
      <CoachCard />
      <RecentSection />
      <div style={{ height: 24 }} />
    </div>
  );
}

// ── C · Editorial — serif-forward, orange used only on progress bar
function HomeEditorial() {
  return (
    <div style={{ background: '#FAF3E4', width: '100%', height: '100%', fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", color: PALETTE.ink, display: 'flex', flexDirection: 'column', paddingBottom: 130 }}>
      <Header />
      <DateStrip />
      <div style={{
        margin: '14px 20px 0', background: PALETTE.white, borderRadius: 28,
        padding: '26px 24px', border: `1px solid ${PALETTE.border}`,
      }}>
        <div style={{ fontSize: 14, color: PALETTE.muted, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Dnes zostáva</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600, fontSize: 64, lineHeight: 1, letterSpacing: '-2px', color: PALETTE.ink, whiteSpace: 'nowrap' }}>2 571</div>
          <div style={{ fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22, color: PALETTE.inkSoft, fontWeight: 500 }}>kcal</div>
        </div>
        <div style={{ marginTop: 16 }}>
          <Bar pct={0} height={10} color={PALETTE.orange} track={PALETTE.creamDeep} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 14, color: PALETTE.muted }}>
          <span>Zjedol si 0 kcal</span>
          <span>Cieľ 2 571 kcal</span>
        </div>
      </div>
      <MacroCards />
      <CoachCard />
      <RecentSection />
      <div style={{ height: 24 }} />
    </div>
  );
}

Object.assign(window, {
  HomeWarm, HomeInk, HomeEditorial, PALETTE,
});
