import React from "react";
import "./styles.css";

export default function Auth({ onNext }) {
  return (
    <div className="auth">
      <h1>AUTH</h1>

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
