import React from "react";

import "./custom-button.style.scss";

export default function CustomButton({
  children,
  isGoogleSignin,
  isInverted,
  ...otherProps
}) {
  return (
    <button
      className={`
        ${isInverted && "inverted"} 
        ${isGoogleSignin && "google-sign-in"}
        custom-button
      `}
      {...otherProps}
    >
      {children}
    </button>
  );
}
