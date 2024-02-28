import React from "react";

function FeatureCard({ img, title, points, btn }) {
  return (
    <div class="card feature-card">
      <div class="card-body d-flex flex-column justify-content-between">
        <div>
          <img
            src={img}
            class="card-img-top"
            alt="..."
            width={60}
            height={60}
          />
          <p class="text-center fw-bold pt-4 fs-5">{title}</p>
          <ul>
            {points.map((point) => (
              <li className="fs-5">{point}</li>
            ))}
          </ul>
        </div>
        <div className="text-center pt-2">
          <a class="btn">{btn}</a>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
