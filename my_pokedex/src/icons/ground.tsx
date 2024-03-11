import React from "react";

type Props = {
  onClick: () => void;
  active: boolean;
};

const GroundIcon: React.FC<Props> = ({ onClick, active }: Props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      id="Line"
      onClick={onClick}
      className={`icon ${active ? "ground" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          id="primary"
          d="M15.24,6.63a1.09,1.09,0,0,0-2,0l-2.8,5.53v0L9,8.9a1,1,0,0,0-1.8,0L3,18H21Z"
        ></path>
      </g>
    </svg>
  );
};

export default GroundIcon;
