// Calora — Auth screens (Login + Register) — Variant A only
// Matches reference: warm cream bg, logo lockup, segmented tabs,
// labeled inputs with leading icons, big orange CTA, fine print.

const AUTH_PALETTE = PALETTE; // reuse global

// Icons
const IconBolt = ({ c = '#fff', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill={c}/>
  </svg>
);
const IconMail = ({ c = '#5A3F33' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke={c} strokeWidth="1.8"/>
    <path d="M4 7l8 6 8-6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconLock = ({ c = '#5A3F33' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="11" width="16" height="10" rx="2.5" stroke={c} strokeWidth="1.8"/>
    <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconEye = ({ c = '#9A8576' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" stroke={c} strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="3" stroke={c} strokeWidth="1.8"/>
  </svg>
);
const IconUser = ({ c = '#5A3F33' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.8"/>
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

// Logo lockup
function CaloraLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: 44, height: 44, borderRadius: 14, background: AUTH_PALETTE.orangeSoft,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(233,115,23,0.18)',
      }}>
        <IconBolt c={AUTH_PALETTE.orange} size={22} />
      </div>
      <div style={{
        fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
        fontWeight: 800, fontSize: 24, letterSpacing: '-0.5px', color: AUTH_PALETTE.ink,
      }}>Calora</div>
    </div>
  );
}

// Segmented tabs (Prihlásenie / Registrácia)
function AuthTabs({ mode, onChange }) {
  const Item = ({ id, label }) => {
    const active = mode === id;
    return (
      <button onClick={() => onChange(id)} style={{
        flex: 1, padding: '13px 0', borderRadius: 14, border: 'none',
        background: active ? AUTH_PALETTE.white : 'transparent',
        color: active ? AUTH_PALETTE.ink : AUTH_PALETTE.inkSoft,
        fontWeight: 700, fontSize: 15, cursor: 'pointer',
        boxShadow: active ? '0 2px 6px rgba(74,45,30,0.08)' : 'none',
        fontFamily: 'inherit',
      }}>{label}</button>
    );
  };
  return (
    <div style={{
      background: AUTH_PALETTE.creamDeep, borderRadius: 16, padding: 4,
      display: 'flex', gap: 4, marginTop: 22,
    }}>
      <Item id="login" label="Prihlásenie" />
      <Item id="register" label="Registrácia" />
    </div>
  );
}

// Field
function AuthField({ label, icon, placeholder, type = 'text', trailing, value }) {
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: AUTH_PALETTE.ink, marginBottom: 8 }}>{label}</div>
      <div style={{
        background: AUTH_PALETTE.white, border: `1px solid ${AUTH_PALETTE.border}`,
        borderRadius: 14, padding: '0 14px', height: 50,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        {icon}
        <input
          type={type === 'password' ? 'password' : 'text'}
          placeholder={placeholder}
          defaultValue={value}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontSize: 15.5, color: AUTH_PALETTE.ink, fontFamily: 'inherit',
            padding: 0, minWidth: 0,
          }}
        />
        {trailing}
      </div>
    </div>
  );
}

// ── Login (matches reference) ───────────────────────────────
function AuthLogin() {
  const [mode, setMode] = React.useState('login');
  return (
    <div style={{
      background: AUTH_PALETTE.cream, width: '100%', height: '100%',
      fontFamily: "'Schibsted Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif",
      color: AUTH_PALETTE.ink, padding: '28px 24px 24px',
    }}>
      <CaloraLogo />

      <div style={{ marginTop: 30 }}>
        <div style={{
          fontFamily: "'Schibsted Grotesk', system-ui, sans-serif",
          fontWeight: 700, fontSize: 36, letterSpacing: '-1px', lineHeight: 1.05,
        }}>Vitaj späť</div>
        <div style={{ fontSize: 15, color: AUTH_PALETTE.inkSoft, marginTop: 6 }}>
          Prihlás sa pre prístup k svojim dátam.
        </div>
      </div>

      <AuthTabs mode={mode} onChange={setMode} />

      {mode === 'login' ? (
        <>
          <AuthField label="E-mail" icon={<IconMail />} placeholder="ty@pribehom.sk" />
          <AuthField label="Heslo" icon={<IconLock />} placeholder="Aspoň 8 znakov" type="password"
            trailing={<button style={{ background: 'none', border: 'none', padding: 4, cursor: 'pointer' }}><IconEye /></button>} />

          <button style={{
            marginTop: 22, width: '100%', height: 56, borderRadius: 999,
            background: AUTH_PALETTE.orange, color: 'white', border: 'none',
            fontWeight: 700, fontSize: 16, cursor: 'pointer',
            boxShadow: '0 10px 22px rgba(233,115,23,0.32)', fontFamily: 'inherit',
          }}>Prihlásiť sa</button>

          <div style={{ marginTop: 16, textAlign: 'center', fontSize: 14, color: AUTH_PALETTE.inkSoft }}>
            Si tu prvýkrát?{' '}
            <button onClick={() => setMode('register')} style={{
              background: 'none', border: 'none', padding: 0, cursor: 'pointer',
              color: AUTH_PALETTE.orangeDeep, fontWeight: 700, fontSize: 14, fontFamily: 'inherit',
            }}>Zaregistruj sa</button>
          </div>

          <div style={{
            marginTop: 18, fontSize: 12.5, color: AUTH_PALETTE.muted,
            textAlign: 'center', lineHeight: 1.5, padding: '0 8px',
          }}>
            Pokračovaním súhlasíš s tým, že tvoje dáta o stravovaní budú bezpečne zálohované v cloude.
          </div>
        </>
      ) : (
        <>
          <AuthField label="Meno" icon={<IconUser />} placeholder="Tvoje krstné meno" />
          <AuthField label="E-mail" icon={<IconMail />} placeholder="ty@pribehom.sk" />
          <AuthField label="Heslo" icon={<IconLock />} placeholder="Aspoň 8 znakov" type="password"
            trailing={<button style={{ background: 'none', border: 'none', padding: 4, cursor: 'pointer' }}><IconEye /></button>} />

          <button style={{
            marginTop: 22, width: '100%', height: 56, borderRadius: 999,
            background: AUTH_PALETTE.orange, color: 'white', border: 'none',
            fontWeight: 700, fontSize: 16, cursor: 'pointer',
            boxShadow: '0 10px 22px rgba(233,115,23,0.32)', fontFamily: 'inherit',
          }}>Vytvoriť účet</button>

          <div style={{ marginTop: 16, textAlign: 'center', fontSize: 14, color: AUTH_PALETTE.inkSoft }}>
            Už máš účet?{' '}
            <button onClick={() => setMode('login')} style={{
              background: 'none', border: 'none', padding: 0, cursor: 'pointer',
              color: AUTH_PALETTE.orangeDeep, fontWeight: 700, fontSize: 14, fontFamily: 'inherit',
            }}>Prihlás sa</button>
          </div>

          <div style={{
            marginTop: 18, fontSize: 12.5, color: AUTH_PALETTE.muted,
            textAlign: 'center', lineHeight: 1.5, padding: '0 8px',
          }}>
            Registráciou súhlasíš s podmienkami používania a so spracovaním osobných údajov.
          </div>
        </>
      )}
    </div>
  );
}

Object.assign(window, { AuthLogin });
