import React from "react";

export default function TitlePanel({ children }) {
  const title = children.find((elm) => elm.key === "title");
  const body = children.find((elm) => elm.key === "body");
  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        border: "1px solid #000",
        width: "fit-content",
        boxShadow: "10px 5px 5px #999",
        backgroundColor: "#fff",
      }}
    >
      {title}
      <hr />
      {body}
    </div>
  );
}
