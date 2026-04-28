// Calora — Recipes screen (Variant A · Teplá neutrálna)
// Premium recipe list: photo, title, prep time, calories + macros, generous spacing

// 5-tab nav with Recepty active (warm/A palette)
function FloatingNavRecipes() {
  const items = [
    { id: 'home', label: 'Prehľad',
      icon: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z" stroke={c} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round"/></svg> },
    { id: 'progress', label: 'Progres',
      icon: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="13" width="3.5" height="7" rx="1" fill={c}/><rect x="10.25" y="9" width="3.5" height="11" rx="1" fill={c}/><rect x="16.5" y="5" width="3.5" height="15" rx="1" fill={c}/></svg> },
    { id: 'recipes', label: 'Recepty', active: true,
      icon: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z" stroke={c} strokeWidth="2.2" strokeLinejoin="round"/><path d="M8 8h7M8 12h7M8 16h4" stroke={c} strokeWidth="2.2" strokeLinecap="round"/></svg> },
    { id: 'coach', label: 'Tomáš', avatar: true },
    { id: 'settings', label: 'Nastavenia',
      icon: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke={c} strokeWidth="2.2"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14 3h-4l-.6 2.6a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2 1.2L10 21h4l.6-2.6a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z" stroke={c} strokeWidth="1.9" strokeLinejoin="round"/></svg> },
  ];
  return (
    <div style={{
      position: 'absolute', left: 10, right: 10, bottom: 18, zIndex: 1,
      background: PALETTE.cream, border: `1px solid ${PALETTE.border}`,
      borderRadius: 999, padding: '10px 10px',
      display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
      boxShadow: '0 10px 28px rgba(74,45,30,0.12)', alignItems: 'center',
    }}>
      {items.map(it => {
        const on = it.active;
        const color = on ? PALETTE.orange : PALETTE.inkSoft;
        return (
          <div key={it.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            {it.avatar ? (
              <img src="tomas-avatar.png" alt="Tomáš" style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
            ) : on ? (
              <div style={{ width: 40, height: 40, borderRadius: 12, background: PALETTE.orangeSoft,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{it.icon(PALETTE.orange)}</div>
            ) : (
              <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{it.icon(color)}</div>
            )}
            <div style={{ fontSize: 11, fontWeight: on ? 800 : 600, color: on ? PALETTE.orange : PALETTE.inkSoft, letterSpacing: '-0.1px' }}>{it.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// ── Recipe data ──────────────────────────────────────────────
const RECIPES = [
  {
    id: 'r1',
    title: 'Kuracie prsia s ryžou a brokolicou',
    tag: 'Obed',
    tagColor: PALETTE.sage,
    tagBg: PALETTE.sageSoft,
    minutes: 25,
    kcal: 520,
    protein: 42,
    carbs: 58,
    fat: 12,
    bg: 'linear-gradient(135deg, #E9C9A0 0%, #C58A3E 100%)',
    emoji: '🍗',
  },
  {
    id: 'r2',
    title: 'Ovsená kaša s lesným ovocím a mandľami',
    tag: 'Raňajky',
    tagColor: PALETTE.gold,
    tagBg: PALETTE.goldSoft,
    minutes: 10,
    kcal: 380,
    protein: 14,
    carbs: 56,
    fat: 11,
    bg: 'linear-gradient(135deg, #F5DBB6 0%, #B45E4C 100%)',
    emoji: '🥣',
  },
  {
    id: 'r3',
    title: 'Lososový bowl s avokádom a quinoou',
    tag: 'Večera',
    tagColor: PALETTE.plum,
    tagBg: PALETTE.plumSoft,
    minutes: 30,
    kcal: 610,
    protein: 38,
    carbs: 42,
    fat: 28,
    bg: 'linear-gradient(135deg, #F3D8CE 0%, #B45E4C 100%)',
    emoji: '🥗',
  },
  {
    id: 'r4',
    title: 'Grécky jogurt s medom a vlašskými orechmi',
    tag: 'Snack',
    tagColor: PALETTE.teal,
    tagBg: PALETTE.tealSoft,
    minutes: 5,
    kcal: 240,
    protein: 18,
    carbs: 22,
    fat: 9,
    bg: 'linear-gradient(135deg, #FBE9C9 0%, #C88A2E 100%)',
    emoji: '🍯',
  },
  {
    id: 'r5',
    title: 'Cuketové fašírky s cesnakovým dipom',
    tag: 'Obed',
    tagColor: PALETTE.sage,
    tagBg: PALETTE.sageSoft,
    minutes: 35,
    kcal: 460,
    protein: 28,
    carbs: 32,
    fat: 22,
    bg: 'linear-gradient(135deg, #DDE3B8 0%, #8C9D5E 100%)',
    emoji: '🥒',
  },
];

// ── Recipe card ──────────────────────────────────────────────
function RecipeCard({ r }) {
  return (
    <div style={{
      background: PALETTE.white,
      borderRadius: 22,
      border: `1px solid ${PALETTE.border}`,
      overflow: 'hidden',
      boxShadow: '0 1px 0 rgba(74,45,30,0.04)',
    }}>
      {/* Photo */}
      <div style={{
        position: 'relative',
        height: 168,
        background: r.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ fontSize: 76, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.18))' }}>{r.emoji}</div>
        {/* Tag chip */}
        <div style={{
          position: 'absolute', top: 14, left: 14,
          background: r.tagBg, color: r.tagColor,
          borderRadius: 999, padding: '5px 11px',
          fontSize: 12, fontWeight: 700, letterSpacing: '0.2px',
        }}>{r.tag}</div>
        {/* Bookmark */}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(255,251,244,0.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(6px)',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 4h12v17l-6-4-6 4V4z" stroke={PALETTE.ink} strokeWidth="2.2" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '16px 18px 18px' }}>
        {/* Time + servings row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: PALETTE.muted, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={PALETTE.muted} strokeWidth="2"/><path d="M12 7v5l3 2" stroke={PALETTE.muted} strokeWidth="2" strokeLinecap="round"/></svg>
            {r.minutes} min
          </span>
          <span style={{ width: 3, height: 3, background: PALETTE.muted, borderRadius: '50%', opacity: 0.5 }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 12c0-4 4-7 9-7s9 3 9 7" stroke={PALETTE.muted} strokeWidth="2" strokeLinecap="round"/><path d="M3 14h18M5 17h14M7 20h10" stroke={PALETTE.muted} strokeWidth="2" strokeLinecap="round"/></svg>
            2 porcie
          </span>
        </div>

        {/* Title */}
        <div style={{
          fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
          fontSize: 19, fontWeight: 700, color: PALETTE.ink,
          letterSpacing: '-0.4px', lineHeight: 1.25,
          textWrap: 'pretty',
        }}>{r.title}</div>

        {/* Nutrients */}
        <div style={{
          marginTop: 14,
          display: 'flex', alignItems: 'center', gap: 0,
          borderTop: `1px solid ${PALETTE.borderSoft}`,
          paddingTop: 14,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: PALETTE.muted, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Kcal</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: PALETTE.ink, marginTop: 2 }}>{r.kcal}</div>
          </div>
          <div style={{ width: 1, alignSelf: 'stretch', background: PALETTE.borderSoft }} />
          <div style={{ flex: 1, paddingLeft: 14 }}>
            <div style={{ fontSize: 11, color: PALETTE.sage, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Bielk</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: PALETTE.ink, marginTop: 2 }}>{r.protein}<span style={{ fontSize: 12, color: PALETTE.muted, fontWeight: 600 }}> g</span></div>
          </div>
          <div style={{ width: 1, alignSelf: 'stretch', background: PALETTE.borderSoft }} />
          <div style={{ flex: 1, paddingLeft: 14 }}>
            <div style={{ fontSize: 11, color: PALETTE.gold, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Sach</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: PALETTE.ink, marginTop: 2 }}>{r.carbs}<span style={{ fontSize: 12, color: PALETTE.muted, fontWeight: 600 }}> g</span></div>
          </div>
          <div style={{ width: 1, alignSelf: 'stretch', background: PALETTE.borderSoft }} />
          <div style={{ flex: 1, paddingLeft: 14 }}>
            <div style={{ fontSize: 11, color: PALETTE.plum, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tuky</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: PALETTE.ink, marginTop: 2 }}>{r.fat}<span style={{ fontSize: 12, color: PALETTE.muted, fontWeight: 600 }}> g</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Header + filter chips ────────────────────────────────────
function RecipesHeader() {
  return (
    <div style={{ padding: '10px 20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: "'Schibsted Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 32, color: PALETTE.ink, letterSpacing: '-0.5px', lineHeight: 1.05 }}>Recepty</div>
          <div style={{ marginTop: 4, color: PALETTE.muted, fontSize: 14, fontWeight: 500 }}>Vybrané pre tvoj cieľ — 1 800 kcal</div>
        </div>
        <button style={{
          width: 44, height: 44, borderRadius: 14,
          background: PALETTE.white, border: `1px solid ${PALETTE.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M11 5a6 6 0 1 1 0 12 6 6 0 0 1 0-12zM21 21l-4.3-4.3" stroke={PALETTE.ink} strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function FilterChips() {
  const chips = [
    { label: 'Všetko', active: true },
    { label: 'Raňajky' },
    { label: 'Obed' },
    { label: 'Večera' },
    { label: 'Snack' },
    { label: 'Vegán' },
  ];
  return (
    <div style={{
      display: 'flex', gap: 8, padding: '14px 20px 6px',
      overflowX: 'auto', scrollbarWidth: 'none',
    }}>
      {chips.map((c, i) => (
        <div key={i} style={{
          flex: '0 0 auto',
          padding: '8px 14px',
          borderRadius: 999,
          background: c.active ? PALETTE.ink : PALETTE.white,
          color: c.active ? PALETTE.cream : PALETTE.inkSoft,
          border: c.active ? 'none' : `1px solid ${PALETTE.border}`,
          fontSize: 13, fontWeight: 700,
        }}>{c.label}</div>
      ))}
    </div>
  );
}

// ── Recipes screen ──────────────────────────────────────────
function RecipesWarm() {
  return (
    <div style={{ background: PALETTE.cream, minHeight: '100%', paddingBottom: 120 }}>
      <RecipesHeader />
      <FilterChips />
      <div style={{ padding: '12px 20px 0', display: 'flex', flexDirection: 'column', gap: 18 }}>
        {RECIPES.map(r => <RecipeCard key={r.id} r={r} />)}
      </div>
    </div>
  );
}
