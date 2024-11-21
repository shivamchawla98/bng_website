// FeatureCard.jsx
"use client";

export const FeatureCard = ({ title, description, onClick }) => (
  <button
    className="flex flex-col items-center p-6 text-center cursor-pointer"
    onClick={() => {
      console.log(`Clicked on ${title}`);
      onClick && onClick(); // Check if onClick exists and call it
    }}>
    <img src="/images/Appearance.svg" width={70} alt="Feature Icon" />
    <h3 className="text-xl text-[#27293B] font-semibold mt-2">{title}</h3>
    <p className="text-gray-600 m-0">{description}</p>
  </button>
);
