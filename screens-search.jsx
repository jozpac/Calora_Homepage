// Calora — Food Search screen (3 variants A/B/C)
// Search header with query input + scan/photo actions, grouped results:
// "Bežné potraviny" (common foods) and "Značkové produkty" (brand products).

// ── Shared data ─────────────────────────────────────────────
const SEARCH_QUERY = 'banán';
const COMMON_FOODS = [
  { name: 'Banán', meta: '89 kcal · B1 S23 T0 / 100g', thumb: 'apple', tone: 'warm' },
  { name: 'Banana peanut butter smoothie', meta: '200 kcal · B10 S22 T8 / 100g', thumb: null, tone: 'cream' },
  { name: 'Oats with banana', meta: '200 kcal · B10 S22 T8 / 100g', thumb: null, tone: 'cream' },
];
const BRAND_FOODS = [
  { name: 'Banán + jablko', brand: 'Nutrend', meta: '342 kcal · B2 S65 T5 / 100g', thumb: 'pink-apple' },
  { name: 'jablko banán jahoda', brand: 'Relax', meta: '42 kcal · B0 S10 T0 / 100g', thumb: 'relax' },
  { name: 'Lipánek kakao/banán', brand: 'Madeta', meta: '164 kcal · B8 S16 T8 / 100g', thumb: 'pink-apple' },
  { name: 'Kefírové mléko banán', brand: 'Mlékárna Kunín', meta: '69 kcal · B3 S11 T1 / 100g', thumb: 'bottle' },
  { name: 'Banán eper püré', brand: null, meta: '77 kcal · B1 S17 T1 / 100g', thumb: 'pink-apple' },
];

