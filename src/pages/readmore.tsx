interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Instant Capital Access",
    description:
      "Streamlined methods of loans advancement: Implement alternative credit methods easily accessing loans (using mobile money, e-cash) to safely approve loans for unbanked individuals",
    icon: "home",
  },
  {
    title: "Risk Management & Portfolio Quality",
    description:
      "Financial Mentorship: Provide mandatory pre-loan advisory briefs to ensure clients use interest-bearing credit for wealth-generating or income-producing activities.",
    icon: "people",
  },
  {
    title: "Efficient Fund Sourcing",
    description:
      "Lending Liquidity: Optimize internal cash flows to ensure a constant revolving fund, allowing instant disbursement of approved credit.",
    icon: "badge",
  },
 
];

function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 11.5 12 5l8 6.5" />
          <path d="M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9" />
        </svg>
      );
    case "people":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="8.5" cy="7.5" r="2.3" />
          <circle cx="16" cy="9" r="1.9" />
          <path d="M4 20c0-2.8 2-4.7 4.5-4.7S13 17.2 13 20" />
          <path d="M13.2 15.6c.6-.5 1.3-.8 2.1-.8 2 0 3.7 1.6 3.7 4.3" />
        </svg>
      );
    case "badge":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="9" r="5" />
          <path d="M9 13.5 7 21l5-2.5L17 21l-2-7.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3.5" y="8" width="17" height="11" rx="1.5" />
          <path d="M8.5 8V6.5A1.5 1.5 0 0 1 10 5h4a1.5 1.5 0 0 1 1.5 1.5V8" />
          <path d="M12 12v3M10.3 13.5h3.4" />
        </svg>
      );
  }
}

const styles = `
.sv-section {
  font-family: "Poppins", "Segoe UI", sans-serif;
  background: #fff;
}

.sv-banner {
  position: relative;
  height: 240px;
  background: linear-gradient(180deg, rgba(30,30,30,0.15), rgba(30,30,30,0.05)),
    url("https://picsum.photos/seed/carehome/1600/500") center/cover no-repeat;
}

.sv-banner::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 90px;
  background: linear-gradient(to bottom right, transparent 49%, #fff 50%);
}

.sv-grid {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 40px 70px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  position: relative;
}

.sv-card {
  text-align:;
  margin-top: -70px;
}

.sv-card:nth-child(2),
.sv-card:nth-child(4) {
  margin-top: -30px;
}

.sv-icon-circle {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 22px;
  color: #2a2118;
}

.sv-icon-circle svg {
  width: 34px;
  height: 34px;
}

.sv-title {
  font-size: 16.5px;
  font-weight: 700;
  color: #2a2118;
  margin: 0 0 14px;
}

.sv-desc {
  font-size: 13px;
  color: #808a83;
  line-height: 1.7;
  max-width: 220px;
  margin: 0 auto 16px;
}

.sv-more {
  font-size: 12.5px;
  color: #ef9d6e;
  text-decoration: none;
  font-weight: 500;
}

.sv-more:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .sv-grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }
  .sv-card,
  .sv-card:nth-child(2),
  .sv-card:nth-child(4) {
    margin-top: 0;
  }
  .sv-banner {
    height: 200px;
  }
}

@media (max-width: 520px) {
  .sv-grid {
    grid-template-columns: 1fr;
  }
}
`;

export default function Services() {
  return (
    <section className="sv-section">
      <style>{styles}</style>

      <div className="sv-banner" />

      <div className="sv-grid">
        {services.map((s) => (
          <div className="sv-card" key={s.title}>
            <div className="sv-icon-circle">
              <ServiceIcon type={s.icon} />
            </div>
            <h3 className="sv-title">{s.title}</h3>
            <p className="sv-desc">{s.description}</p>
        
          </div>
        ))}
      </div>
    </section>
  );
}