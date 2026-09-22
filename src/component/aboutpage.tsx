import type { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import Money from "../assets/money.webp";
import Group from "../assets/Group.jpeg";

export default function AboutSection() {
  const navigate = useNavigate();
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.textCol}>
          <span style={styles.eyebrow}>OUR VISION</span>

          <h2 style={styles.heading}>
            Wealth by
            <br />
            Investing and Saving.
          </h2>

          <p style={styles.paragraph}>
            To be the leading Rwandan retail financial services provider, transorming the investments of the masses and middle-income earners through innovative and inclusive financial solutions.
          </p>

          <button type="button" style={styles.button} onClick={() => navigate("/morexplain")}>
            Discover More
          </button>
        </div>

        <div style={styles.imageCol}>
          <div style={styles.shape} />

          <img
            src={Money}
            alt="Money"
            style={styles.imageBack}
          />

          <img
            src={Group}
            alt="Volunteers with food donation boxes"
            style={styles.imageFront}
          />
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    width: "100%",
    padding: "80px 40px",
    backgroundColor: "#ffffff",
    fontFamily:
      "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    boxSizing: "border-box",
  },
  container: {
    maxWidth: "1140px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "40px",
  },
  textCol: {
    flex: "1 1 380px",
    maxWidth: "460px",
  },
  eyebrow: {
    display: "block",
    color: "#00c22d",
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "12px",
  },
  heading: {
    color: "#1c2b4a",
    fontSize: "32px",
    lineHeight: 1.3,
    fontWeight: 600,
    margin: "0 0 20px",
  },
  paragraph: {
    color: "#7c8695",
    fontSize: "15px",
    lineHeight: 1.8,
    margin: "0 0 30px",
  },
  button: {
    backgroundColor: "#00c22d",
    color: "#ffffff",
    border: "none",
    padding: "16px 32px",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "0.3px",
    cursor: "pointer",
  },
  imageCol: {
    flex: "1 1 380px",
    position: "relative",
    minHeight: "340px",
    maxWidth: "480px",
  },
  shape: {
    position: "absolute",
    top: "40px",
    right: 0,
    width: "180px",
    height: "220px",
    backgroundColor: "#f9e4d9",
    zIndex: 0,
  },
  imageBack: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "60%",
    height: "310px",
    objectFit: "cover",
    zIndex: 1,
  },
  imageFront: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "55%",
    height: "265px",
    objectFit: "cover",
    zIndex: 2,
    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
  },
};