// Calora — Recipe detail screen (Variant A · Teplá neutrálna)
// Hero photo + title + meta + nutrients + Tomáš "Great for" + step-by-step

const RECIPE_DETAIL = {
  title: 'Kuracie prsia s ryžou a brokolicou',
  tag: 'Obed',
  minutes: 25,
  servings: 2,
  difficulty: 'Ľahké',
  kcal: 520,
  protein: 42,
  carbs: 58,
  fat: 12,
  bg: 'linear-gradient(135deg, #E9C9A0 0%, #C58A3E 100%)',
  emoji: '🍗',
  greatFor: [
    'Ak nechceš byť priveľmi sýty po dlhú dobu — vyvážená ľahká strava',
    'Po tréningu — vysoký podiel bielkovín na regeneráciu svalov',
    'Pre stabilnú energiu počas pracovného popoludnia',
  ],
  ingredients: [
    { name: 'Kuracie prsia', qty: '300 g' },
    { name: 'Basmati ryža', qty: '150 g' },
    { name: 'Brokolica', qty: '1 ks' },
    { name: 'Cesnak', qty: '2 strúčiky' },
    { name: 'Olivový olej', qty: '2 PL' },
    { name: 'Soľ, korenie', qty: 'podľa chuti' },
  ],
  steps: [
    { title: 'Priprav si ingrediencie', body: '300 g kuracích pŕs, 150 g basmati ryže, 1 brokolica, 2 strúčiky cesnaku, olivový olej, soľ, korenie.' },
    { title: 'Uvar ryžu', body: 'Ryžu prepláchni a uvar v 1,5-násobku vody na miernom ohni 15 minút. Nechaj odpočívať pod pokrievkou 5 minút.', minutes: 20 },
    { title: 'Naplánuj brokolicu', body: 'Ružičky brokolice obvar 4 minúty v osolenej vode, potom prelej studenou vodou aby si zachovala farbu.', minutes: 6 },
    { title: 'Opeč kuracie prsia', body: 'Prsia ochuť soľou a korením. Na rozpálenom oleji opekaj 4 minúty z každej strany do zlatista. Pridaj cesnak a chvíľu spolu opraž.', minutes: 10 },
    { title: 'Servíruj', body: 'Na tanier daj ryžu, vedľa brokolicu a navrch nakrájané kuracie prsia. Pokvapkaj výpekom z panvice.' },
  ],
};

