import React from "react";
import { Phone, MapPin, Home, Users, Bell, Briefcase, ChevronDown } from "lucide-react";

import logo from "../assets/logoo.png";

export default function KigFinanceHome() {
  return (
    <div style={styles.page}>
      <style>{css}</style>

      {/* Top dark bar */}
      <div style={styles.topBar}>
        <div className="xc-topbar-inner" style={styles.topBarInner}>
          <div className="xc-topbar-left" style={styles.topBarLeft}>
            <span className="xc-topbar-label">Have any questions? Call us</span>
            <span style={styles.topBarPhone}>
              <Phone size={13} style={{ marginRight: 6 }} />
              (+250) 788 348 066
            </span>
          </div>
          <div className="xc-topbar-right" style={styles.topBarRight}>
            <span>Events</span>
            <span style={styles.dot}>/</span>
            <span>News</span>
            <span style={styles.dot}>/</span>
            <span>Emergency Call</span>
          </div>
        </div>
      </div>

      {/* Gray backdrop behind header + hero */}
      <div style={styles.backdrop}>
      {/* Header / nav card */}
      <header className="xc-header-wrap" style={styles.headerWrap}>
        <div className="xc-header-card" style={styles.headerCard}>
          <div className="xc-logo" style={styles.logo}>
            <img
              src={logo}
              alt="Kig Finance logo"
              style={styles.logoImage}
            />
          </div>

          <div className="xc-contact-block" style={styles.contactBlock}>
            <div style={styles.contactItem}>
              <span style={styles.iconCircle}>
                <Phone size={16} color="#00c22d" />
              </span>
              <div>
                <div style={styles.contactLabel}>Phone number:</div>
                <div style={styles.contactValue}>(+250) 788 348 066</div>
              </div>
            </div>
            <span className="xc-divider" style={styles.divider} />
            <div style={styles.contactItem}>
              <span style={styles.iconCircle}>
                <MapPin size={16} color="#00c22d" />
              </span>
              <div>
                <div style={styles.contactLabel}>Address:</div>
                <div style={styles.contactValue}>KG 17 Ave-Kigali, Remera,<br></br> Opposite BK Arena</div>
              </div>
            </div>
          </div>
        </div>

        <nav className="xc-nav" style={styles.nav}>
          <ul className="xc-nav-list" style={styles.navList}>
            <li style={styles.navItemActive}>Home</li>
            <li style={styles.navItem}>About Us</li>
            <li style={styles.navItem}>
              Services <ChevronDown size={12} />
            </li>
            <li style={styles.navItem}>FAQ's</li>
            <li style={styles.navItem}>Blog</li>
            <li style={styles.navItem}>
              Shop <ChevronDown size={12} />
            </li>
            <li style={styles.navItem}>Contact Us</li>
          </ul>
           <div style={styles.socials} aria-label="Social media links">
            <span>Facebook</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="xc-hero" style={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=1400&q=80"
          alt="Kig Finance hero"
          className="xc-hero-image"
          style={styles.heroImage}
        />
        <div className="xc-hero-text" style={styles.heroTextWrap}>
          <div className="xc-eyebrow" style={styles.eyebrow}>Finance</div>
          <div className="xc-headline" style={styles.headline}>Wealth by Investing and Saving</div>
          <div style={styles.heroSubtitle}>Build stability with smart, inclusive financial tools.</div>
        </div>
        <div style={styles.heroCurve} />
      </section>
      </div>

      {/* Feature cards */}
      <section className="xc-features" style={styles.features}>
        <FeatureCard icon={<Home size={26} />} title="Instant Capital Access" text="Savings Barrier Elimination: Position the institution as the fastest alternative to traditional banks by eliminating the mandatory deposit or compulsory savings phase before loan approval." />
        <FeatureCard icon={<Users size={26} />} title="Risk Management & Portfolio Quality" text="Healthy Repayment Culture: Maintain a low Portfolio at Risk (PAR < 5%) by designing flexible, income-aligned repayment schedules (weekly/monthly) that match the cash flow of middle-income borrowers." />
        <FeatureCard icon={<Bell size={26} />} title="Efficient Fund Sourcing" text="Capital Diversification: Secure affordable wholesale credit lines and equity from local banks, International investors and companies to sustain credit lending capacity." />
        <FeatureCard icon={<Briefcase size={26} />} title="Digital-First Credit Delivery" text="Mobile Credit Distribution: Leverage USSD, SMS, and mobile apps to handle the entire loan lifecycle-from digital application to instant automated disbursement into MTN Mobile Money or Airtel Money wallets" />
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="xc-card" style={styles.card}>
      <div style={styles.cardIconCircle}>{icon}</div>
      <div style={styles.cardTitle}>{title}</div>
      <div style={styles.cardText}>{text}</div>
      <div style={styles.cardLink}>Learn more</div>
    </div>
  );
}

const ORANGE = "#00c22d";
const DARK = "#2e2a26";

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
    color: DARK,
    background: "#fbfaf8",
  },
  topBar: {
    background: DARK,
    color: "#cfcac4",
    fontSize: 12,
  },
  backdrop: {
    background: "linear-gradient(180deg, #c7c2bb 0%, #cdc8c1 60%, #cdc8c1 100%)",
  },
  topBarInner: {
    maxWidth: 1140,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 20px",
  },
  topBarLeft: { display: "flex", alignItems: "center", gap: 10 },
  topBarPhone: { display: "flex", alignItems: "center", color: "#fff", fontWeight: 600 },
  topBarRight: { display: "flex", alignItems: "center", gap: 8 },
  dot: { opacity: 0.5 },

  headerWrap: {
    maxWidth: 1000,
    margin: "-28px auto 0",
    position: "relative",
    zIndex: 3,
    background: "#fff",
    borderRadius: 4,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  headerCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 30px 12px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  logoImage: {
    width: 100,
    height: "auto",
    objectFit: "contain",
  },

  contactBlock: { display: "flex", alignItems: "center", gap: 18 },
  contactItem: { display: "flex", alignItems: "center", gap: 10 },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: `1px solid ${ORANGE}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  contactLabel: { fontSize: 11, color: "#999" },
  contactValue: { fontSize: 14, fontWeight: 700 },
  divider: { width: 1, height: 34, background: "#e5e0da" },

  nav: {
    borderTop: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: 26,
    fontSize: 13,
    fontWeight: 600,
  },
  navItem: { display: "flex", alignItems: "center", gap: 4, color: "#333", cursor: "pointer" },
  navItemActive: { color: ORANGE, cursor: "pointer" },
  socials: { display: "flex", gap: 12, color: "#333" },

  hero: { position: "relative", overflow: "hidden", height: 520 },
  heroImage: { width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(15%)" },
  heroTextWrap: {
    position: "absolute",
    left: "50%",
    top: "62%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  eyebrow: {
    display: "inline-block",
    background: "rgba(46,42,38,0.85)",
    color: "#fff",
    fontSize: 12,
    letterSpacing: 3,
    fontWeight: 600,
    padding: "10px 22px",
  },
  headline: {
    background: "#00c22d",
    color: DARK,
    fontSize: 34,
    fontWeight: 700,
    padding: "20px 40px",
    marginTop: -1,
    maxWidth: 620,
    lineHeight: 1.25,
  },
  heroCurve: {
    position: "absolute",
    bottom: -1,
    left: 0,
    right: 0,
    height: 60,
    background: "#fff",
    borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
    transform: "scaleX(1.6)",
  },
  heroSubtitle: {
    marginTop: 10,
    color: "#fff",
    fontSize: 16,
    textShadow: "0 2px 12px rgba(0,0,0,0.25)",
    maxWidth: 560,
    marginLeft: "auto",
    marginRight: "auto",
  },
  features: {
    maxWidth: 1140,
    margin: "-40px auto 60px",
    position: "relative",
    zIndex: 2,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
    padding: "0 20px",
  },
  card: { textAlign: "center", padding: "0 10px" },
  cardIconCircle: {
    width: 88,
    height: 88,
    borderRadius: "50%",
    border: "1px solid #eee",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 18px",
    color: DARK,
    background: "#fff",
  },
  cardTitle: { fontWeight: 700, fontSize: 16, marginBottom: 8 },
  cardText: { fontSize: 13, color: "#8a8580", lineHeight: 1.6, marginBottom: 10 },
  cardLink: { fontSize: 12, fontWeight: 700, color: ORANGE, cursor: "pointer" },
};

const css = `
  /* ---------- Tablet (<=900px) ---------- */
  @media (max-width: 900px) {
    .xc-topbar-inner {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 6px !important;
      padding: 8px 16px !important;
    }
    .xc-header-wrap {
      max-width: 92% !important;
      margin: -20px auto 0 !important;
    }
    .xc-header-card {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 16px !important;
      padding: 18px 20px 14px !important;
    }
    .xc-contact-block {
      width: 100% !important;
      justify-content: space-between !important;
      gap: 10px !important;
    }
    .xc-nav {
      padding: 10px 20px !important;
    }
    .xc-nav-list {
      flex-wrap: wrap !important;
      gap: 14px 18px !important;
      font-size: 12px !important;
    }
    .xc-headline {
      font-size: 26px !important;
      padding: 16px 26px !important;
      max-width: 460px !important;
    }
    .xc-features {
      grid-template-columns: repeat(2, 1fr) !important;
      row-gap: 40px !important;
    }
  }

  /* ---------- Phone (<=600px) ---------- */
  @media (max-width: 600px) {
    .xc-topbar-right {
      display: none !important;
    }
    .xc-topbar-label {
      display: none !important;
    }
    .xc-header-wrap {
      max-width: 94% !important;
      margin: -16px auto 0 !important;
      border-radius: 8px !important;
    }
    .xc-header-card {
      padding: 16px 16px 10px !important;
    }
    .xc-logo {
      transform: scale(0.92);
      transform-origin: left center;
    }
    .xc-contact-block {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 12px !important;
    }
    .xc-divider {
      display: none !important;
    }
    .xc-nav {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 12px !important;
      padding: 10px 16px 14px !important;
    }
    .xc-nav-list {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 10px !important;
      width: 100% !important;
    }
    .xc-hero-text {
      width: 88% !important;
      top: 60% !important;
    }
    .xc-eyebrow {
      font-size: 10px !important;
      padding: 8px 14px !important;
      letter-spacing: 2px !important;
    }
    .xc-headline {
      font-size: 19px !important;
      padding: 12px 16px !important;
      max-width: 100% !important;
      line-height: 1.3 !important;
    }
    .xc-features {
      grid-template-columns: 1fr !important;
      row-gap: 34px !important;
      margin-top: -30px !important;
    }
    .xc-card {
      padding: 0 24px !important;
    }
  }
`;