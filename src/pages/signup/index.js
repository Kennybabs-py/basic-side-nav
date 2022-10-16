import React from "react";
import "./styles.css";

export default function SignUp({ onNext }) {
  return (
    <div className="signup">
      <h1>SignUp</h1>

      <button
        onClick={(e) => {
          e.preventDefault();
          onNext();
        }}
      >
        Create
      </button>
    </div>
  );
}