function RecipeDetailWarm() {
  const r = RECIPE_DETAIL;
  return (
    <div style={{ background: PALETTE.cream, minHeight: '100%', paddingBottom: 130 }}>

      {/* ─── Hero photo ─────────────────────────────────── */}
      <div style={{
        position: 'relative', height: 320,
        background: r.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{ fontSize: 140, filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.22))' }}>{r.emoji}</div>

        {/* Top bar — back + actions */}
        <div style={{
          position: 'absolute', top: 14, left: 14, right: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <button style={{
            width: 42, height: 42, borderRadius: '50%',
            background: 'rgba(255,251,244,0.92)', backdropFilter: 'blur(8px)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 5l-7 7 7 7" stroke={PALETTE.ink} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{
              width: 42, height: 42, borderRadius: '50%',
              background: 'rgba(255,251,244,0.92)', backdropFilter: 'blur(8px)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 12v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8M16 6l-4-4-4 4M12 2v14" stroke={PALETTE.ink} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button style={{
              width: 42, height: 42, borderRadius: '50%',
              background: 'rgba(255,251,244,0.92)', backdropFilter: 'blur(8px)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 4h12v17l-6-4-6 4V4z" stroke={PALETTE.ink} strokeWidth="2.2" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Tag chip */}
        <div style={{
          position: 'absolute', bottom: 44, left: 20,
          background: PALETTE.sageSoft, color: PALETTE.sage,
          borderRadius: 999, padding: '6px 12px',
          fontSize: 12, fontWeight: 700, letterSpacing: '0.2px',
        }}>{r.tag}</div>
      </div>

      {/* ─── Title + meta card (overlaps hero) ───────────── */}
      <div style={{
        margin: '-22px 16px 0',
        background: PALETTE.white,
        border: `1px solid ${PALETTE.border}`,
        borderRadius: 24,
        padding: '20px 22px 18px',
        boxShadow: '0 8px 24px rgba(74,45,30,0.06)',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{
          fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
          fontSize: 24, fontWeight: 700, color: PALETTE.ink,
          letterSpacing: '-0.5px', lineHeight: 1.2, textWrap: 'pretty',
        }}>{r.title}</div>

        {/* Meta row */}
        <div style={{
          marginTop: 14, paddingTop: 14,
          borderTop: `1px solid ${PALETTE.borderSoft}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <MetaItem
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={PALETTE.orange} strokeWidth="2"/><path d="M12 7v5l3 2" stroke={PALETTE.orange} strokeWidth="2" strokeLinecap="round"/></svg>}
            label="Čas" value={`${r.minutes} min`}
          />
          <Divider />
          <MetaItem
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 12c0-4 4-7 9-7s9 3 9 7" stroke={PALETTE.orange} strokeWidth="2" strokeLinecap="round"/><path d="M3 14h18M5 17h14M7 20h10" stroke={PALETTE.orange} strokeWidth="2" strokeLinecap="round"/></svg>}
            label="Porcie" value={`${r.servings}`}
          />
          <Divider />
          <MetaItem
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 18l5-12 4 8 5-4" stroke={PALETTE.orange} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/></svg>}
            label="Obtiažnosť" value={r.difficulty}
          />
        </div>
      </div>

      {/* ─── Nutrients ─────────────────────────────────── */}
      <div style={{ padding: '20px 16px 0' }}>
        <SectionTitle>Živiny na porciu</SectionTitle>

        {/* Calories — full-width hero card */}
        <div style={{
          marginTop: 12,
          background: PALETTE.white,
          border: `1px solid ${PALETTE.border}`,
          borderRadius: 20,
          padding: '18px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%', background: PALETTE.orangeSoft,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 3c1 3 4 4.5 4 8a4 4 0 1 1-8 0c0-2 1.5-3 2-5" stroke={PALETTE.orange} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 11, color: PALETTE.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Energia</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 2 }}>
                <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontSize: 30, fontWeight: 700, color: PALETTE.ink, letterSpacing: '-0.6px', lineHeight: 1 }}>{r.kcal}</div>
                <div style={{ fontSize: 14, color: PALETTE.muted, fontWeight: 600 }}>kcal</div>
              </div>
            </div>
          </div>
          <div style={{
            background: PALETTE.cream, color: PALETTE.inkSoft,
            borderRadius: 999, padding: '6px 12px',
            fontSize: 12, fontWeight: 700,
          }}>26 % denného</div>
        </div>

        {/* Macros row */}
        <div style={{
          marginTop: 10, display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
        }}>
          <NutrientTile color={PALETTE.sage} bg={PALETTE.sageSoft} value={r.protein} unit="g" label="Bielk" />
          <NutrientTile color={PALETTE.gold} bg={PALETTE.goldSoft} value={r.carbs} unit="g" label="Sach" />
          <NutrientTile color={PALETTE.plum} bg={PALETTE.plumSoft} value={r.fat} unit="g" label="Tuky" />
        </div>
      </div>

      {/* ─── Tomáš "Great for" ─────────────────────────── */}
      <div style={{ padding: '24px 16px 0' }}>
        <div style={{
          background: PALETTE.ink, color: PALETTE.cream,
          borderRadius: 22, padding: '20px 20px 18px',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Tomáš header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="tomas-avatar.png" alt="Tomáš" style={{
              width: 44, height: 44, borderRadius: '50%', objectFit: 'cover',
              border: `2px solid ${PALETTE.orange}`,
            }} />
            <div>
              <div style={{ fontSize: 12, color: 'rgba(253,242,228,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px' }}>Tomáš odporúča</div>
              <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontSize: 18, fontWeight: 700, color: PALETTE.cream, letterSpacing: '-0.3px', marginTop: 2 }}>Skvelé pre</div>
            </div>
          </div>

          {/* Bullets */}
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {r.greatFor.map((g, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{
                  flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                  background: PALETTE.orange,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginTop: 1,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(253,242,228,0.9)', fontWeight: 500, textWrap: 'pretty' }}>{g}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Steps ─────────────────────────────────────── */}
      <div style={{ padding: '24px 16px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '0 4px' }}>
          <SectionTitle>Postup</SectionTitle>
          <div style={{ fontSize: 13, color: PALETTE.muted, fontWeight: 600 }}>{r.steps.length} krokov</div>
        </div>

        <div style={{ marginTop: 14, position: 'relative', paddingLeft: 4 }}>
          {r.steps.map((s, i) => {
            const last = i === r.steps.length - 1;
            return (
              <div key={i} style={{ position: 'relative', paddingLeft: 44, paddingBottom: last ? 0 : 22 }}>
                {/* Tree line */}
                {!last && (
                  <div style={{
                    position: 'absolute', left: 15, top: 32, bottom: 0, width: 2,
                    background: PALETTE.border,
                  }} />
                )}
                {/* Dot / number */}
                <div style={{
                  position: 'absolute', left: 0, top: 0,
                  width: 32, height: 32, borderRadius: '50%',
                  background: PALETTE.white,
                  border: `2px solid ${PALETTE.orange}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
                  fontSize: 13, fontWeight: 800, color: PALETTE.orange,
                }}>{i + 1}</div>

                {/* Card */}
                <div style={{
                  background: PALETTE.white,
                  border: `1px solid ${PALETTE.border}`,
                  borderRadius: 18,
                  padding: '14px 16px 14px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <div style={{
                      fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
                      fontSize: 15, fontWeight: 700, color: PALETTE.ink,
                      letterSpacing: '-0.2px', lineHeight: 1.3,
                    }}>{s.title}</div>
                    {s.minutes && (
                      <div style={{
                        flexShrink: 0,
                        background: PALETTE.orangeSoft, color: PALETTE.orangeDeep,
                        borderRadius: 999, padding: '3px 9px',
                        fontSize: 11, fontWeight: 700,
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={PALETTE.orangeDeep} strokeWidth="2.4"/><path d="M12 7v5l3 2" stroke={PALETTE.orangeDeep} strokeWidth="2.4" strokeLinecap="round"/></svg>
                        {s.minutes} min
                      </div>
                    )}
                  </div>
                  <div style={{
                    marginTop: 6, fontSize: 13, lineHeight: 1.5,
                    color: PALETTE.inkSoft, fontWeight: 500, textWrap: 'pretty',
                  }}>{s.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── CTA ───────────────────────────────────────── */}
      <div style={{ padding: '28px 16px 0' }}>
        <button style={{
          width: '100%', background: PALETTE.orange, color: 'white',
          border: 'none', borderRadius: 18, padding: '16px 20px',
          fontSize: 16, fontWeight: 800, letterSpacing: '-0.2px',
          cursor: 'pointer', boxShadow: '0 10px 24px rgba(233,115,23,0.32)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.8" strokeLinecap="round"/></svg>
          Pridať do dnešného dňa
        </button>
      </div>
    </div>
  );
}

// ── helpers ──────────────────────────────────────────────────
function MetaItem({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: PALETTE.muted, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        {icon} {label}
      </div>
      <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontSize: 16, fontWeight: 700, color: PALETTE.ink, letterSpacing: '-0.2px' }}>{value}</div>
    </div>
  );
}

function Divider() {
  return <div style={{ width: 1, alignSelf: 'stretch', background: PALETTE.borderSoft, margin: '0 4px' }} />;
}

function SectionTitle({ children }) {
  return (
    <div style={{
      fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
      fontSize: 18, fontWeight: 700, color: PALETTE.ink,
      letterSpacing: '-0.3px', padding: '0 4px',
    }}>{children}</div>
  );
}

function NutrientTile({ color, bg, value, unit, label }) {
  return (
    <div style={{
      background: PALETTE.white,
      border: `1px solid ${PALETTE.border}`,
      borderRadius: 16, padding: '14px 10px 12px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
    }}>
      <div style={{
        width: 30, height: 30, borderRadius: '50%', background: bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
        <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontSize: 18, fontWeight: 700, color: PALETTE.ink, letterSpacing: '-0.3px' }}>{value}</div>
        <div style={{ fontSize: 11, color: PALETTE.muted, fontWeight: 600 }}>{unit}</div>
      </div>
      <div style={{ fontSize: 11, color: PALETTE.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Recipe detail — STEPS view (scrolled past hero, showing recipe steps)
// ─────────────────────────────────────────────────────────────
function RecipeDetailStepsWarm() {
  const r = RECIPE_DETAIL;
  const totalActiveMinutes = r.steps.reduce((sum, s) => sum + (s.minutes || 0), 0);

  return (
    <div style={{ background: PALETTE.cream, minHeight: '100%', paddingBottom: 120 }}>

      {/* ─── Sticky-feel compact header ───────────────── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 5,
        background: PALETTE.cream,
        borderBottom: `1px solid ${PALETTE.border}`,
        padding: '12px 16px',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <button style={{
          width: 38, height: 38, borderRadius: '50%',
          background: PALETTE.white, border: `1px solid ${PALETTE.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 5l-7 7 7 7" stroke={PALETTE.ink} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, color: PALETTE.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Recept</div>
          <div style={{
            fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
            fontSize: 15, fontWeight: 700, color: PALETTE.ink, letterSpacing: '-0.3px',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{r.title}</div>
        </div>
        <div style={{
          flexShrink: 0,
          background: PALETTE.orangeSoft, color: PALETTE.orangeDeep,
          borderRadius: 999, padding: '6px 10px',
          fontSize: 12, fontWeight: 700,
          display: 'inline-flex', alignItems: 'center', gap: 5,
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={PALETTE.orangeDeep} strokeWidth="2.4"/><path d="M12 7v5l3 2" stroke={PALETTE.orangeDeep} strokeWidth="2.4" strokeLinecap="round"/></svg>
          {r.minutes} min
        </div>
      </div>

      {/* ─── Section title ──────────────────────────── */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, color: PALETTE.orange, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px' }}>Postup</div>
            <div style={{
              fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
              fontSize: 26, fontWeight: 700, color: PALETTE.ink,
              letterSpacing: '-0.5px', lineHeight: 1.15, marginTop: 4,
            }}>Krok za krokom</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: PALETTE.muted, fontWeight: 600 }}>Aktívna príprava</div>
            <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontSize: 18, fontWeight: 700, color: PALETTE.ink, letterSpacing: '-0.3px' }}>{totalActiveMinutes} min</div>
          </div>
        </div>
      </div>

      {/* ─── Ingredients pill row (quick reference) ─── */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{
          background: PALETTE.white,
          border: `1px solid ${PALETTE.border}`,
          borderRadius: 18, padding: '14px 16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: PALETTE.ink, letterSpacing: '-0.2px' }}>Ingrediencie</div>
            <div style={{ fontSize: 12, color: PALETTE.muted, fontWeight: 600 }}>{r.servings} porcie</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {r.ingredients.map((ing, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: PALETTE.orange, flexShrink: 0 }} />
                  <div style={{ fontSize: 13, color: PALETTE.inkSoft, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ing.name}</div>
                </div>
                <div style={{ fontSize: 13, color: PALETTE.ink, fontWeight: 700, flexShrink: 0 }}>{ing.qty}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Steps ──────────────────────────────────── */}
      <div style={{ padding: '24px 16px 0' }}>
        <div style={{ position: 'relative', paddingLeft: 4 }}>
          {r.steps.map((s, i) => {
            const last = i === r.steps.length - 1;
            return (
              <div key={i} style={{ position: 'relative', paddingLeft: 44, paddingBottom: last ? 0 : 22 }}>
                {!last && (
                  <div style={{
                    position: 'absolute', left: 15, top: 32, bottom: 0, width: 2,
                    background: PALETTE.border,
                  }} />
                )}
                <div style={{
                  position: 'absolute', left: 0, top: 0,
                  width: 32, height: 32, borderRadius: '50%',
                  background: PALETTE.white,
                  border: `2px solid ${PALETTE.orange}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
                  fontSize: 13, fontWeight: 800, color: PALETTE.orange,
                }}>{i + 1}</div>

                <div style={{
                  background: PALETTE.white,
                  border: `1px solid ${PALETTE.border}`,
                  borderRadius: 18,
                  padding: '14px 16px 14px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <div style={{
                      fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
                      fontSize: 15, fontWeight: 700, color: PALETTE.ink,
                      letterSpacing: '-0.2px', lineHeight: 1.3,
                    }}>{s.title}</div>
                    {s.minutes && (
                      <div style={{
                        flexShrink: 0,
                        background: PALETTE.orangeSoft, color: PALETTE.orangeDeep,
                        borderRadius: 999, padding: '3px 9px',
                        fontSize: 11, fontWeight: 700,
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={PALETTE.orangeDeep} strokeWidth="2.4"/><path d="M12 7v5l3 2" stroke={PALETTE.orangeDeep} strokeWidth="2.4" strokeLinecap="round"/></svg>
                        {s.minutes} min
                      </div>
                    )}
                  </div>
                  <div style={{
                    marginTop: 6, fontSize: 13, lineHeight: 1.5,
                    color: PALETTE.inkSoft, fontWeight: 500, textWrap: 'pretty',
                  }}>{s.body}</div>
                </div>
              </div>
            );
          })}

          {/* Finish marker */}
          <div style={{ position: 'relative', paddingLeft: 44, marginTop: 4 }}>
            <div style={{
              position: 'absolute', left: 0, top: 0,
              width: 32, height: 32, borderRadius: '50%',
              background: PALETTE.orange,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{
              fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
              fontSize: 16, fontWeight: 700, color: PALETTE.ink,
              letterSpacing: '-0.3px', paddingTop: 4,
            }}>Hotovo · dobrú chuť!</div>
            <div style={{ fontSize: 12, color: PALETTE.muted, fontWeight: 600, marginTop: 2 }}>Označ ako uvarené a pridaj do dnešného dňa.</div>
          </div>
        </div>
      </div>

      {/* ─── CTA ────────────────────────────────────── */}
      <div style={{ padding: '28px 16px 0', display: 'flex', gap: 10 }}>
        <button style={{
          flex: 1, background: PALETTE.white, color: PALETTE.ink,
          border: `1px solid ${PALETTE.border}`, borderRadius: 18, padding: '15px 16px',
          fontSize: 15, fontWeight: 700, letterSpacing: '-0.2px',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 4h12v17l-6-4-6 4V4z" stroke={PALETTE.ink} strokeWidth="2.2" strokeLinejoin="round"/></svg>
          Uložiť
        </button>
        <button style={{
          flex: 2, background: PALETTE.orange, color: 'white',
          border: 'none', borderRadius: 18, padding: '15px 20px',
          fontSize: 15, fontWeight: 800, letterSpacing: '-0.2px',
          cursor: 'pointer', boxShadow: '0 10px 24px rgba(233,115,23,0.32)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.8" strokeLinecap="round"/></svg>
          Pridať do dnešného dňa
        </button>
      </div>
    </div>
  );
}
