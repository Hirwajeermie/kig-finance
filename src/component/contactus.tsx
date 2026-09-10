import React, { useState } from "react";

const causes = ["Food", "Education", "Medical", "Shelter"];

const actions = [
  { label: "Access", icon: "hand" },
  { label: "Growth", icon: "globe" },
  { label: "Trust", icon: "people" },
];

function Icon({ name }: { name: string }) {
  if (name === "hand") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 13c0-1 .6-1.6 1.6-1.6H8l3.4-2c.8-.5 1.8-.2 2.2.6.4.8.1 1.7-.7 2.2L10 13.6" />
        <path d="M3 13v5.4c0 .6.5 1.1 1.1 1.1h1.3c.4 0 .8-.2 1-.6l.6-1" />
        <path d="M10 13.6h5.6c1 0 1.9.5 2.4 1.4l1.7 3" />
      </svg>
    );
  }
  if (name === "globe") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M4 10.5h16M4 14.5h16" />
        <path d="M12 3.5c2 2.4 3.1 5.3 3.1 8.5s-1.1 6.1-3.1 8.5c-2-2.4-3.1-5.3-3.1-8.5S10 5.9 12 3.5Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="8" cy="9" r="2.2" />
      <circle cx="16" cy="9" r="2.2" />
      <path d="M3.5 18c0-2.5 1.9-4 4.5-4s4.5 1.5 4.5 4M11.5 18c0-2.5 1.9-4 4.5-4s4.5 1.5 4.5 4" />
    </svg>
  );
}

const styles = `
.lc-page {
  --cream: #efe9df;
  --teal: #00c22d;
  --brown: #3a2c1c;
  --gold: #00c22d;
  --ink: #0c0b09;
  --muted: #6d6459;
  font-family: "Poppins", "Segoe UI", sans-serif;
  color: var(--ink);
  background: var(--cream);
}

.lc-hero {
  position: relative;
}

.lc-hero-photo {
  position: absolute;
  inset: 0;
  height: 128px;
  background: linear-gradient(90deg, #2b2b2b, #6b5f52 55%, #8f7f6c);
}

.lc-content {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 40px;
  align-items: start;
}

.lc-intro {
  padding-top: 170px;
  padding-bottom: 4px;
}

.lc-eyebrow {
  color: var(--gold);
  font-weight: 600;
  font-size: 23px;
  letter-spacing: 0.03em;
  margin: 0 0 10px;
}

.lc-title {
  font-family: "Caveat", "Segoe Script", cursive;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.15;
  margin: 0 0 20px;
  max-width: 480px;
}

.lc-copy {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
  max-width: 480px;
  margin: 0 0 14px;
}

.lc-actions {
  display: flex;
  gap: 16px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.lc-action-card {
  background: #fff;
  border: none;
  border-radius: 4px;
  box-shadow: 0 8px 20px rgba(58, 44, 28, 0.08);
  padding: 26px 18px 20px;
  width: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  color: var(--ink);
}

.lc-action-icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--gold);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lc-action-icon svg {
  width: 24px;
  height: 24px;
}

.lc-panel {
  margin-top: 18px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.lc-panel-top {
  background: var(--teal);
  color: #fff;
  padding: 26px 28px;
  display: flex;
  gap: 16px;
  align-items: center;
}

.lc-panel-icon {
  width: 44px;
  height: 44px;
  border: 1.6px solid var(--gold);
  border-radius: 8px;
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.lc-panel-icon svg {
  width: 22px;
  height: 22px;
}

.lc-panel-total {
  font-size: 26px;
  font-weight: 600;
  line-height: 1;
}

.lc-panel-sub {
  color: var(--gold);
  font-size: 17.5px;
  letter-spacing: 0.04em;
  margin-top: 4px;
  color: #fff;
}

.lc-panel-body {
  background: var(--brown);
  color: #fff;
  padding: 28px 28px 32px;
}

.lc-eyebrow--panel {
  color: var(--gold);
}

.lc-panel-heading {
  font-family: "Caveat", "Segoe Script", cursive;
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 22px;
  line-height: 1.3;
}

.lc-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.lc-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12.5px;
  color: var(--gold);
}

.lc-field input,
.lc-field select {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  padding: 12px 14px;
  color: #fff;
  font-size: 14px;
  font-family: inherit;
}

.lc-field input::placeholder {
  color: rgba(255, 255, 255, 0.55);
}

.lc-field select option {
  color: #000;
}

.lc-radio-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 4px 0 6px;
}

.lc-radio {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: #f1e9dd;
}

.lc-radio input {
  accent-color: var(--gold);
}

.lc-submit {
  background: var(--gold);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 15px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 6px;
}

.lc-submit:hover {
  filter: brightness(1.05);
}

.lc-footer {
  height: 46px;
  background: linear-gradient(90deg, #123f42, #1c5a5f);
}

@media (max-width: 860px) {
  .lc-content {
    grid-template-columns: 1fr;
  }
  .lc-intro {
    padding-top: 140px;
  }
  .lc-title {
    font-size: 34px;
  }
}
`;

export default function CharityLanding() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3ad05130-052d-4d81-8883-0ab770c193f7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  const funds = 1200;

  return (
    <div className="lc-page">
      <style>{styles}</style>

      <header className="lc-hero">
        <div className="lc-hero-photo" aria-hidden="true" />

        <div className="lc-content">
          <section className="lc-intro">
            <p className="lc-eyebrow">Get in Touch with KIG Finance</p>
            <h1 className="lc-title">
              We're here to help you access fast, flexible financing solutions. 
              <br />
              Whether you're inquiring about a Business Loan, a Salary Loan, or general partnership opportunities, our team is ready to assist you.
            </h1>
          

            <div className="lc-actions">
              {actions.map((a) => (
                <button key={a.label} className="lc-action-card" type="button">
                  <span className="lc-action-icon">
                    <Icon name={a.icon} />
                  </span>
                  <span>{a.label}</span>
                </button>
              ))} 
            </div>
          </section>

          <aside className="lc-panel">
            <div className="lc-panel-top">
              <span className="lc-panel-icon">
                <Icon name="hand" />
              </span>
              <div>
                <div className="lc-panel-total">{funds.toLocaleString()}</div>
                <div className="lc-panel-sub ">
                  Funds raised by {funds.toLocaleString()} people
                </div>
              </div>
            </div>

            <div className="lc-panel-body">
              <p className="lc-eyebrow lc-eyebrow--panel">Donate now</p>
              <h2 className="lc-panel-heading">
                Giving is the greatest act of money
              </h2>

              <form
                className="lc-form"

                onSubmit={onSubmit} 
              >
                <label className="lc-field">
                  {/* <span>Your full Name</span> */}
                  <input type="text" name='Name' placeholder='Enter your name' required/>
                </label>

                <label className="lc-field">
                  {/* <span>Your Phone Number</span> */}
                  <input type="Tel" name='Phone' placeholder='Enter your mobile number' required/>
                </label>

                <label className="lc-field">
                  {/* <span>Email Address</span> */}
                  <input type="email" name='Email' placeholder='Enter your email' required/>
                </label>

                <label className="lc-field">
                  {/* <span>Write Your Message Here</span> */}
                  <textarea className="lc-field" name="Message"  rows="6" placeholder='Enter your message' required></textarea>
                </label>

                <button type="submit" className="lc-submit">
                  Send now
                </button>
              </form>
               <span>{result}</span>
            </div>
          </aside>
        </div>
      </header>

      <footer className="lc-footer" aria-hidden="true" />
    </div>
  );
}