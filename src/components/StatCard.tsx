import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <article className="p-6 bg-white rounded-xl border border-solid">
      <div className="flex justify-between items-center mb-4 text-gray-500">
        <span>{title}</span>
        <div>{icon}</div>
      </div>
      <p className="text-2xl font-semibold text-black">{value}</p>
    </article>
  );
};

export default StatCard;
