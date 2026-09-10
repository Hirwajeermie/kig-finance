import React, { useEffect, useState } from "react";

interface Volunteer {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

const volunteers: Volunteer[] = [
  {
    name: "Jason Smith",
    role: "CIO",
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    photo: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Anne Hayes",
    role: "Manager",
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    photo: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Martha Smith",
    role: "Accountant",
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    photo: "https://i.pravatar.cc/300?img=44",
  },
  {
    name: "Mike Tyson",
    role: "IT",
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    photo: "https://i.pravatar.cc/300?img=14",
  },
  {
    name: "Sara Lopez",
    role: "Stock Manager",
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    photo: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "David Kim",
    role: "Marketing",
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    photo: "https://i.pravatar.cc/300?img=51",
  },
];

const socials = [
  { name: "whatsapp", icon: "w" },
  
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
    case "g":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4z" />
          <path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" />
          <path d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1A10 10 0 0 0 2 12c0 1.6.4 3.2 1.1 4.6l3.3-2.6z" />
          <path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 3 14.7 2 12 2A10 10 0 0 0 3.1 7.4l3.3 2.6C7.2 7.7 9.4 5.9 12 5.9z" />
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

function useSlidesPerView() {
  const getValue = () => {
    if (typeof window === "undefined") return 4;
    const w = window.innerWidth;
    if (w < 560) return 1;
    if (w < 900) return 2;
    if (w < 1200) return 3;
    return 4;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const onResize = () => setValue(getValue());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return value;
}

const styles = `
.ov-section {
  background: #efeae1;
  padding: 64px 40px;
  font-family: "Poppins", "Segoe UI", sans-serif;
  text-align: center;
}

.ov-eyebrow {
  color: #00c22d;
  font-weight: 600;
  font-size: 12.5px;
  letter-spacing: 0.05em;
  margin: 0 0 10px;
}

.ov-title {
  font-family: "Caveat", "Segoe Script", cursive;
  font-weight: 600;
  font-size: 34px;
  color: #2a2118;
  margin: 0 0 50px;
}

.ov-slider {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.ov-viewport {
  overflow: hidden;
}

.ov-track {
  display: flex;
  transition: transform 0.45s ease;
}

.ov-slide {
  flex-shrink: 0;
  padding: 0 10px;
  box-sizing: border-box;
}

.ov-card {
  background: #fff;
  padding: 0 24px 32px;
  height: 100%;
  box-sizing: border-box;
}

.ov-photo-wrap {
  background: #efeae1;
  padding-top: 40px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
}

.ov-photo {
  width: 108px;
  height: 108px;
  border-radius: 50%;
  border: 6px solid #fff;
  object-fit: cover;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.ov-name {
  font-size: 17px;
  font-weight: 500;
  color: #2a2118;
  margin: 18px 0 4px;
}

.ov-role {
  color: #00c22d;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin: 0 0 14px;
}

.ov-socials {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
}

.ov-social {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #00c22d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ov-social svg {
  width: 13px;
  height: 13px;
}

.ov-bio {
  font-size: 13px;
  color: #6d6459;
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
}

.ov-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: #fff;
  color: #00c22d;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}

.ov-arrow:hover {
  background: #00c22d;
  color: #fff;
}

.ov-arrow svg {
  width: 18px;
  height: 18px;
}

.ov-arrow--prev {
  left: -21px;
}

.ov-arrow--next {
  right: -21px;
}

.ov-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 30px;
}

.ov-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: none;
  background: #d9cfbe;
  cursor: pointer;
  padding: 0;
}

.ov-dot--active {
  background: #00c22d;
  width: 22px;
  border-radius: 5px;
}

@media (max-width: 560px) {
  .ov-section {
    padding: 48px 20px;
  }
  .ov-arrow--prev {
    left: -6px;
  }
  .ov-arrow--next {
    right: -6px;
  }
}
`;

export default function OurVolunteer() {
  const slidesPerView = useSlidesPerView();
  const pageCount = Math.max(1, Math.ceil(volunteers.length / slidesPerView));
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page > pageCount - 1) setPage(0);
  }, [pageCount, page]);

  const goTo = (p: number) => {
    const next = (p + pageCount) % pageCount;
    setPage(next);
  };

  const slideWidth = 100 / slidesPerView;
  const offset = page * slidesPerView * slideWidth;

  return (
    <section className="ov-section">
      <style>{styles}</style>

      <p className="ov-eyebrow">Meet Our Team</p>
      <h2 className="ov-title">Our V</h2>

      <div className="ov-slider">
        <button
          className="ov-arrow ov-arrow--prev"
          onClick={() => goTo(page - 1)}
          aria-label="Previous"
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <div className="ov-viewport">
          <div
            className="ov-track"
            style={{ transform: `translateX(-${offset}%)` }}
          >
            {volunteers.map((v) => (
              <div
                className="ov-slide"
                style={{ width: `${slideWidth}%` }}
                key={v.name}
              >
                <div className="ov-card">
                  <div className="ov-photo-wrap">
                    <img className="ov-photo" src={v.photo} alt={v.name} />
                  </div>
                  <h3 className="ov-name">{v.name}</h3>
                  <p className="ov-role">{v.role}</p>
                  <div className="ov-socials">
                    {socials.map((s) => (
                      <span className="ov-social" key={s.name}>
                        <SocialIcon type={s.icon} />
                      </span>
                    ))}
                  </div>
                  <p className="ov-bio">{v.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="ov-arrow ov-arrow--next"
          onClick={() => goTo(page + 1)}
          aria-label="Next"
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="ov-dots">
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            className={`ov-dot ${i === page ? "ov-dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}