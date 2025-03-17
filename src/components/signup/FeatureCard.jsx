import React from "react";

function FeatureCard({ icon, title }) {
  return (
    <article className="flex flex-col gap-2 items-center p-4 bg-indigo-50 rounded-lg w-[165px] max-sm:w-full">
      <div>{icon}</div>
      <span className="text-lg font-semibold text-indigo-900">{title}</span>
    </article>
  );
}

export default FeatureCard;
