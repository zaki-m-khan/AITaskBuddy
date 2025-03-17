import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <article className="flex flex-col p-6 max-w-sm bg-white rounded-xl shadow-md">
      <div className="mb-[12px]">{icon}</div>
      <h3 className="mb-3 text-xl font-bold text-indigo-900">{title}</h3>
      <p className="text-base text-gray-700">{description}</p>
    </article>
  );
}

export default FeatureCard;
