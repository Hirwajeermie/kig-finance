import logoo from "../assets/logoo.png"; 
import finance from "../assets/finance.jpg";
import money from "../assets/money.webp";

interface Post {
  image: string;
  date: string;
  author: string;
  title: string;
}

const posts: Post[] = [
  {
    image: finance,
    date: "Sep. 13, 2026",
    author: "KIG Finance",
    title: "Building financial confidence through accessible credit",
  },
  {
    image: money,
    date: "Sep. 10, 2026",
    author: "KIG Finance",
    title: "Smart funding that helps local businesses grow",
  },
];

const socials = [
  { name: "twitter", icon: "t" },
  { name: "facebook", icon: "f" },
  { name: "instagram", icon: "i" },
];

function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case "t":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 5.9c-.7.3-1.5.5-2.2.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.5 1a3.9 3.9 0 0 0-6.6 3.5A11 11 0 0 1 4.1 4.6a3.9 3.9 0 0 0 1.2 5.2c-.6 0-1.2-.2-1.8-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.6.1-1.2.2-1.8.1.5 1.6 2 2.7 3.7 2.8A7.9 7.9 0 0 1 2 18.4a11 11 0 0 0 6 1.8c7.2 0 11.1-6 11.1-11.1v-.5c.8-.6 1.4-1.3 1.9-2.1z" />
        </svg>
      );
    case "f":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.2-1.5 1.6-1.5h1.7V3.7C15.9 3.6 15 3.5 14 3.5c-2.2 0-3.7 1.3-3.7 3.8v2.6H7.6V13h2.7v8h3.2z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.8a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6z" />
          <path d="M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3zm3.2 13.5a3.2 3.2 0 0 1-3.2 3.2h-9a3.2 3.2 0 0 1-3.2-3.2v-9a3.2 3.2 0 0 1 3.2-3.2h9a3.2 3.2 0 0 1 3.2 3.2v9z" />
          <circle cx="17.1" cy="6.9" r="1" />
        </svg>
      );
  }
}

const styles = `
.lf-footer {
  background: #0f2a2c;
  color: #fff;
  font-family: "Poppins", "Segoe UI", sans-serif;
}

.lf-top {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 40px 56px;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 50px;
}

/* Brand column */
.lf-logo {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.lf-logo-love {
  color: #fff;
}

.lf-logo-care {
  color: #00c22d;
}

.lf-logo-sub {
  font-size: 10.5px;
  letter-spacing: 0.15em;
  color: #00c22d;
  margin: 2px 0 20px;
  font-weight: 600;
}

.lf-desc {
  font-size: 13.5px;
  line-height: 1.8;
  color: #9fb3b2;
  margin: 0 0 22px;
  max-width: 320px;
}

.lf-socials {
  display: flex;
  gap: 10px;
}

.lf-social {
  width: 34px;
  height: 34px;
  border-radius: 4px;
  background: #00c22d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lf-social svg {
  width: 15px;
  height: 15px;
}

/* Posts column */
.lf-heading {
  font-size: 17px;
  font-weight: 600;
  margin: 0 0 26px;
}

.lf-post {
  display: flex;
  gap: 14px;
  margin-bottom: 22px;
}

.lf-post-img {
  width: 60px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
}

.lf-post-meta {
  display: flex;
  gap: 14px;
  align-items: center;
  font-size: 11.5px;
  color: #9fb3b2;
  margin-bottom: 6px;
}

.lf-post-meta span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.lf-post-meta svg {
  width: 12px;
  height: 12px;
}

.lf-post-meta .lf-author {
  color: #00c22d;
}

.lf-post-title {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  line-height: 1.4;
  margin: 0;
}

/* Contact column */
.lf-contact-item {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  font-size: 13.5px;
  color: #cfe0df;
  line-height: 1.6;
}

.lf-contact-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 2px;
  color: #00c22d;
}

/* Bottom bar */
.lf-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.lf-bottom-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 22px 40px;
  font-size: 12.5px;
  color: #9fb3b2;
}

.lf-bottom-inner .lf-heart {
  color: #00c22d;
}

 

@media (max-width: 900px) {
  .lf-top {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
`;

export default function Footer() {
  return (
    <footer className="lf-footer">
      <style>{styles}</style>

      <div className="lf-top">
        {/* Brand */}
        <div>
          
            <div className="xc-logo" >
              <img
                 src={logoo}
                 alt="Kig Finance logo"
                  style={{ width: "70px", height: "auto" }}
                />
            
          </div> 
  
          <p className="lf-desc">
            "KIG Finance Wealth by Investing and Saving. We eliminate savings 
            barriers and deliver instant, collateral-friendly loans via mobile 
            money to Rwanda's unbanked and middle-income earners, driving fast, 
            responsible credit access that fuels income growth and lasting financial independence."
          </p>
          <div className="lf-socials">
            {socials.map((s) => (
              <span className="lf-social" key={s.name}>
                <SocialIcon type={s.icon} />
              </span>
            ))}
          </div>
        </div>

        {/* Recent posts */}
        <div>
          <h4 className="lf-heading">Recent Posts</h4>
          {posts.map((p, i) => (
            <div className="lf-post" key={i}>
              <img className="lf-post-img" src={p.image} alt={p.title} />
              <div>
                <div className="lf-post-meta">
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M8 3v4M16 3v4M3 10h18" />
                    </svg>
                    {p.date}
                  </span>
                  <span className="lf-author">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="3.2" />
                      <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
                    </svg>
                    {p.author}
                  </span>
                </div>
                <p className="lf-post-title">{p.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="lf-heading">Have a Questions?</h4>

          <div className="lf-contact-item">
            <svg className="lf-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4v16l4-2 4 2 4-2 4 2V4l-4 2-4-2-4 2-4-2z" />
            </svg>
            <span>KG 17 Ave-Kigali, Remera, Opposite BK Arena</span>
          </div>

          <div className="lf-contact-item">
            <svg className="lf-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1l-.8.8a16 16 0 0 0 6 6l.8-.8a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
            </svg>
            <span>(+250) 788 348 066</span>
          </div>

          <div className="lf-contact-item">
            <svg className="lf-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22l-4-9-9-4 20-7z" />
            </svg>
            <span>kigfinanceltd@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="lf-bottom">
        <div className="lf-bottom-inner">
          Copyright ©2026 All rights 
        </div>
      </div>
    </footer>
  );
}