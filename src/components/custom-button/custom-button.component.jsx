import React from "react";

import "./custom-button.style.scss";

export default function CustomButton({
  children,
  isGoogleSignin,
  ...otherProps
}) {
  return (
    <button
      className={`${isGoogleSignin && "google-sign-in"} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
