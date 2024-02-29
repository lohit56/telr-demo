import React from "react";

function BenefitCard({ img, title, subtitle }) {
  return (
    <div>
      <img src={img} class="card-img-top" alt="..." width={50} height={50} />
      <div class="card-body">
        <h4 className="pt-3 ">{title}</h4>
        <p class="card-text pt-2 ">{subtitle}</p>
      </div>
    </div>
  );
}

export default BenefitCard;
