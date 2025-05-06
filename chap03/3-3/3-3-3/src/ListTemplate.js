import React from "react";

export default function ListTemplate({ src, children }) {
  return (
    <dl>
      {src.map((elm) => (
        <React.Fragment key={elm.isbn}>{children(elm)}</React.Fragment>
      ))}
    </dl>
  );
}
