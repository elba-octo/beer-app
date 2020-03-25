import React from "react";

export function Button({ value, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
}
