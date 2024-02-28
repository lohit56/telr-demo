import React, { useState } from "react";
import BenefitCard from "../BenefitCard/BenefitCard";
import benefit1 from "../../assets/benefit1.svg";
import benefit2 from "../../assets/benefit2.svg";
import benefit3 from "../../assets/benefit2.svg";

function Intro() {
  const benefits = [
    {
      img: benefit1,
      title: "100% PROPRIETARY",
      subtitle:
        "Our platform is 100% built in-house, giving us – and you – an industry-leading degree of responsiveness and customisability.",
    },
    {
      img: benefit2,
      title: "3 PRICING PLANS",
      subtitle:
        "All our features, from anti-fraud to QR codes, are included in every pricing tier.",
    },
    {
      img: benefit3,
      title: "PCI DSS LEVEL 1",
      subtitle:
        "Because we’re PCI DSS Level 1 certified, our hosted payment gateway means that you don’t need PCI DSS certification yourself.",
    },
  ];
  return (
    <section className="container">
      <div className="intro">
        <h1 className="title p-5">ACCEPT PAYMENTS ONLINE WITH EASE</h1>
        <p className="sub-title">
          Our feature-rich payment gateway provides a secure platform for
          accepting online payments. We connect your e-commerce site to the most
          popular networks, such as Visa, MasterCard, American Express and more.
        </p>
        <div className="d-flex pt-5 bs-card">
          {benefits.map((benefit) => (
            <BenefitCard
              img={benefit.img}
              title={benefit.title}
              subtitle={benefit.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Intro;
