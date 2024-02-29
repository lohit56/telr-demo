import React, { useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import feature1 from "../../assets/feature1.svg";
import feature2 from "../../assets/feature2.svg";
import feature3 from "../../assets/feature3.svg";

function Feature() {
  const telrGrowth = [
    "Easy onboarding",
    "Multiple ways to integrate",
    "Connect to an ever-growing range of payment methods",
    "Fully proprietary technology",
    "Rapid, regular settlement",
    "Real-time dashboard",
    "Multicurrency, multicountry payments",
    "Email invoices",
    "Recurring payments",
    "Convenience fees",
    "Simple, straightforward pricing",
  ];
  const telrSecure = [
    "Transactions monitored in real-time",
    "Proprietary antifraud software",
    "Enhanced transaction approval ratios",
    "Integrated with card scheme 3DSecure anti-fraud measures",
    "Card tokenisation for repeat visitors",
    "Customisable processing rules",
    "We’re PCI DSS Level 1 certified – which means that you don’t need to be",
  ];
  const telrSocial = [
    "Turn your social media fans into social media buyers",
    "Use QR codes to send customers to an online payment page",
    "Dynamic payment values",
    "Generate payments through messaging apps",
  ];

  const [features] = useState([
    {
      img: feature1,
      title:
        "TelrGrowth makes it easy for you to get started accepting payments online, and scale up your online business.",
      points: telrGrowth,
      btn: "Find out more about TelrGrowth",
    },
    {
      img: feature2,
      title:
        "State of the art security and real-time monitoring, protecting your revenue with the fullest antifraud protection available",
      points: telrSecure,
      btn: "Find out more about TelrSecure",
    },
    {
      img: feature3,
      title:
        "Social commerce and beyond: make it easy for your customers to buy online from you, wherever they are – in social media; instant messaging; in-store",
      points: telrSocial,
      btn: "Find out more about TelrSocial",
    },
  ]);

  return (
    <section className="container feature mt-5">
      <div>
        <h1 className="text-center">EXPLORE THE TELR PAYMENT GATEWAY</h1>
        <div className="d-flex gap-2 pt-5 pb-5 fs-card">
          {features.map((feature, index) => (
            <FeatureCard
              img={feature.img}
              title={feature.title}
              points={feature.points}
              btn={feature.btn}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
