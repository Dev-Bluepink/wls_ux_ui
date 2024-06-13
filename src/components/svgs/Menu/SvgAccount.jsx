import React from "react";

export const SvgAccount = ({ color }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 12.5C0 5.59615 5.59615 0 12.5 0C19.4038 0 25 5.59615 25 12.5C25 19.4038 19.4038 25 12.5 25C5.59615 25 0 19.4038 0 12.5ZM11.1615 10.6513C12.6308 9.91667 14.2859 11.2449 13.8872 12.8385L12.9782 16.4744L13.0321 16.4487C13.258 16.3494 13.5134 16.3407 13.7455 16.4246C13.9777 16.5084 14.1687 16.6782 14.279 16.8989C14.3894 17.1197 14.4107 17.3744 14.3385 17.6104C14.2662 17.8463 14.106 18.0455 13.891 18.1667L13.8397 18.1949C12.3692 18.9295 10.7141 17.6013 11.1128 16.0077L12.0231 12.3718L11.9692 12.3974C11.8558 12.4605 11.7308 12.4999 11.6018 12.5133C11.4727 12.5268 11.3423 12.514 11.2183 12.4757C11.0943 12.4374 10.9794 12.3744 10.8804 12.2905C10.7814 12.2066 10.7005 12.1035 10.6424 11.9875C10.5843 11.8715 10.5503 11.7449 10.5424 11.6154C10.5345 11.4859 10.5529 11.3561 10.5965 11.2339C10.6401 11.1117 10.708 10.9996 10.796 10.9043C10.8841 10.809 10.9906 10.7325 11.109 10.6795L11.1615 10.6513ZM12.5 8.65385C12.755 8.65385 12.9996 8.55254 13.1799 8.37222C13.3602 8.19189 13.4615 7.94732 13.4615 7.69231C13.4615 7.43729 13.3602 7.19272 13.1799 7.0124C12.9996 6.83207 12.755 6.73077 12.5 6.73077C12.245 6.73077 12.0004 6.83207 11.8201 7.0124C11.6398 7.19272 11.5385 7.43729 11.5385 7.69231C11.5385 7.94732 11.6398 8.19189 11.8201 8.37222C12.0004 8.55254 12.245 8.65385 12.5 8.65385Z"
        fill={color}
      />
    </svg>
  );
};
