import React from "react";

export const SvgInfomation = ({ color }) => {
  return (
    <svg
      width="21"
      height="26"
      viewBox="0 0 21 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.77212 5.57142C4.77212 4.09379 5.37559 2.67668 6.44977 1.63183C7.52396 0.586988 8.98087 0 10.5 0C12.0191 0 13.476 0.586988 14.5502 1.63183C15.6244 2.67668 16.2279 4.09379 16.2279 5.57142C16.2279 7.04906 15.6244 8.46617 14.5502 9.51101C13.476 10.5559 12.0191 11.1428 10.5 11.1428C8.98087 11.1428 7.52396 10.5559 6.44977 9.51101C5.37559 8.46617 4.77212 7.04906 4.77212 5.57142ZM0.000151984 23.0347C0.0430733 20.3536 1.16818 17.7964 3.13262 15.9152C5.09705 14.0339 7.74325 12.9795 10.5 12.9795C13.2568 12.9795 15.9029 14.0339 17.8674 15.9152C19.8318 17.7964 20.9569 20.3536 20.9998 23.0347C21.0032 23.2152 20.9523 23.3928 20.8535 23.5456C20.7547 23.6984 20.6123 23.8199 20.4436 23.8952C17.324 25.2865 13.9318 26.0045 10.5 26C6.9538 26 3.58453 25.2472 0.556394 23.8952C0.387721 23.8199 0.245274 23.6984 0.146483 23.5456C0.047692 23.3928 -0.00315903 23.2152 0.000151984 23.0347Z"
        fill={color}
      />
    </svg>
  );
};
