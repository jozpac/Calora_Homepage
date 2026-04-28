// Calora — AI Scan Result screen (Variant A · Teplá neutrálna)
// Shows after a meal photo is recognized: photo, nutrition score, kcal, macros,
// Tomáš coaching tips, and a CTA to refine via custom description.

const SCAN_RESULT = {
  title: 'Kuracie prsia s ryžou',
  subtitle: '400 g · obed',
  confidence: 98,
  grade: 'A',
  gradeColor: '#8C9D5E', // sage
  kcal: 612,
  dailyPct: 25,
  proteinDelta: 38,
  protein: 38,
  proteinPct: 0.72,
  carbs: 82,
  carbsPct: 0.55,
  fat: 8,
  fatPct: 0.18,
  bg: 'linear-gradient(135deg, #E9C9A0 0%, #C58A3E 100%)',
  emoji: '🍗',
  tips: [
    { html: <>Zasýti ťa na <b style={{ color: PALETTE.cream, fontWeight: 800 }}>3 hodiny</b> — energia bude stabilná.</> },
    { html: <>Pomôže utlmiť tvoje <b style={{ color: PALETTE.cream, fontWeight: 800 }}>popoludňajšie chute na sladké</b>.</> },
    { html: <>Po obede skús <b style={{ color: PALETTE.cream, fontWeight: 800 }}>10‑min prechádzku</b> — zlepšíš trávenie.</> },
  ],
};

