import * as React from "react";

const CloseIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    baseProfile="tiny"
    width="24"
    height="24"
    fill="currentColor"
    color="#37454D"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="#FFF"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M17 17L7 7" />
    </g>
  </svg>
);

export default CloseIcon;
