import React from "react";

type Props = {
  onClick: () => void;
  active: boolean;
};

const ElectricIcon: React.FC<Props> = ({ onClick, active }: Props) => {
  return (
    <svg
      fill="#000000"
      viewBox="-7.5 -3.5 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
      onClick={onClick}
      className={`icon ${active ? "electric" : ""}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M5.708 4.968h1.789a1.5 1.5 0 0 1 1.378 2.09l-3.96 9.243a1.049 1.049 0 0 1-2.012-.413v-6.92L1.45 8.923A1.5 1.5 0 0 1 0 7.423V1.5A1.5 1.5 0 0 1 1.5 0h2.708a1.5 1.5 0 0 1 1.5 1.5v3.468z"></path>
      </g>
    </svg>
  );
};

export default ElectricIcon;
