import React from "react";

type FeatureProps = {
    feature: string;
}

const FeatureList = ({feature}:FeatureProps) => {
    const styles = {
        color: 'rgb(0, 119, 182)',
      };
  return (
    <li className="flex gap-2 text-nowrap items-center hover:text-dark pointer">
      <span>
        <svg
          style={styles}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-check-circle-fill"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            fill="#0077B6"
          ></path>{" "}
        </svg>
      </span>
      <span>{feature}</span>
    </li>
  );
};

export default FeatureList;
