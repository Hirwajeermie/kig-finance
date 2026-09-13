import React from "react";
import pic from "../assets/pic.jpeg"
import imag from "../assets/imag.jpg"
import finance from "../assets/finance.jpg"
import top from "../assets/top.jpg"


const styles = `
.about-company {
  background-color: #f6f7f6;
  color: #00c22d;
  padding: 96px 64px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
}

.about-company__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-company__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.about-company__heading {
  font-size: 44px;
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 24px 0;
  letter-spacing: -0.5px;
}

.about-company__text {
  font-size: 15px;
  line-height: 1.7;
  color: #291717;
  margin: 0 0 32px 0;
  max-width: 460px;
}

.about-company__cta {
  background-color: #d9a5ab;
  color: #1a1a1a;
  border: none;
  padding: 16px 32px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.15s ease;
}

.about-company__cta:hover {
  background-color: #cf8f97;
}

.about-company__cta:active {
  transform: translateY(1px);
}

.about-company__cta:focus-visible {
  outline: 2px solid #00c22d;
  outline-offset: 3px;
}

.about-company__gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.about-company__image-wrap {
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  background-color: #1a1a1a;
}

.about-company__image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 900px) {
  .about-company {
    padding: 64px 24px;
  }

  .about-company__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-company__heading {
    font-size: 34px;
  }

  .about-company__gallery {
    gap: 14px;
  }
}

@media (max-width: 480px) {
  .about-company__gallery {
    grid-template-columns: 1fr 1fr;
  }
}
`;

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: imag,
    alt: "Freshly baked sourdough loaves and bread rolls",
  },
  {
    src: finance,
    alt: "Assorted pastries and sweet buns",
  },
  {
    src: top,
    alt: "Sifting powdered sugar over a fruit tart",
  },
  {
    src: pic,
    alt: "Hands kneading dough on a floured surface",
  },
];

const AboutCompany: React.FC = () => {
  return (
    <section className="about-company">
      <style>{styles}</style>
      <div className="about-company__inner">
        <div className="about-company__content">
          <h2 className="about-company__heading">About KIG Finance</h2>
          <p className="about-company__text">
           KIG Finance is a Rwandan financial services company whose motto, "Wealth by Investing and Saving," captures its goal of helping ordinary Rwandans build financial security through accessible credit. Its vision is to become Rwanda's leading retail financial services provider, focused on the masses and middle-income earners. Its mission is to drive economic empowerment by offering fast, responsible credit without requiring prior savings — a barrier traditional banks often impose — helping clients access capital, grow income, and achieve financial independence.

The company offers two main products: a Business Loan, requiring ID, RDB registration, six months of bank/MoMo statements, marital status certificate, and collateral; and a Salary Loan, requiring similar documents plus a work contract (minimum six months), three months of bank statements, and three pay-slips.

Its strategic goals include: Instant Capital Access (eliminating savings requirements, using mobile money data for credit assessment), Risk Management (keeping Portfolio at Risk under 5%, flexible repayment schedules, mandatory financial mentorship), Efficient Fund Sourcing (diversifying capital from banks and investors), and Digital-First Delivery (using USSD, SMS, and mobile apps for loan application and disbursement via MTN or Airtel Mobile Money). 
          </p>
          
        </div>

        <div className="about-company__gallery">
          {galleryImages.map((image) => (
            <div className="about-company__image-wrap" key={image.alt}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;