function ScanResultWarm() {
  const r = SCAN_RESULT;
  return (
    <div style={{ background: PALETTE.cream, minHeight: '100%', paddingBottom: 130 }}>

      {/* ─── Top bar ─────────────────────────────────── */}
      <div style={{
        padding: '12px 16px 8px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button style={{
          width: 40, height: 40, borderRadius: '50%',
          background: PALETTE.white, border: `1px solid ${PALETTE.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 5l-7 7 7 7" stroke={PALETTE.ink} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Recognized pill */}
        <div style={{
          background: PALETTE.sageSoft, color: PALETTE.sage,
          borderRadius: 999, padding: '7px 14px',
          fontSize: 12, fontWeight: 800, letterSpacing: '0.6px',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: PALETTE.sage, display: 'inline-block' }} />
          ROZPOZNANÉ
        </div>

        <button style={{
          width: 40, height: 40, borderRadius: '50%',
          background: 'transparent', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="5" cy="12" r="1.7" fill={PALETTE.ink}/>
            <circle cx="12" cy="12" r="1.7" fill={PALETTE.ink}/>
            <circle cx="19" cy="12" r="1.7" fill={PALETTE.ink}/>
          </svg>
        </button>
      </div>

      {/* ─── Photo ───────────────────────────────────── */}
      <div style={{ padding: '4px 16px 0' }}>
        <div style={{
          position: 'relative', height: 220,
          background: r.bg,
          borderRadius: 22, overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `1px solid ${PALETTE.border}`,
        }}>
          <div style={{ fontSize: 130, filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.22))' }}>{r.emoji}</div>

          {/* Confidence chip */}
          <div style={{
            position: 'absolute', bottom: 14, left: 14,
            background: 'rgba(255,251,244,0.95)', backdropFilter: 'blur(8px)',
            borderRadius: 999, padding: '6px 11px 6px 8px',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            color: PALETTE.ink, fontSize: 12, fontWeight: 800,
          }}>
            <span style={{
              width: 18, height: 18, borderRadius: '50%', background: PALETTE.sage,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {r.confidence} % istota
          </div>

          {/* Retake icon */}
          <button style={{
            position: 'absolute', top: 12, right: 12,
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,251,244,0.92)', backdropFilter: 'blur(8px)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 4v4h-4" stroke={PALETTE.ink} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 20v-4h4" stroke={PALETTE.ink} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ─── Title + score ───────────────────────────── */}
      <div style={{ padding: '18px 20px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
            fontSize: 24, fontWeight: 700, color: PALETTE.ink,
            letterSpacing: '-0.5px', lineHeight: 1.18, textWrap: 'pretty',
          }}>{r.title}</div>
          <div style={{ marginTop: 4, fontSize: 14, color: PALETTE.muted, fontWeight: 500 }}>{r.subtitle}</div>
        </div>

        {/* Grade ring */}
        <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Ring size={56} stroke={4} pct={0.92} color={r.gradeColor} track={PALETTE.sageSoft}>
            <div style={{
              fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
              fontSize: 22, fontWeight: 800, color: r.gradeColor, letterSpacing: '-0.5px',
            }}>{r.grade}</div>
          </Ring>
          <div style={{ fontSize: 10, color: PALETTE.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.7px' }}>Skóre</div>
        </div>
      </div>

      {/* ─── Calories card ──────────────────────────── */}
      <div style={{ padding: '14px 16px 0' }}>
        <div style={{
          background: PALETTE.white,
          border: `1px solid ${PALETTE.border}`,
          borderRadius: 20, padding: '16px 18px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
              <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontSize: 32, fontWeight: 700, color: PALETTE.ink, letterSpacing: '-0.7px', lineHeight: 1 }}>{r.kcal}</div>
              <div style={{ fontSize: 15, color: PALETTE.inkSoft, fontWeight: 600 }}>kcal</div>
            </div>
            <div style={{ marginTop: 6, fontSize: 11, color: PALETTE.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px' }}>{r.dailyPct} % denného cieľa</div>
          </div>
          <div style={{
            background: PALETTE.orangeSoft, color: PALETTE.orangeDeep,
            borderRadius: 999, padding: '7px 12px',
            fontSize: 12, fontWeight: 800, letterSpacing: '0.2px',
            display: 'inline-flex', alignItems: 'center', gap: 4,
          }}>
            +{r.proteinDelta} g BIELK.
          </div>
        </div>
      </div>

      {/* ─── Macro tiles ────────────────────────────── */}
      <div style={{ padding: '10px 16px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        <MacroTile label="Bielk." value={r.protein} unit="g" pct={r.proteinPct} color={PALETTE.orange} track={PALETTE.orangeSoft} />
        <MacroTile label="Sach." value={r.carbs} unit="g" pct={r.carbsPct} color={PALETTE.sage} track={PALETTE.sageSoft} />
        <MacroTile label="Tuky" value={r.fat} unit="g" pct={r.fatPct} color={PALETTE.plum} track={PALETTE.plumSoft} />
      </div>

      {/* ─── Tomáš tips card ────────────────────────── */}
      <div style={{ padding: '16px 16px 0' }}>
        <div style={{
          background: PALETTE.ink, color: PALETTE.cream,
          borderRadius: 22, padding: '16px 18px 18px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="tomas-avatar.png" alt="Tomáš" style={{
                width: 32, height: 32, borderRadius: '50%', objectFit: 'cover',
                border: `2px solid ${PALETTE.orange}`,
              }} />
              <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontSize: 15, fontWeight: 800, color: PALETTE.cream, letterSpacing: '-0.2px' }}>
                Tomáš · <span style={{ fontWeight: 600, color: 'rgba(253,242,228,0.7)' }}>pre teba</span>
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'rgba(253,242,228,0.55)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>3 tipy</div>
          </div>

          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {r.tips.map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{
                  flexShrink: 0, width: 6, height: 6, borderRadius: '50%',
                  background: PALETTE.orange, marginTop: 8,
                }} />
                <div style={{ fontSize: 13.5, lineHeight: 1.5, color: 'rgba(253,242,228,0.85)', fontWeight: 500, textWrap: 'pretty' }}>
                  {t.html}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Custom description CTA ─────────────────── */}
      <div style={{ padding: '14px 16px 0' }}>
        <button style={{
          width: '100%', background: PALETTE.white, color: PALETTE.ink,
          border: `1px dashed ${PALETTE.border}`, borderRadius: 18,
          padding: '14px 16px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left',
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 12, background: PALETTE.cream,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 17.25V21h3.75L18.81 8.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill={PALETTE.orange}/>
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontSize: 15, fontWeight: 700, color: PALETTE.ink, letterSpacing: '-0.2px' }}>Upraviť vlastným popisom</div>
            <div style={{ fontSize: 12, color: PALETTE.muted, fontWeight: 500, marginTop: 2 }}>Napríklad: „bez ryže, viac zeleniny"</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M9 5l7 7-7 7" stroke={PALETTE.muted} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* ─── Primary CTA ────────────────────────────── */}
      <div style={{ padding: '12px 16px 0' }}>
        <button style={{
          width: '100%', background: PALETTE.orange, color: 'white',
          border: 'none', borderRadius: 18, padding: '16px 20px',
          fontSize: 16, fontWeight: 800, letterSpacing: '-0.2px',
          cursor: 'pointer', boxShadow: '0 10px 24px rgba(233,115,23,0.32)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Pridať do dnešného dňa
        </button>
      </div>
    </div>
  );
}

// ── Macro tile w/ mini bar ─────────────────────────────────
function MacroTile({ label, value, unit, pct, color, track }) {
  return (
    <div style={{
      background: PALETTE.white, border: `1px solid ${PALETTE.border}`,
      borderRadius: 16, padding: '12px 14px 14px',
    }}>
      <div style={{ fontSize: 11, color: PALETTE.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, marginTop: 4 }}>
        <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontSize: 22, fontWeight: 700, color: PALETTE.ink, letterSpacing: '-0.4px', lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: 13, color: PALETTE.muted, fontWeight: 600 }}>{unit}</div>
      </div>
      <div style={{ marginTop: 10, height: 5, background: track, borderRadius: 999 }}>
        <div style={{ width: `${Math.min(1, pct) * 100}%`, height: '100%', background: color, borderRadius: 999 }} />
      </div>
    </div>
  );
}