// ── Icon atoms ──────────────────────────────────────────────
const IconSearch = ({ c = '#5A3F33', size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke={c} strokeWidth="2"/>
    <path d="M20 20l-3.5-3.5" stroke={c} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconClose = ({ c = '#2A1A14', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M18 6L6 18" stroke={c} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconClear = ({ c = '#9A8576' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill={c} opacity="0.18"/>
    <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke={c} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconCamera = ({ c = '#C75A08' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="7" width="18" height="13" rx="2.5" stroke={c} strokeWidth="1.8"/>
    <path d="M8 7l1.5-2.5h5L16 7" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="12" cy="13.5" r="3.2" stroke={c} strokeWidth="1.8"/>
  </svg>
);
const IconScan = ({ c = '#C75A08' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M4 12h16" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconGrid = ({ c = '#9A8576' }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="7" height="7" rx="1.2" stroke={c} strokeWidth="1.8"/>
    <rect x="13" y="4" width="7" height="7" rx="1.2" stroke={c} strokeWidth="1.8"/>
    <rect x="4" y="13" width="7" height="7" rx="1.2" stroke={c} strokeWidth="1.8"/>
    <rect x="13" y="13" width="7" height="7" rx="1.2" stroke={c} strokeWidth="1.8"/>
  </svg>
);
const IconBarcode = ({ c = '#9A8576' }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M4 5v14M7 5v14M10 5v14M13 5v14M16 5v14M20 5v14" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const IconChevron = ({ c = '#9A8576' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M9 6l6 6-6 6" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Thumbnail placeholder ───────────────────────────────────
function FoodThumb({ kind }) {
  // Subtly distinct tiles per kind — no invented brand artwork.
  if (kind === 'apple') {
    return (
      <div style={{
        width: 44, height: 44, borderRadius: 12, background: PALETTE.creamDeep,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {/* minimal apple glyph — ok per rules (circle-ish) */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M12 7c-3-2.5-7-1-7 3 0 3 2 8 5 9 .8.3 1.6-.2 2-.2s1.2.5 2 .2c3-1 5-6 5-9 0-4-4-5.5-7-3z" fill="#C94A3A"/>
          <path d="M12 7c.5-1.3 1.6-2.2 3-2.2" stroke="#6B4A2A" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </div>
    );
  }
  if (kind === 'pink-apple') {
    return (
      <div style={{
        width: 44, height: 44, borderRadius: 12, background: '#F4C9CE',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 7c-3-2.5-7-1-7 3 0 3 2 8 5 9 .8.3 1.6-.2 2-.2s1.2.5 2 .2c3-1 5-6 5-9 0-4-4-5.5-7-3z" fill="#2A1A14"/>
        </svg>
      </div>
    );
  }
  if (kind === 'relax') {
    return (
      <div style={{
        width: 44, height: 44, borderRadius: 10, background: '#F6D66A',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        border: '1px solid rgba(0,0,0,0.08)',
      }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: '#C44A4A', letterSpacing: '-0.3px' }}>Relax</div>
      </div>
    );
  }
  if (kind === 'bottle') {
    return (
      <div style={{
        width: 44, height: 44, borderRadius: 10, background: '#EAF2F5',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width="18" height="26" viewBox="0 0 18 26" fill="none">
          <rect x="5" y="2" width="8" height="4" rx="0.5" fill="#6FA8C9"/>
          <path d="M4 7h10v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" fill="#BBD4E1"/>
          <rect x="4" y="12" width="10" height="5" fill="#FFF"/>
        </svg>
      </div>
    );
  }
  // plain cream tile
  return (
    <div style={{
      width: 44, height: 44, borderRadius: 12, background: PALETTE.creamDeep, flexShrink: 0,
    }} />
  );
}

// ── Result row ──────────────────────────────────────────────
function FoodRow({ item, tone = 'light', dense = false }) {
  const dark = tone === 'ink';
  const bg = dark ? 'rgba(253,242,228,0.06)' : PALETTE.white;
  const border = dark ? 'rgba(253,242,228,0.12)' : PALETTE.border;
  const title = dark ? PALETTE.cream : PALETTE.ink;
  const meta = dark ? 'rgba(253,242,228,0.6)' : PALETTE.muted;
  const sub = dark ? 'rgba(253,242,228,0.75)' : PALETTE.inkSoft;
  return (
    <div style={{
      background: bg, border: `1px solid ${border}`, borderRadius: 16,
      padding: dense ? '10px 12px' : '12px 14px',
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <FoodThumb kind={item.thumb} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15.5, fontWeight: 700, color: title, lineHeight: 1.2, letterSpacing: '-0.1px',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {item.name}
        </div>
        {item.brand ? (
          <div style={{ fontSize: 13, color: sub, marginTop: 2 }}>{item.brand}</div>
        ) : null}
        <div style={{ fontSize: 12.5, color: meta, marginTop: 2, fontFamily: '"SF Mono", ui-monospace, monospace' }}>
          {item.meta}
        </div>
      </div>
      <IconChevron c={dark ? 'rgba(253,242,228,0.45)' : PALETTE.muted} />
    </div>
  );
}

// ── Section header ──────────────────────────────────────────
function SectionLabel({ icon, text, tone = 'light' }) {
  const dark = tone === 'ink';
  const c = dark ? 'rgba(253,242,228,0.65)' : PALETTE.muted;
  return (
    <div style={{
      margin: '20px 20px 10px', display: 'flex', alignItems: 'center', gap: 7,
      fontSize: 11.5, fontWeight: 800, letterSpacing: 1.3, textTransform: 'uppercase', color: c,
    }}>
      {icon}
      {text}
    </div>
  );
}

// ── Search field + actions ──────────────────────────────────
function SearchField({ tone = 'light', query = SEARCH_QUERY }) {
  const dark = tone === 'ink';
  const bg = dark ? 'rgba(253,242,228,0.08)' : PALETTE.white;
  const border = dark ? 'rgba(253,242,228,0.18)' : PALETTE.border;
  const fg = dark ? PALETTE.cream : PALETTE.ink;
  const icon = dark ? 'rgba(253,242,228,0.65)' : PALETTE.inkSoft;
  return (
    <div style={{
      margin: '6px 20px 0', background: bg, border: `1px solid ${border}`,
      borderRadius: 14, padding: '12px 14px',
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <IconSearch c={icon} />
      <div style={{ flex: 1, fontSize: 16, color: fg, fontWeight: 500 }}>{query}</div>
      <IconClear c={dark ? 'rgba(253,242,228,0.45)' : PALETTE.muted} />
    </div>
  );
}

function SearchActions({ tone = 'light' }) {
  const dark = tone === 'ink';
  const bg = dark ? 'rgba(233,115,23,0.14)' : PALETTE.orangeSoft;
  const fg = PALETTE.orangeDeep;
  const borderC = dark ? 'rgba(233,115,23,0.28)' : 'transparent';
  const Btn = ({ icon, label }) => (
    <button style={{
      background: bg, border: `1px solid ${borderC}`, color: fg,
      borderRadius: 12, padding: '8px 14px', fontWeight: 700, fontSize: 14,
      display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
      fontFamily: 'inherit',
    }}>
      {icon}
      {label}
    </button>
  );
  return (
    <div style={{ margin: '10px 20px 0', display: 'flex', gap: 10 }}>
      <Btn icon={<IconCamera c={fg} />} label="Fotka" />
      <Btn icon={<IconScan c={fg} />} label="Skenovať kód" />
    </div>
  );
}

// ── Top bar (Hľadať + close) ───────────────────────────────
function SearchTopBar({ tone = 'light', title = 'Hľadať' }) {
  const dark = tone === 'ink';
  const fg = dark ? PALETTE.cream : PALETTE.ink;
  return (
    <div style={{
      padding: '8px 16px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{
        fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
        fontWeight: 700, fontSize: 22, color: fg, letterSpacing: '-0.3px',
      }}>{title}</div>
      <button style={{
        width: 36, height: 36, borderRadius: '50%', background: 'transparent',
        border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', padding: 0,
      }}><IconClose c={fg} /></button>
    </div>
  );
}

// ── A · Teplá neutrálna ─────────────────────────────────────
function SearchWarm() {
  return (
    <div style={{
      background: PALETTE.cream, width: '100%', height: '100%',
      fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif",
      color: PALETTE.ink, paddingBottom: 24,
    }}>
      <SearchTopBar tone="light" />
      <SearchField tone="light" />
      <SearchActions tone="light" />

      <SectionLabel icon={<IconGrid c={PALETTE.muted} />} text="Bežné potraviny" tone="light" />
      <div style={{ margin: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {COMMON_FOODS.map((f, i) => <FoodRow key={i} item={f} tone="light" />)}
      </div>

      <SectionLabel icon={<IconBarcode c={PALETTE.muted} />} text="Značkové produkty" tone="light" />
      <div style={{ margin: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {BRAND_FOODS.map((f, i) => <FoodRow key={i} item={f} tone="light" />)}
      </div>
    </div>
  );
}

// ── B · Atramentové hero ────────────────────────────────────
function SearchInk() {
  return (
    <div style={{
      background: PALETTE.cream, width: '100%', height: '100%',
      fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif",
      color: PALETTE.ink, paddingBottom: 24,
    }}>
      <div style={{ background: PALETTE.ink, borderRadius: '0 0 24px 24px', paddingBottom: 14 }}>
        <SearchTopBar tone="ink" />
        <SearchField tone="ink" />
        <SearchActions tone="ink" />
      </div>

      <SectionLabel icon={<IconGrid c={PALETTE.muted} />} text="Bežné potraviny" tone="light" />
      <div style={{ margin: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {COMMON_FOODS.map((f, i) => <FoodRow key={i} item={f} tone="light" />)}
      </div>

      <SectionLabel icon={<IconBarcode c={PALETTE.muted} />} text="Značkové produkty" tone="light" />
      <div style={{ margin: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {BRAND_FOODS.map((f, i) => <FoodRow key={i} item={f} tone="light" />)}
      </div>
    </div>
  );
}

// ── C · Editorial ───────────────────────────────────────────
function SearchEditorial() {
  return (
    <div style={{
      background: '#FAF3E4', width: '100%', height: '100%',
      fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif",
      color: PALETTE.ink, paddingBottom: 24,
    }}>
      <div style={{ padding: '10px 22px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11.5, color: PALETTE.muted, fontWeight: 800, letterSpacing: 1.3, textTransform: 'uppercase' }}>Pridať jedlo</div>
          <div style={{
            fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
            fontWeight: 600, fontSize: 34, color: PALETTE.ink, letterSpacing: '-1px', lineHeight: 1, marginTop: 2,
          }}>Hľadať</div>
        </div>
        <button style={{
          width: 36, height: 36, borderRadius: '50%', background: 'transparent',
          border: `1px solid ${PALETTE.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', padding: 0,
        }}><IconClose c={PALETTE.ink} /></button>
      </div>

      {/* Editorial search: underlined input, inline-chip actions */}
      <div style={{ margin: '14px 22px 0', borderBottom: `1.5px solid ${PALETTE.ink}`, paddingBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
        <IconSearch c={PALETTE.ink} size={18} />
        <div style={{ flex: 1, fontSize: 18, color: PALETTE.ink, fontWeight: 500 }}>{SEARCH_QUERY}</div>
        <IconClear c={PALETTE.muted} />
      </div>
      <div style={{ margin: '12px 22px 0', display: 'flex', gap: 16, fontSize: 13, fontWeight: 700, color: PALETTE.orangeDeep }}>
        <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'inherit', color: 'inherit', fontWeight: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3 }}>
          <IconCamera c={PALETTE.orangeDeep} /> Pridať fotkou
        </button>
        <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'inherit', color: 'inherit', fontWeight: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3 }}>
          <IconScan c={PALETTE.orangeDeep} /> Skenovať kód
        </button>
      </div>

      {/* Editorial section with rule line */}
      {[
        { title: 'Bežné potraviny', items: COMMON_FOODS, icon: <IconGrid c={PALETTE.muted} /> },
        { title: 'Značkové produkty', items: BRAND_FOODS, icon: <IconBarcode c={PALETTE.muted} /> },
      ].map((g, gi) => (
        <div key={gi}>
          <div style={{
            margin: '22px 22px 10px', display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ height: 1, flex: '0 0 22px', background: PALETTE.ink }} />
            <div style={{ fontSize: 11.5, color: PALETTE.ink, fontWeight: 800, letterSpacing: 1.3, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 7 }}>
              {g.icon} {g.title}
            </div>
            <div style={{ height: 1, flex: 1, background: PALETTE.border }} />
          </div>
          <div style={{ margin: '0 22px', display: 'flex', flexDirection: 'column' }}>
            {g.items.map((f, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '12px 0', borderBottom: i === g.items.length - 1 ? 'none' : `1px solid ${PALETTE.borderSoft}`,
              }}>
                <FoodThumb kind={f.thumb} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
                    fontWeight: 600, fontSize: 17, color: PALETTE.ink, letterSpacing: '-0.2px',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>{f.name}</div>
                  {f.brand ? <div style={{ fontSize: 12.5, color: PALETTE.inkSoft, fontStyle: 'italic', marginTop: 1 }}>{f.brand}</div> : null}
                  <div style={{ fontSize: 12, color: PALETTE.muted, marginTop: 2, fontFamily: '"SF Mono", ui-monospace, monospace' }}>{f.meta}</div>
                </div>
                <IconChevron c={PALETTE.muted} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  SearchWarm, SearchInk, SearchEditorial,
});
