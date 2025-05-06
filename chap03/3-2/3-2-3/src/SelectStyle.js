import React from "react";
import "./SelectStyle.css";
import cn from "classnames";

export default function SelectStyle({ mode }) {
  return (
    <div className={mode === "light" ? "light" : "dark"}>こんにちは、世界</div>
  );
}
